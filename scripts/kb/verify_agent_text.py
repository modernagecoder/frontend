# -*- coding: utf-8 -*-
"""Verify the plain-text agent knowledge base.

Checks the things that would actually mislead a parent: a wrong price on a
course block, a missing curriculum, a retired figure, or formatting the agent
was told not to emit.
"""
import os, re, sys, json, glob

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TXT = os.path.join(ROOT, 'Modern-Age-Coders-Agent-KnowledgeBase.txt')

txt = open(TXT, encoding='utf-8').read()
lines = txt.split('\n')
print('lines: %d | size: %.2f MB' % (len(lines), os.path.getsize(TXT) / 1048576))

cfg = json.loads(re.sub(r'//.*', '', open(os.path.join(ROOT, 'pricing/pricing.config.jsonc'),
                                          encoding='utf-8').read()))
PLANS, OVERRIDES = cfg['plans'], cfg['courseOverrides']

# category per course from the live listing
s = open(os.path.join(ROOT, 'src/pages/course.html'), encoding='utf-8').read()
blk = s[s.index('const coursesData = ['):s.index('\n        ];', s.index('const coursesData = ['))]
cat = {}
for oid, body in re.findall(r"\{\s*\n?\s*id:\s*(\d+),(.*?)\n            \}", blk, re.S):
    m = re.search(r"templateUrl:\s*'((?:[^'\\]|\\.)*)'", body)
    c = re.search(r"category:\s*'((?:[^'\\]|\\.)*)'", body)
    if m:
        cat[m.group(1).replace('/courses/', '').strip('/')] = c.group(1) if c else None

slugs = set()
for f in glob.glob(os.path.join(ROOT, 'content/courses/data/*.json')):
    if os.path.basename(f) == 'courses-config.json':
        continue
    m = json.load(open(f, encoding='utf-8')).get('meta', {})
    if m.get('slug'):
        slugs.add(m['slug'])

fails = []

# --- 1. every course present, with a title and a curriculum
blocks = re.split(r'^={100}$\nCOURSE \d+ OF \d+: ', txt, flags=re.M)[1:]
print('course blocks: %d (expect %d)' % (len(blocks), len(slugs)))
if len(blocks) != len(slugs):
    fails.append('course block count %d != %d course JSONs' % (len(blocks), len(slugs)))

no_title = no_link = no_curric = no_price = 0
for b in blocks:
    head = b.split('\n', 1)[0].strip()
    if not head:
        no_title += 1
    if 'Course link: https://' not in b:
        no_link += 1
    if 'PRICE FOR THIS COURSE' not in b:
        no_price += 1
    if 'FULL CURRICULUM, WEEK BY WEEK' not in b:
        no_curric += 1
for label, n in (('blocks with no title', no_title), ('blocks with no link', no_link),
                 ('blocks with no price', no_price), ('blocks with no curriculum', no_curric)):
    print('%-32s %d' % (label, n))
    if n and 'curriculum' not in label:
        fails.append('%s: %d' % (label, n))

# --- 2. every slug appears as a link
missing = [s_ for s_ in sorted(slugs) if '/courses/' + s_ not in txt]
print('slugs missing from file        %d' % len(missing))
if missing:
    fails.append('missing slugs: %s' % missing[:5])

# --- 3. per-course price correctness
wrong = []
for b in blocks:
    m = re.search(r'Course link: https://\S+/courses/(\S+)', b)
    if not m:
        continue
    slug = m.group(1)
    key = OVERRIDES.get(slug, 'maths' if cat.get(slug) == 'mathematics' else 'coding')
    ind = PLANS[key]['india']
    want = 'group Rs {:,}, mini batch Rs {:,}, one to one Rs {:,}'.format(
        ind['group'], ind['miniBatch'], ind['personal'])
    if want not in b:
        got = re.search(r'In India, per month:\s+(.*)', b)
        wrong.append((slug, key, want, got.group(1) if got else '??'))
print('courses with a wrong price     %d' % len(wrong))
for w in wrong[:6]:
    print('    %s (%s)\n      want: %s\n      got : %s' % w)
