# -*- coding: utf-8 -*-
"""Build the PLAIN TEXT knowledge base for the WhatsApp / AI agent.

No markdown, no tables, no styling. Every course carries its full week by week
curriculum, its projects, and its own link, so a parent can be sent straight to
the page that proves what we said.

Design note: each course block repeats the course name, link and price at the
top. Retrieval systems chunk a document and a chunk must carry its own context,
otherwise the agent answers about a course it can no longer name.

Prices come from pricing/pricing.config.jsonc. The agent is told to quote only
the price that applies to the person asking, never both regions side by side.
"""
import os, re, json, glob
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, 'Modern-Age-Coders-Agent-KnowledgeBase.txt')
SITE = 'https://learn.modernagecoders.com'

# ---------------------------------------------------------------- sources
cfg = json.loads(re.sub(r'//.*', '', open(os.path.join(ROOT, 'pricing/pricing.config.jsonc'),
                                          encoding='utf-8').read()))
PLANS = cfg['plans']
OVERRIDES = cfg['courseOverrides']
BF = json.load(open(os.path.join(ROOT, 'scripts/brand-facts.json'), encoding='utf-8'))

# category + age group per course, from the live course listing
s = open(os.path.join(ROOT, 'src/pages/course.html'), encoding='utf-8').read()
blk = s[s.index('const coursesData = ['):s.index('\n        ];', s.index('const coursesData = ['))]
def _f(b, k):
    m = re.search(k + r":\s*'((?:[^'\\]|\\.)*)'", b)
    return m.group(1) if m else None
ATLAS_CAT, ATLAS_AGE = {}, defaultdict(set)
for oid, body in re.findall(r"\{\s*\n?\s*id:\s*(\d+),(.*?)\n            \}", blk, re.S):
    u = (_f(body, 'templateUrl') or '').replace('/courses/', '').strip('/')
    if u:
        ATLAS_CAT[u] = _f(body, 'category')
        if _f(body, 'ageGroup'):
            ATLAS_AGE[u].add(_f(body, 'ageGroup'))

AGE_LABEL = {'kids': 'Kids', 'teens': 'Teens', 'college': 'College students',
             'professional': 'Working professionals', 'girls': 'Girls only batches',
             'elementary': 'Elementary school', 'middle': 'Middle school', 'high': 'High school'}

def plan_key(slug):
    if slug in OVERRIDES:
        return OVERRIDES[slug]
    return 'maths' if ATLAS_CAT.get(slug) == 'mathematics' else 'coding'

def rupee(n):
    return 'Rs ' + format(int(n), ',d')

# ---------------------------------------------------------------- helpers
def clean(v):
    if v is None:
        return ''
    t = str(v)
    t = t.replace('—', ', ').replace('–', '-').replace('’', "'")
    t = t.replace('“', '"').replace('”', '"').replace('‘', "'")
    t = t.replace('&amp;', '&').replace('&#x27;', "'").replace('&quot;', '"')
    t = t.replace('₹', 'Rs ').replace('&#8377;', 'Rs ').replace('&nbsp;', ' ')
    # Drop emoji and decorative pictographs only. Everything a human reads
    # (letters, digits, punctuation, accents) must survive untouched.
    t = ''.join('' if _is_pictograph(c) else c for c in t)
    return re.sub(r'[ \t]+', ' ', t).strip()

_PICTO_RANGES = (
    (0x1F000, 0x1FAFF),   # emoji, pictographs, symbols
    (0x2190, 0x21FF),     # arrows
    (0x2300, 0x23FF),     # misc technical
    (0x2500, 0x27BF),     # box drawing, dingbats
    (0x2B00, 0x2BFF),     # misc symbols and arrows
    (0xFE00, 0xFE0F),     # variation selectors
)

def _is_pictograph(ch):
    o = ord(ch)
    return any(lo <= o <= hi for lo, hi in _PICTO_RANGES)

def wrap(text, width=96, indent=''):
    """plain paragraph wrap; keeps the file readable and diff-able"""
    words, lines, cur = clean(text).split(), [], indent
    for w in words:
        if len(cur) + len(w) + 1 > width and cur.strip():
            lines.append(cur.rstrip())
            cur = indent + w + ' '
        else:
            cur += w + ' '
    if cur.strip():
        lines.append(cur.rstrip())
    return lines

L = []
def out(x=''):
    L.append(x)

def para(text, indent=''):
    for ln in wrap(text, 96, indent):
        out(ln)

def bullets(items, indent='  ', mark='- '):
    for it in items:
        if isinstance(it, dict):
            it = '; '.join('%s: %s' % (k.replace('_', ' '), clean(v)) for k, v in it.items())
        w = wrap(it, 94, '')
        if not w:
            continue
        out(indent + mark + w[0])
        for extra in w[1:]:
            out(indent + '  ' + extra)

def kvblock(d, indent='  '):
    for k, v in d.items():
        if isinstance(v, (dict, list)) or v is None:
            continue
        label = k.replace('_', ' ').capitalize()
        w = wrap('%s: %s' % (label, clean(v)), 94)
        if not w:
            continue
        out(indent + w[0])
        for extra in w[1:]:
            out(indent + '  ' + extra)

def rule(ch='=', n=100):
    out(ch * n)

