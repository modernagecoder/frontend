# -*- coding: utf-8 -*-
"""Verify the ARTIFACT, not the source.

Extracts text back out of the rendered PDF and hard-fails on any retired
figure or stale fact.

Follows the repo's own rule (commit e41a8e14): a figure counts as retired
only when it is not a current price ANYWHERE in pricing.config.jsonc.
Numbers can come back, and Rs 9,999 did on 2026-08-03.
"""
import re, sys, json, os, fitz

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PDF = os.path.join(ROOT, 'Modern-Age-Coders-KnowledgeBase-v2-Aug2026.pdf')

# ---- current prices straight from the config -------------------------------
cfg = re.sub(r'//.*', '', open(os.path.join(ROOT, 'pricing/pricing.config.jsonc'),
                               encoding='utf-8').read())
plans = json.loads(cfg)['plans']
live = set()
for subj in plans.values():
    for region in subj.values():
        for v in region.values():
            if isinstance(v, (int, float)):
                live.add(int(v))
print('live prices in config:', sorted(live))

CANDIDATES = [
    (2499,  r'\b2,?499\b',  'Rs 2,499'),
    (4999,  r'\b4,?999\b',  'Rs 4,999'),
    (9999,  r'\b9,?999\b',  'Rs 9,999'),
    (40,    r'\$40\b',      '$40'),
    (150,   r'149\.99',     '$149.99'),   # 149.99 is never a live config value
    (375,   r'374\.99',     '$374.99'),
]
BANNED = [(rx, label) for val, rx, label in CANDIDATES if val not in live or label.startswith('$1') or label.startswith('$3')]
# $149.99 / $374.99 are always banned regardless of the int-match above
BANNED = [(rx, lbl) for val, rx, lbl in CANDIDATES if not (val in live and lbl.startswith('Rs '))]
BANNED += [
    (r'lifetime (plan|price|pricing)', 'lifetime plan'),
    (r'6 to 65',                       'age range 6 to 65'),
    (r'\b500\+\s*students',            'student count 500+'),
    (r'\b247\+?\s*[Rr]eviews',         'review count 247'),
    (r'15\+\s*countries',              'reach claim 15+ countries'),
    (r'kids-ai-mastery-course',        'URL kids-ai-mastery-course'),
]
print('treated as retired:', [l for _, l in BANNED])

doc = fitz.open(PDF)
full = '\n'.join(p.get_text() for p in doc)
lines = full.split('\n')
print('pages: %d | extracted chars: %d' % (len(doc), len(full)))

# A mention is legitimate only when it sits in retirement/warning context.
# Checked over a 2-line window either side, because Chromium hard-wraps text
# and a warning sentence routinely spans lines in the extracted output.
CONTEXT = re.compile(
    r'retired|no longer|does not exist|never quote|do not quote|NEVER QUOTE|'
    r'DO NOT|not\s+quote|was the|old\s|OLD\s|Old\s|previously|superseded|'
    r'out\s*of\s*date|replaced|instead of|CHANGELOG|stale|must never|'
    r'retired_never_quote|is not a current price|came back', re.I)

# The Appendix D JSON has a "retired_never_quote": [ ... ] array whose whole
# purpose is to list these figures, one per line. Mark that span legitimate.
in_array = set()
depth = None
for i, ln in enumerate(lines):
    if 'retired_never_quote' in ln:
        depth = 0
    if depth is not None:
        in_array.add(i)
        if ']' in ln and i > 0 and 'retired_never_quote' not in ln:
            depth = None

def legit(i):
    if i in in_array:
        return True
    lo, hi = max(0, i - 2), min(len(lines), i + 3)
    return bool(CONTEXT.search(' '.join(lines[lo:hi])))

fails = []
for pat, why in BANNED:
    rx = re.compile(pat)
    for i, ln in enumerate(lines):
        if rx.search(ln) and not legit(i):
            fails.append((why, i, ln.strip()[:120]))

REQUIRED = [
    ('1,499', 'group price'), ('2,999', 'mini batch price'),
    ('7,500', '1-on-1 price'), ('8,500', 'maths 1-on-1 price'),
    ('9,999', 'AI-agents 1-on-1 + camp fee'), ('$200', 'international camp fee'),
    ('$100', 'international group'), ('$150', 'international 1-on-1'),
    ('10,000+', 'student count'), ('547', 'review count'),
    ('6 to 67', 'age range'), ('25+', 'country count'),
    ('+91 9123366161', 'phone'), ('contact@modernagecoders.com', 'email'),
    ('teens-ai-tools-mastery-course', 'replacement course URL'),
    ('JK Ambika Tower', 'registered office'),
    ('APPENDIX A', 'appendix A'), ('APPENDIX B', 'appendix B'),
    ('APPENDIX C', 'appendix C'), ('APPENDIX D', 'appendix D'),
]
missing = [(t, w) for t, w in REQUIRED if t not in full]

# structural: count FULL course/blog slugs (>=12 chars) to avoid line-wrap fragments
courses = {u for u in re.findall(r'/courses/[a-z0-9\-]{12,}', full)}
blogs = {u for u in re.findall(r'/blog/[a-z0-9\-]{12,}', full)}
print('course URLs in PDF: %d | blog URLs in PDF: %d' % (len(courses), len(blogs)))

print()
if fails:
    print('FAIL: %d retired figure(s) leaked outside their allowed section' % len(fails))
    for why, i, ln in fails[:30]:
        print('   [%s] line %d: %s' % (why, i, ln))
else:
    print('PASS: no retired figure appears outside the sections that name it deliberately')

if missing:
    print('FAIL: %d required fact(s) missing' % len(missing))
    for t, w in missing:
        print('   missing %-32s (%s)' % (t, w))
else:
    print('PASS: all %d required current facts present in the rendered PDF' % len(REQUIRED))

ok = not fails and not missing and len(courses) >= 110 and len(blogs) >= 110
print('\nRESULT:', 'ALL GREEN' if ok else 'NEEDS FIXING')
sys.exit(0 if ok else 1)
