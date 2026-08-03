/**
 * The price editor — a local page for changing every price on the site.
 *
 *   npm run dev   →   http://localhost:3001/__pricing
 *
 * LOCAL ONLY. The routes live in dev-server.js, which never runs on Netlify,
 * so this page cannot exist in production. It rewrites
 * pricing/pricing.config.jsonc through scripts/pricing/config-template.js
 * (preserving the file's comments), then runs pricing:apply and
 * pricing:verify and shows their output. After a save, commit and push as
 * usual — Netlify re-runs the same pipeline on deploy.
 */

'use strict';

const { execFile } = require('child_process');
const fs = require('fs');
const path = require('path');

const cfgLib = require('./lib/config');
const template = require('./config-template');

const ROOT = cfgLib.REPO_ROOT;

const GROUPS = [
    ['India — Coding (₹ per month)', [
        ['coding.india.group', 'Group classes'],
        ['coding.india.miniBatch', 'Mini Batch (3–4 students)'],
        ['coding.india.personal', '1-on-1 personal']
    ]],
    ['India — Maths (₹ per month)', [
        ['maths.india.group', 'Group classes'],
        ['maths.india.miniBatch', 'Mini Batch (3–4 students)'],
        ['maths.india.personal', '1-on-1 personal']
    ]],
    ['India — Premium Codex/Claude courses (₹ per month)', [
        ['agents.india.group', 'Group classes'],
        ['agents.india.miniBatch', 'Mini Batch (3–4 students)'],
        ['agents.india.personal', '1-on-1 personal']
    ]],
    ['India — Other (₹)', [
        ['school.india.group', 'School bootcamp — group'],
        ['school.india.personal', 'School bootcamp — 1-on-1'],
        ['camps.india.oneTime', 'Holiday camp (one payment)']
    ]],
    ['Outside India — every country, every course (US$)', [
        ['intl.group', 'Group classes / month'],
        ['intl.personal', '1-on-1 personal / month'],
        ['camps.intl.oneTime', 'Holiday camp (one payment)']
    ]]
];

function editorHtml() {
    const values = template.extract(cfgLib.load({ fresh: true }));
    const groups = GROUPS.map(function (g) {
        const rows = g[1].map(function (f) {
            const v = values[f[0]];
            return '<label class="row"><span>' + f[1] + '</span>' +
                '<input name="' + f[0] + '" type="number" min="0" step="1" value="' +
                (v === null || v === undefined ? '' : v) + '"' +
                (v === null ? ' placeholder="not sold"' : '') + '></label>';
        }).join('');
        return '<fieldset><legend>' + g[0] + '</legend>' + rows + '</fieldset>';
    }).join('');

    return '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">' +
'<meta name="viewport" content="width=device-width,initial-scale=1">' +
'<title>Price Editor — Modern Age Coders</title><style>' +
':root{--paper:#FBF8F2;--ink:#1C1814;--muted:#6B6259;--amber:#B45309;--line:rgba(28,24,20,.14)}' +
'*{box-sizing:border-box}body{font:16px/1.6 Georgia,serif;background:var(--paper);color:var(--ink);margin:0;padding:2rem 1rem}' +
'main{max-width:640px;margin:0 auto}h1{font-size:1.6rem;margin:0 0 .25rem}' +
'.sub{color:var(--muted);font-size:.9rem;margin:0 0 1.5rem}' +
'fieldset{border:1px solid var(--line);border-radius:10px;margin:0 0 1.1rem;padding:.9rem 1.1rem;background:#fff}' +
'legend{font-weight:700;font-size:.95rem;padding:0 .5rem}' +
'.row{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.4rem 0;border-bottom:1px dashed var(--line)}' +
'.row:last-child{border-bottom:0}.row span{color:var(--ink)}' +
'input{width:8.5rem;padding:.45rem .6rem;font:inherit;border:1px solid var(--line);border-radius:7px;text-align:right}' +
'input:focus{outline:2px solid var(--amber)}' +
'button{font:inherit;font-weight:700;background:var(--amber);color:#fff;border:0;border-radius:9px;padding:.75rem 1.6rem;cursor:pointer}' +
'button:disabled{opacity:.5;cursor:wait}' +
'#log{white-space:pre-wrap;font:12.5px/1.5 Consolas,monospace;background:#17130E;color:#C2BAAD;' +
'border-radius:10px;padding:1rem;margin-top:1.25rem;display:none;max-height:340px;overflow:auto}' +
'#status{margin-left:.9rem;font-weight:700}' +
'.ok{color:#1F8A55}.bad{color:#B0473C}' +
'.note{background:#FFF7E8;border:1px solid var(--line);border-radius:10px;padding:.7rem 1rem;font-size:.85rem;color:var(--muted);margin:0 0 1.4rem}' +
'</style></head><body><main>' +
'<h1>Price Editor</h1>' +
'<p class="sub">One save updates every page, Google&#39;s data, the AI feeds, and what Razorpay charges.</p>' +
'<div class="note">Local tool — it edits files in this project. After saving, <b>commit and push</b> to make it live. ' +
'Leave a box empty to stop selling that plan (it will be hidden, never given a made-up price).</div>' +
'<form id="f">' + groups +
'<button type="submit" id="save">Save &amp; update every page</button><span id="status"></span>' +
'</form><pre id="log"></pre>' +
'<script>' +
'const f=document.getElementById("f"),log=document.getElementById("log"),st=document.getElementById("status"),btn=document.getElementById("save");' +
'f.addEventListener("submit",async e=>{e.preventDefault();' +
'btn.disabled=true;st.textContent="Updating every page…";st.className="";log.style.display="none";' +
'const values={};new FormData(f).forEach((v,k)=>{values[k]=v.trim()===""?null:Number(v)});' +
'try{const r=await fetch("/__pricing/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(values)});' +
'const j=await r.json();log.textContent=j.log;log.style.display="block";' +
'st.textContent=j.ok?"✓ Done — every page updated. Now commit and push.":"✗ Something failed — read the log; nothing broke.";' +
'st.className=j.ok?"ok":"bad";}catch(err){st.textContent="✗ "+err.message;st.className="bad";}' +
'btn.disabled=false;});' +
'</script></main></body></html>';
}