# ---------------------------------------------------------------- price hygiene
# Course FAQs were written for web pages, so many of them answer "what does it
# cost" by listing the India price AND the international price in one breath.
# That is exactly what the agent is told never to do (RULE 1), so those answers
# are not allowed through. Pricing lives in PART 4 and in each course header.
Q_IS_ABOUT_PRICE = re.compile(
    r'\b(cost|costs|price|pricing|fee|fees|charge|charges|afford|expensive|cheap|'
    r'discount|instal?ment|payment|pay\b|refund|worth it|value for money)\b', re.I)
SENTENCE_HAS_PRICE = re.compile(
    r'(Rs\s?[\d,]|₹|\$\s?\d|USD|INR|per month|/month|a month\b|monthly fee)', re.I)

def strip_prices(answer):
    """drop only the sentences that quote money, keep the teaching content"""
    parts = re.split(r'(?<=[.!?])\s+', clean(answer))
    kept = [p for p in parts if not SENTENCE_HAS_PRICE.search(p)]
    return ' '.join(kept).strip()

def usable_faqs(faqs):
    o = []
    for q in faqs or []:
        if not isinstance(q, dict):
            continue
        question = clean(q.get('question'))
        if not question or Q_IS_ABOUT_PRICE.search(question):
            continue                      # PART 4 answers money questions
        answer = strip_prices(q.get('answer'))
        if len(answer) < 40:              # nothing meaningful left once money is out
            continue
        o.append((question, answer))
    return o

# ---------------------------------------------------------------- curriculum walker
WEEKISH = re.compile(r'^(week|month|term|unit|module|semester|day|phase|stage|level)[_ ]', re.I)
SKIP_IN_WEEK = {'title'}

def render_week(key, w, indent):
    # The title almost always already names the week ("Weeks 1-2: Place Value").
    # Repeating the JSON key in front of it just reads as a stutter.
    head = clean(w.get('title'))
    out('%s%s' % (indent, head or key.replace('_', ' ').title()))
    for field, tag in (('topics', 'Topics'), ('projects', 'Projects built'),
                       ('practice', 'Practice'), ('deliverables', 'Deliverables'),
                       ('assessment', 'Assessment'), ('tools', 'Tools'),
                       ('description', 'Detail'), ('focus', 'Focus'),
                       ('content', 'Content'), ('outcomes', 'Outcomes')):
        v = w.get(field)
        if not v:
            continue
        if isinstance(v, list):
            out('%s  %s:' % (indent, tag))
            bullets([clean(x) for x in v], indent + '    ')
        else:
            para('%s: %s' % (tag, clean(v)), indent + '  ')

def render_group(key, node, indent):
    """a month/phase container holding weeks, or a week itself"""
    if not isinstance(node, dict):
        return
    if 'topics' in node or 'projects' in node:
        render_week(key, node, indent)
        return
    title = clean(node.get('title'))
    weeks = clean(node.get('weeks'))
    line = title or key.replace('_', ' ').title()
    if weeks and weeks.lower() not in line.lower():
        line += ' (' + weeks + ')'
    out(indent + line)
    if node.get('description'):
        para(clean(node['description']), indent + '  ')
    for k, v in node.items():
        if k in ('title', 'weeks', 'description'):
            continue
        if isinstance(v, dict):
            render_group(k, v, indent + '  ')
        elif isinstance(v, list):
            out('%s  %s:' % (indent, k.replace('_', ' ').capitalize()))
            bullets([clean(x) for x in v], indent + '    ')

# ================================================================ GLOBAL SECTIONS
rule()
out('MODERN AGE CODERS - COMPLETE KNOWLEDGE BASE FOR AI AND WHATSAPP AGENTS')
rule()
out()
out('PLAIN TEXT EDITION. Version 2.0. Last updated 4 August 2026.')
out('Source of truth: generated directly from the live website codebase.')
out('Website: ' + SITE)
out()
para('This file is written for an AI agent, a WhatsApp bot or a support person answering '
     'parents and students. Read the rules in PART 1 before answering anything. Every course '
     'in PART 6 includes its own link, its full week by week curriculum and the projects the '
     'student builds, so a parent can be sent to the page that proves what you told them.')
out()

rule()
out('PART 1. RULES YOU MUST FOLLOW BEFORE ANSWERING')
rule()
out()
out('RULE 1. HOW TO TALK ABOUT PRICE')
out()
para('Work out where the person is first, then give only the price that applies to them. '
     'Never read out two different price lists. Never say "in India it is this and outside '
     'India it is that". Never compare our regions to each other. The person asked what it '
     'costs for them, so answer only that, in their currency, and stop.')
out()
out('  If the person is in India, quote in rupees.')
out('  If the person is anywhere else, quote in US dollars.')
out('  If you genuinely cannot tell, ask one short question: "Are you in India or outside India?"')
out('  Never volunteer a price the person did not ask about.')
out('  Never explain the pricing structure, the regions, or why prices differ.')
out('  Give the number, say what is included, then offer the free demo class.')
out()
out('RULE 2. BATCH TIMINGS ARE NEVER YOURS TO GIVE')
out()
para('Never invent a class time, a day or a slot. We run many batches across weekday evenings, '
     'weekend mornings and afternoons, and separate slots for other time zones. Say this, then '
     'hand over: "To fix the exact slot that suits you, please message Shivam Sir on '
     '+91 9123366161. He allocates every batch personally."')
out()
out('RULE 3. THE FREE DEMO IS ALWAYS THE NEXT STEP')
out()
para('Every conversation should end with the free demo offer. It is a full live class with a '
     'real teacher, no card details are ever asked for, and the parent is welcome to sit in. '
     'To book it collect: student name, age or class, subject wanted, and a WhatsApp number '
     'with country code.')
