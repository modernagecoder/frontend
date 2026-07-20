/**
 * IndexNow auto-ping (Netlify build plugin).
 *
 * WHY onSuccess AND NOT the build command:
 *   The build command runs BEFORE the deploy is published. Pinging there would tell Bing
 *   "come crawl these URLs" while the old build is still live — so a brand-new page would
 *   be fetched as a 404 and a changed page would be re-crawled in its stale form. That is
 *   actively harmful. `onSuccess` runs only AFTER the deploy is live, which is the correct
 *   moment. Netlify also documents that onSuccess CANNOT fail the build/deploy, so this
 *   plugin is structurally incapable of breaking a deployment.
 *
 * SAFETY RULES BAKED IN HERE:
 *   1. Never throw. Every path is wrapped; the worst case is a log line and a skip.
 *   2. Production only. Deploy Previews and branch deploys serve different URLs, so
 *      pinging from them would submit URLs that are not the canonical site.
 *   3. Never bulk-submit. Re-submitting unchanged URLs is the documented fastest way to get
 *      an IndexNow key ignored. If we cannot work out what actually changed, we submit
 *      NOTHING and say so — silence is strictly safer than spam.
 *   4. The site build itself is untouched: this does not alter generate:all, build:inline,
 *      minify, the sitemap, or any SEO output. It only reports already-published URLs.
 */

const { execFileSync } = require('child_process');
const path = require('path');

const SCRIPT = path.join(__dirname, '..', '..', 'scripts', 'indexnow-ping.js');
const ROOT = path.join(__dirname, '..', '..');

/** Does this git ref resolve to a real commit in this (possibly shallow) clone? */
function resolves(ref) {
  if (!ref) return false;
  try {
    execFileSync('git', ['rev-parse', '--verify', '--quiet', `${ref}^{commit}`], {
      cwd: ROOT,
      stdio: 'ignore',
    });
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  async onSuccess({ utils }) {
    try {
      const context = process.env.CONTEXT || 'unknown';
      if (context !== 'production') {
        console.log(`IndexNow: skipped (context "${context}", not production).`);
        return;
      }

      // Netlify exposes the previous successful build's commit. That is a far more accurate
      // diff base than HEAD~1, and it survives multi-commit pushes (HEAD~1 would miss
      // everything except the last commit).
      const cached = process.env.CACHED_COMMIT_REF;
      let since = null;
      if (resolves(cached)) {
        since = cached;
      } else if (resolves('HEAD~1')) {
        since = 'HEAD~1';
        console.log('IndexNow: CACHED_COMMIT_REF unavailable, falling back to HEAD~1.');
      }

      if (!since) {
        // Shallow clone or first build. Deliberately do nothing rather than submit all URLs.
        console.log(
          'IndexNow: no usable diff base (shallow clone or first build). Skipping.\n' +
            '          Nothing was submitted. Run `npm run indexnow -- --all` by hand if a ' +
            'full resubmission is genuinely wanted.'
        );
        return;
      }

      console.log(`IndexNow: submitting URLs changed since ${since} ...`);
      const out = execFileSync('node', [SCRIPT, '--since', since], {
        cwd: ROOT,
        encoding: 'utf8',
        timeout: 60_000,
      });
      console.log(out.trim());

      if (utils && utils.status && utils.status.show) {
        utils.status.show({
          title: 'IndexNow',
          summary: 'Changed URLs submitted to Bing, Yandex, Naver, Seznam and Yep.',
        });
      }
    } catch (err) {
      // Deliberately swallowed. A failed ping must never look like a failed deploy, and
      // onSuccess cannot fail the deploy anyway. Log enough to debug later.
      const detail = (err && (err.stdout || err.message) || '').toString().trim();
      console.log(
        'IndexNow: ping did not complete. The deploy is unaffected and the site is live.\n' +
          (detail ? `          Detail: ${detail.slice(0, 500)}` : '')
      );
    }
  },
};