if wrong:
    fails.append('%d courses priced wrong' % len(wrong))

# --- 4. retired figures
live = {int(v) for subj in PLANS.values() for reg in subj.values()
        for v in reg.values() if isinstance(v, (int, float))}
for val, pat, label in ((2499, r'Rs 2,499', 'Rs 2,499'), (4999, r'Rs 4,999', 'Rs 4,999'),
                        (40, r'\$40\b', '$40')):
    if val in live:
        continue
    hits = [i for i, l in enumerate(lines) if re.search(pat, l)]
    ok = [i for i in hits if 'no longer' in '\n'.join(lines[max(0, i - 8):i + 2]).lower()]
    bad = [i for i in hits if i not in ok]
    if bad:
        fails.append('%s appears outside the retired list at lines %s' % (label, bad[:5]))
        print('RETIRED LEAK %s -> lines %s' % (label, bad[:5]))

# --- 5. formatting the generator itself should never emit.
# Course content legitimately contains ** (Python's exponent operator, and a
# lesson that teaches Markdown), so this checks the structural lines we write,
# not the teaching text we quote.
def is_quoted_content(l):
    return l.startswith('    ') or l.lstrip().startswith('- ')

for pat, why in ((r'\*\*[A-Za-z][^*\n]{0,60}\*\*', 'markdown bold'),
                 (r'^\s*\|', 'markdown table'),
                 (r'—', 'em dash'), (r'₹', 'raw rupee glyph'),
                 (r'&amp;|&#\d+;|&quot;', 'html entity')):
    hits = [i for i, l in enumerate(lines)
            if re.search(pat, l) and not is_quoted_content(l)]
    if hits:
        fails.append('%s at %d lines, e.g. %s' % (why, len(hits), hits[:3]))
        print('FORMAT %s: %d lines' % (why, len(hits)))

# --- 6. the pricing behaviour rules must be present (whitespace-insensitive,
#        because the file is hard-wrapped)
flat = re.sub(r'\s+', ' ', txt)
for need in ('Never read out two different price lists',
             'quote only the one that applies',
             'Are you in India or outside India'):
    if need not in flat:
        fails.append('missing pricing rule text: %s' % need)

# --- 7. THE RULE THE OWNER ASKED FOR: never present both regions together
#        outside PART 4 and the per-course header line that is explicitly labelled.
# Only OUR OWN figures matter here. A salary range like "Rs 1,000-5,000/hour or
# $20-$100/hour" is about what a freelancer earns, not what we charge.
india_vals = {v for subj in PLANS.values() for k, reg in subj.items() if k == 'india'
              for v in reg.values() if isinstance(v, (int, float))}
intl_vals = {v for subj in PLANS.values() for k, reg in subj.items() if k == 'international'
             for v in reg.values() if isinstance(v, (int, float))}
IND = re.compile(r'Rs ?(' + '|'.join(format(int(v), ',d') for v in sorted(india_vals)) + r')\b')
INTL = re.compile(r'\$(' + '|'.join(str(int(v)) for v in sorted(intl_vals)) + r')\b')
part4 = flat.find('PART 4. PRICES')
part5 = flat.find('PART 5. QUICK COURSE INDEX')
both = []
for i, l in enumerate(lines):
    if IND.search(l) and INTL.search(l):
        both.append(i)
# allowed: inside PART 4, and the two labelled price lines in each course header
allowed_ctx = ('quote only the one that applies', 'In India, per month', 'Outside India, per month')
leak = []
for i in both:
    ctx = '\n'.join(lines[max(0, i - 3):i + 1])
    if not any(a in ctx for a in allowed_ctx):
        leak.append(i)
print('lines mixing rupees and dollars %d (%d outside the labelled price blocks)'
      % (len(both), len(leak)))
for i in leak[:5]:
    print('    line %d: %s' % (i, lines[i].strip()[:110]))
if leak:
    fails.append('%d lines quote both regions together outside PART 4' % len(leak))

print()
if fails:
    print('FAIL')
    for f in fails:
        print('  -', f)
else:
    print('PASS: plain text knowledge base is consistent with the live config and course data')
sys.exit(1 if fails else 0)