out()
out('RULE 4. NEVER PROMISE THESE')
out()
bullets([
    'A specific teacher by name.',
    'A specific class date or time before Shivam Sir confirms it.',
    'A job, a placement, a salary or a guaranteed exam score.',
    'A discount you have not confirmed.',
    'A batch size smaller than the published cap of 10 for group classes.',
    'A refund outside the written policy in PART 8.',
])
out()
out('RULE 5. NEVER ASK FOR')
out()
bullets([
    'Aadhaar, PAN or any identity document over chat.',
    'Full card numbers, CVV or OTP. Payments happen only through secure links.',
])
out()
out('RULE 6. WHEN YOU DO NOT KNOW')
out()
para('Do not guess and do not invent a course we do not run. Say: "Let me get you the exact '
     'answer on that. Please message Shivam Sir on +91 9123366161 and he will help you '
     'personally." Hand over for: custom or corporate quotes, school partnerships, payment in '
     'a currency other than rupees or dollars, refund disputes, and anything not in this file.')
out()
out('RULE 7. TONE')
out()
bullets([
    'Warm, plain and parent friendly. Short messages. Parents are busy.',
    'Use Sir or Ma\'am with Indian customers. Reply in Hindi if they write in Hindi.',
    'Lead with how we teach, not with the price. Price is the last thing you mention.',
    'Never criticise another institute. State what we do and stop.',
    'Never use a dash to join clauses. Use a comma or a full stop.',
])
out()

rule()
out('PART 2. WHO WE ARE')
rule()
out()
out('Name: Modern Age Coders')
out('Legal name: Modern Age Coders Education')
out('Founded: %s' % BF['founded'])
out('Founder and Director: Shivam Khemka, called Shivam Sir')
out('What we do: we teach live online coding and mathematics, and we build software for businesses.')
out('Students taught: %s' % BF['students'])
out('Rating: %s out of 5, across %s Google reviews' % (BF['rating'], BF['reviews']))
out('Countries we teach in: %s' % BF['countries'])
out('Ages we teach: %s' % BF['ages'])
out('Languages: English and Hindi')
out('Website: ' + SITE)
out()
out('CONTACT')
out()
out('  Phone and WhatsApp: +91 9123366161 (Shivam Sir)')
out('  Email: contact@modernagecoders.com')
out('  Phone hours: Monday to Saturday, 9:00 AM to 6:00 PM IST. Sunday closed.')
out('  Callback: leave a number on the website and we call back within 3 hours.')
out('  Contact form reply: within 48 hours on working days.')
out('  Registered office: 1B, JK Ambika Tower, Kolkata, West Bengal 700002, India.')
out()
para('Note on the office. All teaching is online. Students never travel anywhere. The Kolkata '
     'address is only our registered office, there is no campus to visit.')
out()
out('OUR PROMISE TO EVERY FAMILY')
out()
bullets([
    'A free demo class before you pay anything.',
    'Monthly billing. Cancel any month. No six or twelve month packages.',
    'No registration fee and no hidden charges. The price quoted is the whole price.',
    'Small live batches. Group is capped at 10 students, mini batch is 3 to 4, and one to one is one student.',
    'You keep everything you build. Projects, code and certificates stay yours.',
    'A real person on WhatsApp at +91 9123366161, not a ticket queue.',
])
out()

rule()
out('PART 3. HOW CLASSES WORK')
rule()
out()
bullets([
    'Every class is live with a real teacher. Nothing is pre recorded.',
    'Two classes a week, one hour each, which is eight classes a month.',
    'Every class is recorded, so a missed class can be watched later.',
    'Students need a computer (Windows, Mac or Chromebook) and steady internet.',
    'Most courses run inside the browser, so nothing needs installing.',
    'A webcam and microphone are recommended. For maths, a notebook and pen.',
    'Beginner courses usually run 3 to 6 months. Advanced ones run 6 to 9 months.',
    'Students can join mid month. We either place them in a running batch or start a new one.',
    'Classes can be paused for exams or holidays with about a week of notice.',
])
out()
out('BATCH SIZES')
out()
out('  Group classes: capped at 10 students.')
out('  Mini batch: 3 to 4 students, close to one to one attention.')
out('  One to one: one student with one dedicated mentor.')
out('  Custom group for a school or a friend group: 3 to 10 students.')
out()
out('WHAT EVERY PLAN INCLUDES')
out()
bullets([
    'Two live classes every week, one hour each.',
    'Recordings of every class.',
    'Doubt clearing support.',
    'Project based learning, real builds rather than theory.',
    'A certificate when the course is completed.',
    'Progress updates for parents.',
])
out()

rule()
out('PART 4. PRICES')
rule()
out()
para('Read RULE 1 again before you quote anything. Give only the price for the person you are '
     'talking to. Do not read out both lists.')
