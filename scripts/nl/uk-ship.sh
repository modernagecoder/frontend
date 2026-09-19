#!/bin/bash
# Ship one UK cluster page: build, gate, rebuild the UK hub (its page index reads content/uk),
# record the tracker row and commit. Never pushes unless PUSH=1 (owner rule 2026-09-17: commit only;
# each push is a full-site Netlify build).
#   bash scripts/nl/uk-ship.sh <slug> <row> "<type>" "<spine>" "<lesson family>" <commit-message-file>
# Needs the dev server on :3001 for check.js (rendered audit at 1280 and 390).
# Stages an explicit file list, never `git add -A`: other sessions work in this repo.
# Stops (exit 1) at the first failure, before anything is committed.
cd "$(dirname "$0")/../.." || exit 1
LOG=${UK_LOGS:-/tmp/uk-ship}; mkdir -p "$LOG"
SL=$1; ROW=$2; TYPE=$3; SPINE=$4; FAMILY=$5; MSG=$6
HUB=coding-classes-in-united-kingdom
[ -f "$MSG" ] || { echo "no commit message file $MSG"; exit 1; }
[ -f "content/uk/$SL.js" ] || { echo "no module content/uk/$SL.js"; exit 1; }
SHARED="content/coding-global-dossiers.json src/css/coding-global.css src/css/ai-global.css scripts/verify-cluster-pages.js scripts/check-cluster-uniqueness.js scripts/wire-coding-global-routes.js scripts/wire-ai-global-routes.js _redirects netlify.toml sitemap.xml sitemap-international.xml sitemap-core.xml sitemap-topics.xml llms.txt UK-PROGRESS.md"
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
[ -n "$BEST" ] && [ "$BEST" -le 1 ] || { echo "GATE FAIL $SL: 'best' appears $BEST times in visible text (only the capsule question may use it)"; exit 1; }
echo "$R" | grep -q "RESULT PASS" || { echo "$R" | grep -E "BAD|MISS|RESULT"; echo "GATE FAIL $SL: render-check"; exit 1; }

# The hub lists every built UK page, so rebuild it and re-gate it.
node scripts/nl/build.js "$HUB" > "$LOG/hub_build.txt" 2>&1 || { tail -5 "$LOG/hub_build.txt"; exit 1; }
node scripts/verify-cluster-pages.js coding-global 2>&1 | grep -qE "^PASS .*$HUB$" || { echo "UK hub no longer passes verify"; exit 1; }
grep -q "href=\"/$SL\"" "src/pages/$HUB.html" || { echo "UK hub does not link to /$SL"; exit 1; }
c=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "http://localhost:3001/$SL"); [ "$c" = 200 ] || { echo "/$SL returns $c locally"; exit 1; }

node scripts/nl/finish.js --tracker UK-PROGRESS.md --slug "$SL" --row "$ROW" --type "$TYPE" --spine "$SPINE" --trap "$FAMILY" --build "$LOG/${SL}_build.txt" --check "$C" || exit 1

git add -- "content/uk/$SL.js" "src/pages/$SL.html" "src/pages/$SL.md" "content/uk/$HUB.js" "src/pages/$HUB.html" "src/pages/$HUB.md" $SHARED || { echo "git add failed"; exit 1; }
git diff --cached --quiet && { echo "nothing staged"; exit 1; }
git commit -q -F "$MSG" || { echo "commit failed"; exit 1; }
[ "$PUSH" = 1 ] && git push -q origin main 2>&1 | tail -1
echo "committed (not pushed) $SL as $(git log --oneline -1)"