function run(script, args) {
    return new Promise(function (resolve) {
        execFile(process.execPath, [path.join(ROOT, 'scripts', 'pricing', script)].concat(args || []),
            { cwd: ROOT, timeout: 300000, maxBuffer: 10 * 1024 * 1024 },
            function (err, stdout, stderr) {
                resolve({ ok: !err, out: String(stdout) + (stderr ? '\n' + stderr : '') });
            });
    });
}

/** Handle the editor routes. Returns true if the request was consumed. */
function handle(req, res) {
    if (req.url === '/__pricing' || req.url === '/__pricing/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(editorHtml());
        return true;
    }

    if (req.url === '/__pricing/save' && req.method === 'POST') {
        let body = '';
        req.on('data', function (c) { body += c; if (body.length > 1e6) req.destroy(); });
        req.on('end', async function () {
            let log = '';
            let ok = false;
            try {
                const values = JSON.parse(body);

                // Sanity before anything is written: numbers or null only.
                Object.keys(values).forEach(function (k) {
                    const v = values[k];
                    if (v !== null && (typeof v !== 'number' || !isFinite(v) || v < 0)) {
                        throw new Error(k + ' is "' + v + '" — enter a plain number, or leave empty.');
                    }
                });
                if (!values['intl.group'] || !values['intl.personal']) {
                    throw new Error('The international group and 1-on-1 prices cannot be empty — every visitor outside India is billed from them.');
                }
                if (!values['coding.india.group'] || !values['coding.india.personal']) {
                    throw new Error('The India coding group and 1-on-1 prices cannot be empty.');
                }

                values.updated = new Date().toISOString().slice(0, 10);

                // Write the config through the shared template, then run the
                // same pipeline the build runs. check first — if the file is
                // somehow invalid nothing else touches the pages.
                const cfgPath = path.join(ROOT, 'pricing', 'pricing.config.jsonc');
                const previous = fs.readFileSync(cfgPath, 'utf8');
                fs.writeFileSync(cfgPath, template.render(values));

                const check = await run('check.js');
                log += '── pricing:check ──\n' + check.out + '\n';
                if (!check.ok) {
                    fs.writeFileSync(cfgPath, previous);   // roll back, touch nothing
                    log += '\nConfig rejected — restored the previous prices. No page was changed.\n';
                } else {
                    const apply = await run('apply.js');
                    log += '── pricing:apply ──\n' + apply.out + '\n';
                    const verify = await run('verify.js');
                    log += '── pricing:verify ──\n' + verify.out + '\n';
                    ok = apply.ok && verify.ok;
                }
            } catch (e) {
                log += 'Error: ' + e.message + '\n';
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: ok, log: log }));
        });
        return true;
    }

    return false;
}

module.exports = { handle };