out()
out('FOR A STUDENT IN INDIA, PER MONTH')
out()
out('  Coding, and every subject except mathematics:')
out('    Group class:   %s' % rupee(PLANS['coding']['india']['group']))
out('    Mini batch:    %s' % rupee(PLANS['coding']['india']['miniBatch']))
out('    One to one:    %s' % rupee(PLANS['coding']['india']['personal']))
out()
out('  Mathematics:')
out('    Group class:   %s' % rupee(PLANS['maths']['india']['group']))
out('    Mini batch:    %s' % rupee(PLANS['maths']['india']['miniBatch']))
out('    One to one:    %s' % rupee(PLANS['maths']['india']['personal']))
out()
out('  The two AI coding agent courses (Codex and Claude Code):')
out('    Group class:   %s' % rupee(PLANS['agents']['india']['group']))
out('    Mini batch:    %s' % rupee(PLANS['agents']['india']['miniBatch']))
out('    One to one:    %s' % rupee(PLANS['agents']['india']['personal']))
out()
out('FOR A STUDENT OUTSIDE INDIA, PER MONTH')
out()
out('    Group class:   $%s' % PLANS['coding']['international']['group'])
out('    One to one:    $%s' % PLANS['coding']['international']['personal'])
out()
out('  This applies to every subject including mathematics and the AI agent courses.')
out('  Mini batch is not offered outside India. If asked, simply offer group or one to one.')
out('  We can also bill in EUR, GBP, CAD, AUD, SGD and AED. For those, hand over to Shivam Sir.')
out()
out('HOLIDAY CAMPS. This is a single payment, not a monthly fee.')
out()
out('    In India:      %s one time' % rupee(PLANS['camps']['india']['oneTime']))
out('    Outside India: $%s one time' % PLANS['camps']['international']['oneTime'])
out()
out('IN SCHOOL BOOTCAMP PROGRAMMES, India only, per month')
out()
out('    Group:         %s' % rupee(PLANS['school']['india']['group']))
out('    One to one:    %s' % rupee(PLANS['school']['india']['personal']))
out()
out('CUSTOM AND CORPORATE TRAINING')
out()
para('Priced on request, never fixed. Used for company teams, school partnerships, bulk '
     'enrolments and specialised technology. Take the requirement and hand over to Shivam Sir.')
out()
out('PAYMENT')
out()
bullets([
    'India pays in rupees. Everywhere else pays in US dollars.',
    'We accept UPI, bank transfer and card, through secure payment links only.',
    'Billing is monthly and recurring. Cancel any month.',
    'Instalments are available on many courses. Confirm with Shivam Sir.',
    'Discounts for paying quarterly or yearly, and sometimes for siblings. Confirm before promising.',
])
out()
out('FIGURES THAT ARE NO LONGER OUR PRICES. Never quote these.')
out()
live = set()
for subj in PLANS.values():
    for reg in subj.values():
        for v in reg.values():
            if isinstance(v, (int, float)):
                live.add(int(v))
for old in (2499, 4999, 40, 149.99, 374.99):
    if int(old) not in live:
        out('  %s' % ('Rs ' + format(int(old), ',d') if old > 500 else '$' + str(old)))
out('  Any lifetime plan or one time payment for a monthly course.')
out()

# ================================================================ COURSES
rows = []
for f in sorted(glob.glob(os.path.join(ROOT, 'content/courses/data/*.json'))):
    if os.path.basename(f) == 'courses-config.json':
        continue
    try:
        d = json.load(open(f, encoding='utf-8'))
    except Exception:
        continue
    m = d.get('meta', {})
    if not m.get('slug'):
        continue
    rows.append((m['slug'], m, d))
seen, courses = set(), []
for slug, m, d in rows:
    if slug in seen:
        continue
    seen.add(slug)
    courses.append((slug, m, d))
courses.sort(key=lambda r: clean(r[1].get('title')).lower())

maths = [c for c in courses if ATLAS_CAT.get(c[0]) == 'mathematics']
coding = [c for c in courses if ATLAS_CAT.get(c[0]) != 'mathematics']

rule()
out('PART 5. QUICK COURSE INDEX (%d courses)' % len(courses))
rule()
out()
para('Full detail for each course, including the week by week curriculum and the projects, is '
     'in PART 6. Send parents the link so they can read it themselves.')
out()
out('CODING, AI AND TECHNOLOGY (%d courses)' % len(coding))
out()
for slug, m, d in coding:
    out('  %s' % clean(m.get('title')))
    out('      %s/courses/%s' % (SITE, slug))
out()
out('MATHEMATICS (%d courses)' % len(maths))
out()
for slug, m, d in maths:
    out('  %s' % clean(m.get('title')))
    out('      %s/courses/%s' % (SITE, slug))
out()

rule()
out('PART 6. EVERY COURSE IN FULL DETAIL')
rule()
out()
para('Each course below is self contained. It repeats the course name, the link and the price '
     'so you never quote the wrong one. The week by week plan is exactly what the student is '
     'taught, and the projects are exactly what they build and keep.')
out()

