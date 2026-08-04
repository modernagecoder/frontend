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

open(OUT, 'w', encoding='utf-8', newline='\n').write('\n'.join(L) + '\n')
print('courses written :', len(courses))
print('lines           :', len(L))
print('file            :', OUT)
print('size            : %.2f MB' % (os.path.getsize(OUT) / 1048576))
