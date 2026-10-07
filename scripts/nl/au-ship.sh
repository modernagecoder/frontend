#!/bin/bash
# Ship one Australian cluster page: build, gate, record the tracker row and commit on au-cluster-plan.
# NEVER pushes and refuses to run on main: the agent pushes the branch itself every 3 to 5 pages, and
# only the owner merges (spec docs/superpowers/specs/2026-10-07-au-cluster-design.md, section 10).
#   bash scripts/nl/au-ship.sh <slug> <row> "<type>" "<spine>" "<lesson family>" <commit-message-file>
# Needs the dev server on :3001 for check.js (rendered audit at 1280 and 390).
# Stages an explicit file list, never `git add -A`: other sessions work in this repo.
# Stops (exit 1) at the first failure, before anything is committed.
cd "$(dirname "$0")/../.." || exit 1
LOG=${AU_LOGS:-/tmp/au-ship}; mkdir -p "$LOG"
BR=$(git rev-parse --abbrev-ref HEAD); [ "$BR" = au-cluster-plan ] || { echo "refusing: on branch $BR, AU pages are committed only on au-cluster-plan"; exit 1; }
SL=$1; ROW=$2; TYPE=$3; SPINE=$4; FAMILY=$5; MSG=$6
HUB=coding-classes-in-australia
[ -f "$MSG" ] || { echo "no commit message file $MSG"; exit 1; }
[ -f "content/au/$SL.js" ] || { echo "no module content/au/$SL.js"; exit 1; }
SHARED="content/coding-global-dossiers.json src/css/coding-global.css src/css/ai-global.css scripts/verify-cluster-pages.js scripts/check-cluster-uniqueness.js scripts/wire-coding-global-routes.js scripts/wire-ai-global-routes.js _redirects netlify.toml sitemap.xml sitemap-international.xml sitemap-core.xml sitemap-topics.xml sitemap-cities.xml llms.txt AU-PROGRESS.md"
# Refuse to start if a shared registry already has uncommitted edits: they could be another session's work.
# ALLOW_DIRTY=1 is for re-running after a failed ship, once `git diff` shows the changes are all this page's.
DIRTY=$(git diff --name-only -- $SHARED); [ -z "$DIRTY" ] || [ "$ALLOW_DIRTY" = 1 ] || { echo "shared files already modified, commit or stash them first (or ALLOW_DIRTY=1 after checking the diff is this page's):"; echo "$DIRTY"; exit 1; }

node scripts/nl/build.js "$SL" > "$LOG/${SL}_build.txt" 2>&1
tail -1 "$LOG/${SL}_build.txt"
grep -q "built $SL" "$LOG/${SL}_build.txt" || { tail -5 "$LOG/${SL}_build.txt"; exit 1; }

node scripts/nl/check.js "$SL" > "$LOG/${SL}_check.txt" 2>&1
C="$LOG/${SL}_check.txt"
grep -E '^(ok|FAIL|WARN)|ERROR|warn  .*[0-9]%' "$C" | cut -c1-230 | head -12
grep -q "rendered audit clean" "$C" && grep -q "ok    uniqueness: ok" "$C" && grep -q "verify: PASS" "$C" || { echo "GATE FAIL $SL"; exit 1; }
R=$(PYTHONIOENCODING=utf-8 python scripts/nl/render-check.py "$SL")
BEST=$(echo "$R" | grep -o '"best" in visible text: [0-9]*' | grep -o '[0-9]*$')
# "Best" doors use the phrase as their topic (spec section 5); every other page keeps it to the capsule question.
case "$SL" in best-online-*|best-coding-classes-for-*|best-python-*|best-*-australia) BESTMAX=12;; *) BESTMAX=1;; esac
[ -n "$BEST" ] && [ "$BEST" -le "$BESTMAX" ] || { echo "GATE FAIL $SL: 'best' appears $BEST times in visible text (limit $BESTMAX for this page type)"; exit 1; }
echo "$R" | grep -q "RESULT PASS" || { echo "$R" | grep -E "BAD|MISS|RESULT"; echo "GATE FAIL $SL: render-check"; exit 1; }

# Australian index pages (state pages list their cities and suburbs). The national hub
# /coding-classes-in-australia is a legacy cp- page outside this pipeline, so it is linked down by hand
# (scripts/nl/link-down.js) and not rebuilt here.
INDEXES="${AU_INDEXES:-}"
for P in $INDEXES; do
  [ "$P" = "$SL" ] && continue
  [ -f "content/au/$P.js" ] && [ -f "src/pages/$P.html" ] || continue
  node scripts/nl/build.js "$P" > "$LOG/index_build_$P.txt" 2>&1 || { tail -5 "$LOG/index_build_$P.txt"; exit 1; }
  PCL=coding-global; grep -q "cluster: 'ag'" "content/au/$P.js" && PCL=build-ai
  node scripts/verify-cluster-pages.js "$PCL" 2>&1 | grep -qE "^PASS .*$P$" || { echo "index page $P no longer passes verify ($PCL)"; exit 1; }
done
# Link the page down from the hub with scripts/nl/link-down.js before shipping; the hub is staged with the page.
grep -q "href=\"/$SL\"" "src/pages/$HUB.html" || { echo "AU hub does not link to /$SL (run scripts/nl/link-down.js on src/pages/$HUB.html and .md first)"; exit 1; }
c=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "http://localhost:3001/$SL"); [ "$c" = 200 ] || { echo "/$SL returns $c locally"; exit 1; }

# Phone country picker + mac-lead-country meta (d826ae5d5). Netlify's build:phone adds them at
# deploy anyway; running it here keeps the committed pages identical to what ships. Idempotent:
# it only touches pages that lack the tags, which after a rebuild are this page and the indexes.
node scripts/ensure-phone-country.js > "$LOG/${SL}_phone.txt" 2>&1 || { tail -5 "$LOG/${SL}_phone.txt"; exit 1; }
node scripts/ensure-phone-country.js --check > "$LOG/${SL}_phonecheck.txt" 2>&1 || { tail -5 "$LOG/${SL}_phonecheck.txt"; exit 1; }

node scripts/nl/finish.js --tracker AU-PROGRESS.md --slug "$SL" --row "$ROW" --type "$TYPE" --spine "$SPINE" --trap "$FAMILY" --build "$LOG/${SL}_build.txt" --check "$C" || exit 1

IDX="src/pages/$HUB.html src/pages/$HUB.md"; for P in $INDEXES; do [ -f "src/pages/$P.html" ] && IDX="$IDX content/au/$P.js src/pages/$P.html src/pages/$P.md"; done
git add -- "content/au/$SL.js" "src/pages/$SL.html" "src/pages/$SL.md" $IDX $SHARED || { echo "git add failed"; exit 1; }
git diff --cached --quiet && { echo "nothing staged"; exit 1; }
TMPMSG=$(mktemp); cat "$MSG" > "$TMPMSG"
grep -q 'Co-Authored-By: Claude' "$TMPMSG" || printf '\nCo-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>\n' >> "$TMPMSG"
git commit -q -F "$TMPMSG" || { echo "commit failed"; rm -f "$TMPMSG"; exit 1; }
rm -f "$TMPMSG"
echo "committed on au-cluster-plan (not pushed) $SL as $(git log --oneline -1)"