for idx, (slug, m, d) in enumerate(courses, 1):
    url = '%s/courses/%s' % (SITE, slug)
    pk = plan_key(slug)
    ind, intl = PLANS[pk]['india'], PLANS[pk]['international']
    ages = ', '.join(sorted(AGE_LABEL.get(a, a) for a in ATLAS_AGE.get(slug, [])))

    out()
    rule('=')
    out('COURSE %d OF %d: %s' % (idx, len(courses), clean(m.get('title')).upper()))
    rule('=')
    out()
    out('Course link: %s' % url)
    out('Subject area: %s' % (clean(m.get('category')) or 'Coding'))
    if ages:
        out('Designed for: %s' % ages)
    if m.get('level'):
        out('Who can join: %s' % clean(m['level']))
    if m.get('duration'):
        out('Course length: %s' % clean(m['duration']))
    if m.get('commitment'):
        out('Time needed: %s' % clean(m['commitment']))
    if m.get('certification'):
        out('Certificate: %s' % clean(m['certification']))
    out()
    out('PRICE FOR THIS COURSE (quote only the one that applies to the person asking)')
    out('  In India, per month:      group %s, mini batch %s, one to one %s'
        % (rupee(ind['group']), rupee(ind['miniBatch']), rupee(ind['personal'])))
    out('  Outside India, per month: group $%s, one to one $%s'
        % (intl['group'], intl['personal']))
    if pk == 'agents':
        out('  Note: this course also needs the student to have their own Claude and ChatGPT')
        out('  subscriptions, because the whole course is hands on with those tools. Say this')
        out('  before enrolling anyone, so it is never a surprise later.')
    out()

    if m.get('description'):
        out('WHAT THIS COURSE IS')
        out()
        para(clean(m['description']), '  ')
        out()

    po = d.get('program_overview', {})
    if po.get('tagline'):
        out('  In one line: %s' % clean(po['tagline']))
        out()
    if po.get('description'):
        out('ABOUT THE PROGRAMME')
        out()
        para(clean(po['description']), '  ')
        out()
    if po.get('what_makes_this_different'):
        out('WHAT MAKES THIS COURSE DIFFERENT')
        out()
        bullets([clean(x) for x in po['what_makes_this_different']])
        out()
    if isinstance(po.get('learning_path'), dict):
        out('THE LEARNING PATH, STEP BY STEP')
        out()
        for k, v in po['learning_path'].items():
            para('%s: %s' % (k.replace('_', ' ').title(), clean(v)), '  ')
        out()

    pre = d.get('prerequisites')
    if isinstance(pre, dict) and pre:
        out('WHAT A STUDENT NEEDS BEFORE STARTING')
        out()
        kvblock(pre)
        out()
    elif isinstance(pre, list) and pre:
        out('WHAT A STUDENT NEEDS BEFORE STARTING')
        out()
        bullets([clean(x) for x in pre])
        out()

    wif = d.get('who_is_this_for')
    if isinstance(wif, dict) and wif:
        out('WHO THIS COURSE IS FOR')
        out()
        kvblock(wif)
        out()
    elif isinstance(wif, list) and wif:
        out('WHO THIS COURSE IS FOR')
        out()
        bullets([clean(x) for x in wif])
        out()

    # ---- the curriculum, whatever shape it takes
    phases = [(k, v) for k, v in d.items()
              if isinstance(v, dict) and re.match(r'^(phase|month|term|stage|unit|semester|module)_', k)]
    if phases:
        out('FULL CURRICULUM, WEEK BY WEEK')
        out()
        para('This is the complete teaching plan. Parents can ask about any week.', '  ')
        out()
        for k, v in phases:
            title = clean(v.get('title')) or k.replace('_', ' ').title()
            out('  ---------------------------------------------------------------')
            out('  %s' % title.upper())
            out('  ---------------------------------------------------------------')
            if v.get('description'):
                para(clean(v['description']), '  ')
            out()
            for kk, vv in v.items():
                if kk in ('title', 'description'):
                    continue
                if isinstance(vv, dict):
                    render_group(kk, vv, '    ')
                    out()
                elif isinstance(vv, list):
                    out('    %s:' % kk.replace('_', ' ').capitalize())
                    bullets([clean(x) for x in vv], '      ')
                    out()

    alr = d.get('additional_learning_resources', {})
    if isinstance(alr, dict) and alr:
        if alr.get('projects_throughout_course'):
            out('PROJECTS THE STUDENT BUILDS AND KEEPS')
            out()
            bullets([clean(x) for x in alr['projects_throughout_course']])
            out()
        if alr.get('total_projects_built'):
            out('  Total projects: %s' % clean(alr['total_projects_built']))
            out()
        if alr.get('skills_mastered'):
            out('SKILLS THE STUDENT WILL HAVE AT THE END')
            out()
            bullets([clean(x) for x in alr['skills_mastered']])
            out()
        for key, head in (('weekly_structure', 'HOW A TYPICAL WEEK IS SPLIT'),
                          ('support_provided', 'SUPPORT INCLUDED'),
                          ('certification', 'CERTIFICATION DETAIL')):
            v = alr.get(key)
            if isinstance(v, dict) and v:
                out(head)
                out()
                kvblock(v)
                out()

    for key, head in (('career_paths_after_completion', 'WHERE THIS CAN LEAD'),
                      ('career_outcomes', 'WHERE THIS CAN LEAD')):
        v = d.get(key) or po.get(key)
        if isinstance(v, list) and v:
            out(head)
            out()
            bullets([clean(x) for x in v])
            out()
            break

    sal = d.get('salary_expectations')
    if isinstance(sal, dict) and sal:
        out('EARNING POTENTIAL (share only if asked, and never promise it)')
        out()
        kvblock(sal)
        out()

    faqs = usable_faqs(d.get('faqs'))
    if faqs:
        out('COMMON QUESTIONS ABOUT THIS COURSE')
        out()
        para('For anything about cost, use PART 4 and RULE 1. Do not quote two regions.', '  ')
        out()
        for question, answer in faqs:
            para('Q: %s' % question, '  ')
            para('A: %s' % answer, '  ')
            out()

    out('  To enrol or to book a free demo for this course, message Shivam Sir on')
    out('  +91 9123366161, or send the parent this link: %s' % url)
    out()

# ================================================================ PART 7
rule()
out('PART 7. HOW SOMEONE JOINS')
rule()
out()
out('THE STEPS, IN ORDER')
out()
out('  1. First chat. Find out the age, the subject, the current level and the goal.')
out('  2. Free demo class. One live class with a real teacher. No card. Parent may sit in.')
out('  3. Pick a plan. Group, mini batch or one to one.')
out('  4. Shivam Sir matches the student to a batch that fits their timetable.')
out('  5. Pay the first month through a secure link.')
out('  6. The student gets dashboard access, the class link and the recordings.')
out('  7. Classes begin.')
out('  8. Progress updates go to the parent every month.')
out()
out('WHAT TO COLLECT BEFORE HANDING A LEAD OVER')
out()
bullets([
    'Student full name.',
    'Age, and school class or grade.',
    'School and board if it is a school subject (CBSE, ICSE, IGCSE, IB, state board).',
    'Parent name.',
    'Parent WhatsApp number, with the country code.',
    'City and country, so we know the time zone.',
    'Subject wanted: coding, maths, or both.',
    'The goal: school marks, board exam, hobby, Olympiad, college prep, a job.',
    'Roughly when they are free: weekdays or weekends, morning or evening.',
    'Preferred language: English or Hindi.',
])
out()
out('WHAT THE FREE DEMO ACTUALLY IS')
out()
bullets([
    'A full live class with a real teacher, not a sales call and not a recording.',
    'Free. No card details are ever asked for.',
    'The parent is welcome to watch.',
    'It doubles as a placement check, so the teacher recommends the right starting point.',
    'One free demo per student.',
    'If the child does not enjoy it, the family walks away owing nothing.',
])
out()
para('If a parent wants to judge us before booking, offer this: they can watch recordings of '
     'real, unedited classes first.')
out()

# ================================================================ PART 8
rule()
out('PART 8. REFUND AND CANCELLATION. READ THIS OUT EXACTLY, DO NOT REWORD IT')
rule()
out()
out('REFUND POLICY')
out()
para('Modern Age Coders offers a 7 day money back guarantee on all online courses, provided '
     'you have not completed more than 20 percent of the course content.', '  ')
out()
out('  To be eligible:')
bullets(['The request must come within 7 days of the original purchase date.',
         'Refunds apply to the first purchase only, not to renewals or repeat subscriptions.'],
        '    ')
out()
out('  Not refundable:')
bullets(['Courses where more than 20 percent of the content has been viewed or downloaded.',
         'One to one mentorship sessions that have already been taught.',
         'Customised bootcamps or special arrangements.'], '    ')
out()
para('Once a refund is approved it goes back to the original payment method. The credit '
     'appears within 7 to 10 business days, depending on the card issuer.', '  ')
out()
para('To request one, email contact@modernagecoders.com with the order details and the '
     'reason.', '  ')
out()
out('CANCELLATION POLICY')
out()
bullets([
    'Enrolment can be cancelled at any time. A cancellation after a live batch has started, '
    'or after materials have been accessed, falls under the refund policy above.',
    'A recurring subscription can be cancelled any time from the account dashboard. It takes '
    'effect at the end of the current billing cycle and there is no further charge.',
    'We may cancel or reschedule a course if too few students enrol or something unforeseen '
    'happens. Those students get a full refund or a transfer to another schedule.',
    'After cancelling, access continues until the end of the billing period already paid for.',
    'To cancel: use account settings, or email contact@modernagecoders.com.',
])
out()
out('IF SOMEONE ASKS "WHAT IF WE ARE NOT HAPPY?"')
out()
para('Say: "There is a 7 day money back guarantee. If in the first week you have used less '
     'than 20 percent of the course and it is not right for you, we refund it in full. And '
     'before any of that, the demo class is free, so you see the teaching before you pay '
     'anything at all."', '  ')
out()

# ================================================================ PART 9
sm = set()
for f in glob.glob(os.path.join(ROOT, 'sitemap*.xml')):
    if 'index' in f:
        continue
    for u in re.findall(r'<loc>\s*(.*?)\s*</loc>',
                        open(f, encoding='utf-8', errors='replace').read()):
        u = u.strip().rstrip('/')
        if u.startswith(SITE) and not u.endswith('.xml'):
            sm.add(u[len(SITE):] or '/')

def group(pred):
    return sorted(u for u in sm if pred(u))

cities = group(lambda u: u.startswith('/best-coding-class-in-'))
localities = group(lambda u: u.startswith('/coding-classes-near-'))
countries = group(lambda u: u.startswith('/coding-classes-in-'))
schools = group(lambda u: u.startswith('/coding-classes-for-') or u.startswith('/coding-and-maths-for-'))
byage = group(lambda u: re.match(r'^/(coding|python)-for-\d+-year-olds$', u))
byclass = group(lambda u: re.match(r'^/(coding|python|maths)-for-class-\d+', u))
blogs = group(lambda u: u.startswith('/blog/') and '/topic/' not in u)

rule()
out('PART 9. OTHER PAGES YOU CAN SEND A PARENT')
rule()
out()
out('THE PAGES PARENTS ASK FOR MOST')
out()
for label, path in [
        ('All courses', '/courses'), ('Prices', '/pricing'),
        ('Book a free demo', '/book-demo'), ('Free trial class', '/free-trial'),
        ('Our zero risk promise', '/guarantee'), ('How we teach', '/how-we-teach'),
        ('About us', '/about'), ('Contact us', '/contact'),
        ('Reviews from families', '/love'), ('Student success stories', '/success-stories'),
        ('Real student projects', '/student-labs'), ('Course atlas, every course on one page', '/course-atlas'),
        ('What to learn and in what order', '/coding-roadmap'),
        ('Work out your monthly fee', '/coding-fee-calculator'),
        ('Free resources', '/free-resources'), ('Blog', '/blog'),
        ('Schools programme', '/schools'), ('For businesses', '/for-business'),
        ('Refund policy', '/refund'), ('Cancellation policy', '/cancellation'),
        ('Which AI tools are safe at which age', '/ai-tools-age-guide')]:
    out('  %-46s %s%s' % (label, SITE, path))
out()
out('FREE THINGS TO PLAY WITH. Good for a parent who is unsure.')
out()
out('  %-46s %s/beat-the-babu' % ('Beat the Babu, 90 second maths game', SITE))
out('  %-46s %s/aura' % ('Aura Type, typing game', SITE))
out('  %-46s %s/coding-challenges' % ('Daily coding challenges', SITE))
out('  %-46s %s/maths-challenges' % ('Maths challenges', SITE))
out('  %-46s %s/mistakes-students-make' % ('Mistakes students make', SITE))
out('  %-46s https://misti.modernagecoders.com' % 'Misti AI, our study assistant')
out('  %-46s https://mind.modernagecoders.com' % 'The Beautiful Mind, our blog')
out()
out('  Student dashboard        https://dashboard.modernagecoders.com')
out('  Mark attendance          https://dashboard.modernagecoders.com/attendance')
out('  Class recordings         https://dashboard.modernagecoders.com/recording')
out()
for title, urls in [
        ('CITY PAGES IN INDIA', cities),
        ('AREAS IN AND AROUND KOLKATA', localities),
        ('COUNTRY AND REGION PAGES', countries),
        ('SCHOOL PAGES', schools),
        ('PAGES BY THE CHILD\'S AGE', byage),
        ('PAGES BY SCHOOL CLASS', byclass)]:
    if not urls:
        continue
    out('%s (%d pages)' % (title, len(urls)))
    out()
    for u in urls:
        out('  %s%s' % (SITE, u))
    out()
out('BLOG ARTICLES (%d)' % len(blogs))
out()
for u in blogs:
    out('  %s%s' % (SITE, u))
out()

# ================================================================ PART 10
rule()
out('PART 10. GENERAL QUESTIONS AND THE ANSWERS TO GIVE')
rule()
out()
GEN = [
 ('What is Modern Age Coders?',
  'We teach live online coding and mathematics to learners aged %s. Kids, teens, college '
  'students, working professionals and corporate teams. We also build software for '
  'businesses, which is how our advanced students get real project experience.' % BF['ages']),
 ('Does my child need any experience?',
  'No. Our beginner courses start from the very beginning and most of our students start with '
  'zero experience.'),
 ('Are the classes live or recorded?',
  'Every class is live with a real teacher. Recordings are provided as well, so a missed class '
  'can be caught up.'),
 ('What does my child need at home?',
  'A computer, Windows, Mac or Chromebook, and steady internet. Most courses run in the '
  'browser so nothing needs installing. A webcam and microphone help, and for maths a notebook '
  'and pen.'),
 ('How many classes a week?',
  'Two live classes a week, one hour each, which is eight classes a month.'),
 ('How big are the batches?',
  'Group classes are capped at 10 students. A mini batch is just 3 to 4. One to one is a '
  'single student with their own mentor.'),
 ('How long does a course take?',
  'Beginner courses usually run 3 to 6 months. Advanced ones run 6 to 9 months. Custom '
  'programmes are flexible.'),
 ('What ages do you teach?',
  'From 6 to 67. Kids are 6 to 12, teens are 13 to 18, and then college students and adults.'),
 ('Is there a free class?',
  'Yes. One free demo class per student, with a real teacher, and we never ask for card '
  'details. Parents are welcome to sit in.'),
 ('What if we miss a class?',
  'Every class is recorded, so it can be watched later. For one to one classes we can often '
  'reschedule if you tell us in advance.'),
 ('Can we pause?',
  'Yes, for exams or holidays. Tell us about a week ahead and we hold the spot.'),
 ('Can we switch from group to one to one later?',
  'Yes, any time. Tell us a few days before the next billing date and we adjust it.'),
 ('Do you give a certificate?',
  'Yes, when the course is completed. It lists the skills learned and the projects built.'),
 ('Can parents see progress?',
  'Yes. Progress reports go to parents, teachers give feedback in review sessions, there are '
  'monthly tests, and the one to one plan includes a monthly parent and mentor call.'),
 ('What if my child finds a topic hard?',
  'We add extra doubt clearing sessions and one to one help. No student is left behind.'),
 ('Which boards do you cover?',
  'CBSE, ICSE, IGCSE, IB, A Level and GCSE, American Common Core and AP, Singapore MOE, and '
  'most major Indian state boards.'),
 ('Do you prepare for Olympiads and competitive exams?',
  'Yes. Coding competitions and hackathons, and maths Olympiads including AMC, MATHCOUNTS, '
  'AIME, USAMO, IMO and the Indian Olympiads. Also SAT, AP, A Level, GCSE, IGCSE, IB, JEE, '
  'PSLE, 11 plus and the CBSE and ICSE boards.'),
 ('Are there girls only batches?',
  'Yes. Princess Coders for beginners and intermediate, Queen Coders for advanced, and Alpha '
  'Girls for elite level. There is also a comeback programme for women returning to tech.'),
 ('Do you teach AI?',
  'Yes. AI Literacy for Kids from age 8, AI and machine learning for teens and college, and '
  'our AI coding agent courses for 13 and above. We also publish a guide to the real minimum '
  'age of 124 AI tools, because many of them set their own age limits.'),
 ('Can college students and working adults join?',
  'Yes. We have full tracks for college students and for working professionals, including '
  'career changes and interview preparation.'),
 ('Do you do corporate training?',
  'Yes, for company teams. The curriculum is built around what the team actually needs. It is '
  'quoted per company, so take the requirement and pass it to Shivam Sir.'),
 ('Where is your office? Can we visit?',
  'We are an online school, so every class happens live over video and there is no campus to '
  'visit. Our registered office is 1B, JK Ambika Tower, Kolkata, West Bengal 700002.'),
 ('Are your teachers qualified?',
  'Yes. They are professional engineers and educators, and many of them work on real software '
  'projects with our business clients, so they teach what they actually use.'),
 ('Is my child too young at 5?',
  'Our programmes start at 6. For a 5 year old, ask Shivam Sir on +91 9123366161. Depending on '
  'the child he may suggest a starter session or suggest waiting a few months.'),
 ('I am 50 or 60. Am I too old?',
  'Not at all. We teach up to 67 and we have working professionals and retired learners. One '
  'to one usually suits adult learners best because we pace it around your schedule.'),
 ('Do you help with internships or real projects?',
  'Yes. Advanced students get the chance to work on real client projects.'),
 ('Can I gift a course?',
  'Yes. We can invoice in the gifter\'s name and the student attends under their own login. '
  'Ask Shivam Sir to set it up.'),
 ('Do you have a mobile app?',
  'Classes are joined from a computer through the browser, so there is nothing to install. '
  'The student dashboard is at dashboard.modernagecoders.com.'),
 ('Can we join in the middle of the month?',
  'Yes. We either place the student in a batch already running or start a new one.'),
]
for q, a in GEN:
    out('Q: %s' % q)
    para('A: %s' % a, '   ')
    out()

# ================================================================ PART 11
rule()
out('PART 11. READY MADE REPLIES')
rule()
out()
out('FIRST MESSAGE')
out()
para('"Hello, welcome to Modern Age Coders. I can help you with our live coding and maths '
     'classes. Could you tell me the learner\'s age, and whether you are looking for coding, '
     'maths or both? I will point you to the right starting place."', '  ')
out()
out('WHEN THEY ASK THE PRICE. Give only their own region, never both.')
out()
out('  If they are in India:')
para('"Our classes are %s a month for a group class, %s for a mini batch of just 3 to 4 '
     'students, and %s a month for fully one to one. That includes two live one hour classes '
     'every week, recordings, doubt support and a certificate. The first class is free, would '
     'you like me to book it?"'
     % (rupee(PLANS['coding']['india']['group']),
        rupee(PLANS['coding']['india']['miniBatch']),
        rupee(PLANS['coding']['india']['personal'])), '    ')
out()
out('  If they are outside India:')
para('"Our classes are $%s a month for a group class and $%s a month for fully one to one. '
     'That includes two live one hour classes every week, recordings, doubt support and a '
     'certificate. The first class is free, would you like me to book it?"'
     % (PLANS['coding']['international']['group'],
        PLANS['coding']['international']['personal']), '    ')
out()
out('  For maths in India the one to one rate is %s a month. Everything else is the same.'
    % rupee(PLANS['maths']['india']['personal']))
out()
out('WHEN THEY ASK ABOUT TIMINGS')
out()
para('"We run batches on weekday evenings and on weekend mornings and afternoons, and we have '
     'slots for other time zones too. To match you to the one that fits your child\'s school '
     'routine, please message Shivam Sir on +91 9123366161. He arranges every batch himself."',
     '  ')
out()
out('WHEN THEY ASK "IS IT WORTH IT?"')
out()
para('"The honest answer is to try the free class. No card, no commitment, one real lesson '
     'with an actual teacher. You will know within the hour whether it suits your child, and '
     'the teacher will tell you honestly where they should start. Shall I book it? I just need '
     'the student\'s name, age and your WhatsApp number."', '  ')
out()
out('WHEN THEY ASK FOR A DISCOUNT')
out()
para('"Let me check the current offers with Shivam Sir. There are discounts for paying '
     'quarterly or yearly, and sometimes for siblings. Please message him on +91 9123366161 '
     'and he will tell you what is available right now."', '  ')
out()
out('WHEN THE COST WORRIES THEM')
out()
para('"I understand. Two things may help. The demo class is completely free and needs no card, '
     'so you can see the teaching before spending anything. And there is no lock in, no '
     'registration fee and no long package. You can stop any month. Would you like to try the '
     'free class first?"', '  ')
out()
out('CLOSING THE CONVERSATION')
out()
para('"Shall I book your free class? I just need three things: the student\'s name and age, '
     'whether you want coding or maths, and your WhatsApp number with country code. Once I '
     'have those, Shivam Sir will confirm the time."', '  ')
out()
out('WHEN YOU DO NOT KNOW THE ANSWER')
out()
para('"That is a good question and I want to give you the right answer rather than guess. '
     'Please message Shivam Sir on +91 9123366161 and he will help you personally within a few '
     'hours."', '  ')
out()
rule()
out('END OF KNOWLEDGE BASE. WHEN IN DOUBT, SEND THEM TO SHIVAM SIR ON +91 9123366161.')
rule()

open(OUT, 'w', encoding='utf-8', newline='\n').write('\n'.join(L) + '\n')
print('courses written :', len(courses))
print('lines           :', len(L))
print('file            :', OUT)
print('size            : %.2f MB' % (os.path.getsize(OUT) / 1048576))
