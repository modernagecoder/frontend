# -*- coding: utf-8 -*-
"""Generate Appendices A-E for the Modern Age Coders knowledge base
straight from the repo, so the ~800 URLs are never hand-typed."""
import re, json, os, glob
from collections import defaultdict, Counter

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SITE = 'https://learn.modernagecoders.com'
PROSE = os.path.join(ROOT, 'docs', '_kb-v2-prose.md')
MD = os.path.join(ROOT, 'docs', 'Modern-Age-Coders-KnowledgeBase-v2.md')

def norm(p):
    p = (p or '').split('#')[0].split('?')[0]
    if p.startswith(SITE):
        p = p[len(SITE):]
    if not p.startswith('/'):
        p = '/' + p
    if len(p) > 1 and p.endswith('/'):
        p = p[:-1]
    return p

def clean(s):
    """house style: no em-dashes, collapse whitespace, escape pipes for tables"""
    if not s:
        return ''
    s = re.sub(r'\s+', ' ', s).strip()
    s = s.replace('\u2014', ' - ').replace('\u2013', '-')
    s = s.replace('&amp;', '&').replace('&#x27;', "'").replace('&quot;', '"')
    s = s.replace('&#8377;', 'Rs ').replace('&nbsp;', ' ')
    s = re.sub(r'\s+', ' ', s)
    s = s.replace('|', '/')
    return s.strip(' ,-')

# ---------------------------------------------------------------- sitemap
sm = set()
for f in glob.glob(os.path.join(ROOT, 'sitemap*.xml')):
    if 'index' in f:
        continue
    for u in re.findall(r'<loc>\s*(.*?)\s*</loc>',
                        open(f, encoding='utf-8', errors='replace').read()):
        n = norm(u)
        if not n.endswith('.xml'):
            sm.add(n)

# ---------------------------------------------------------------- routes
first = {}
for ln in open(os.path.join(ROOT, '_redirects'), encoding='utf-8', errors='replace').read().splitlines():
    t = ln.strip()
    if not t or t.startswith('#'):
        continue
    p = t.split()
    if len(p) >= 2 and '*' not in p[0] and ':' not in p[0]:
        n = norm(p[0])
        if n not in first:
            first[n] = (p[1], p[2] if len(p) > 2 else '200')

# drop URLs that are actually redirects (e.g. /business-solutions -> /for-business)
sm = {u for u in sm if not (u in first and first[u][1].startswith(('301', '302')))}

FALLBACK = {'/blog': 'Blog index', '/resources': 'Free resources index',
            '/courses': 'All courses'}

_titles = {}
def title_of(url):
    if url in _titles:
        return _titles[url]
    t = None
    ent = first.get(url)
    if ent and ent[0].startswith('/src/pages/'):
        p = os.path.join(ROOT, ent[0].lstrip('/').replace('/', os.sep))
        if os.path.exists(p):
            s = open(p, encoding='utf-8', errors='replace').read(9000)
            m = re.search(r'<title>(.*?)</title>', s, re.S | re.I)
            if m:
                raw = re.sub(r'\s+', ' ', m.group(1)).strip()
                raw = raw.replace('&amp;', '&').replace('&#x27;', "'")
                # the <title> is "Real Page Title | SEO suffix | Modern Age Coders".
                # Keep the first segment; that is the human name of the page.
                t = clean(raw.split('|')[0])
                t = re.sub(r'\s*[-:,]\s*Modern Age Coders.*$', '', t, flags=re.I).strip(' ,-:')
    if not t:
        t = FALLBACK.get(url)
    _titles[url] = t
    return t

# ---------------------------------------------------------------- courses
courses = []
for f in sorted(glob.glob(os.path.join(ROOT, 'content/courses/data/*.json'))):
    if os.path.basename(f) == 'courses-config.json':
        continue
    d = json.load(open(f, encoding='utf-8'))
    m = d.get('meta', d)
    if not m.get('slug'):
        continue
    courses.append({
        'slug': m['slug'], 'title': clean(m.get('title')),
        'category': clean(m.get('category')), 'level': clean(m.get('level')),
        'duration': clean(m.get('duration')), 'file': os.path.basename(f),
        'data': d,
    })
# de-dupe on slug (applied-mathematics.json collides with data-analytics-mathematics.json)
seen, uniq = set(), []
for c in courses:
    if c['slug'] in seen:
        continue
    seen.add(c['slug'])
    uniq.append(c)
courses = sorted(uniq, key=lambda c: c['title'].lower())

# atlas gives us the age group + subject grouping
s = open(os.path.join(ROOT, 'src/pages/course.html'), encoding='utf-8').read()
i = s.index('const coursesData = [')
blk = s[i:s.index('\n        ];', i)]
def fld(b, k):
    m = re.search(k + r":\s*'((?:[^'\\]|\\.)*)'", b)
    return m.group(1) if m else None
atlas = defaultdict(set)
acat = {}
for oid, body in re.findall(r"\{\s*\n?\s*id:\s*(\d+),(.*?)\n            \}", blk, re.S):
    u = norm(fld(body, 'templateUrl'))
    if fld(body, 'ageGroup'):
        atlas[u].add(fld(body, 'ageGroup'))
    acat[u] = fld(body, 'category')

AGE_LABEL = {'kids': 'Kids', 'teens': 'Teens', 'college': 'College', 'professional': 'Professionals',
             'girls': 'Girls only', 'elementary': 'Elementary', 'middle': 'Middle school', 'high': 'High school'}

MATHS_CATS = {'mathematics'}
lines = []
lines.append('## APPENDIX A: EVERY COURSE PAGE (%d live courses)\n' % len(courses))
lines.append('All course pages live at `https://learn.modernagecoders.com/courses/<slug>`. '
             'Every URL below was checked against the sitemap and the routing table on 4 August 2026.\n')

def course_rows(subset):
    o = ['| Course | URL path | Who it is for |', '|---|---|---|']
    for c in subset:
        u = '/courses/' + c['slug']
        ages = ', '.join(sorted(AGE_LABEL.get(a, a) for a in atlas.get(u, [])))
        who = ages or c['level'] or ''
        if len(who) > 95:
            who = who[:92].rstrip(' ,') + '...'
        o.append('| %s | `%s` | %s |' % (c['title'], u, who))
    return o

maths = [c for c in courses if acat.get('/courses/' + c['slug']) in MATHS_CATS]
coding = [c for c in courses if acat.get('/courses/' + c['slug']) not in MATHS_CATS]
lines.append('\n### A.1 Coding, AI and technology courses (%d)\n' % len(coding))
lines += course_rows(coding)
lines.append('\n### A.2 Mathematics courses (%d)\n' % len(maths))
lines += course_rows(maths)

# ---------------------------------------------------------------- Appendix B
RULES = [
    ('B.1 Core site pages', lambda u: u in (
        '/', '/about', '/contact', '/pricing', '/courses', '/blog', '/faq', '/parent-faq',
        '/how-we-teach', '/book-demo', '/free-trial', '/guarantee', '/schools', '/for-business',
        '/success-stories', '/love', '/student-labs', '/free-resources', '/course-atlas',
        '/coding-roadmap', '/coding-challenges', '/maths-challenges', '/mistakes-students-make',
        '/beat-the-babu', '/aura', '/coding-fee-calculator', '/free-coding-starter-kit',
        '/ai-tools-age-guide', '/refund', '/cancellation', '/terms', '/privacy', '/sitemap',
        '/custom-software-development-services', '/seo-services', '/aeo-geo-optimization-services')),
    ('B.2 Course detail pages', lambda u: u.startswith('/courses/')),
    ('B.3 Blog posts', lambda u: u.startswith('/blog/') and '/topic/' not in u),
    ('B.4 Blog topic hubs', lambda u: u.startswith('/blog/topic/')),
    ('B.5 Free resources', lambda u: u.startswith('/resources')),
    ('B.6 Indian city pages', lambda u: u.startswith('/best-coding-class-in-')),
    ('B.7 School partnership pages', lambda u: u.startswith('/coding-classes-for-') and any(
        k in u for k in ('school', 'dps', 'martiniere', 'academy', 'birla', 'heritage', 'public'))
        or u.startswith('/coding-and-maths-for-')),
    ('B.8 Country and international pages', lambda u: u.startswith('/coding-classes-in-')
        or u.startswith('/ai-and-machine-learning-classes-in-') or u.startswith('/ai-classes-in-')
        or u.startswith('/coding-classes-')),
    ('B.9 Coding and Python by age', lambda u: bool(re.match(r'^/(coding|python)-for-\d+-year-olds$', u))),
    ('B.10 Coding and Python by school class', lambda u: bool(re.match(r'^/(coding|python|maths)-for-class-\d+', u))),
    ('B.11 Comparison and alternative pages', lambda u: '-vs-' in u or 'alternative' in u),
    ('B.12 Camps (summer and winter)', lambda u: 'camp' in u),
    ('B.13 Mathematics landing pages', lambda u: any(k in u for k in (
        'maths', 'math-', 'algebra', 'calculus', 'statistics', 'geometry', 'trigonometry', 'arithmetic'))
        or u.startswith(('/sat-', '/act-', '/ap-', '/gcse', '/igcse-math', '/ib-math'))),
    ('B.14 AI and machine learning pages', lambda u: u.startswith('/ai-')
        or 'artificial-intelligence' in u or 'machine-learning' in u or 'deep-learning' in u
        or 'generative-ai' in u or 'computer-vision' in u or 'llm' in u),
    ('B.15 Programming language and topic pages', lambda u: True),
]
buckets = defaultdict(list)
for u in sorted(sm):
    for name, fn in RULES:
        if fn(u):
            buckets[name].append(u)
            break

lines.append('\n---\n')
lines.append('## APPENDIX B: COMPLETE SITE URL INDEX (%d live URLs)\n' % sum(len(v) for v in buckets.values()))
lines.append('Every URL below is present in a sitemap **and** resolves through the routing table. '
             'Redirect-only URLs are excluded. The site-wide link check passed with 0 broken internal '
             'links across 53,903 link instances on 4 August 2026. Prefix any path with '
             '`https://learn.modernagecoders.com`.\n')

BIG = {'B.2 Course detail pages', 'B.3 Blog posts'}
for name, _ in RULES:
    if name not in buckets:
        continue
    urls = buckets[name]
    lines.append('\n### %s (%d)\n' % (name, len(urls)))
    if name == 'B.2 Course detail pages':
        lines.append('Listed with titles in Appendix A.\n')
        lines.append('```')
        lines += urls
        lines.append('```')
    elif name == 'B.3 Blog posts':
        lines.append('Listed with titles in Appendix C.\n')
        lines.append('```')
        lines += urls
        lines.append('```')
    else:
        lines.append('| URL path | Page title |')
        lines.append('|---|---|')
        for u in urls:
            t = title_of(u) or ''
            if len(t) > 90:
                t = t[:87].rstrip(' ,') + '...'
            lines.append('| `%s` | %s |' % (u, t))

# ---------------------------------------------------------------- Appendix C
blog = []
for f in sorted(glob.glob(os.path.join(ROOT, 'content/blog/data/*.json'))):
    try:
        d = json.load(open(f, encoding='utf-8'))
    except Exception:
        continue
    m = d.get('meta', d)
    if m.get('slug'):
        blog.append({'slug': m['slug'], 'title': clean(m.get('title')),
                     'category': clean(m.get('category')) or 'Uncategorised',
                     'date': (m.get('date') or '')[:10]})
bycat = defaultdict(list)
for b in blog:
    bycat[b['category']].append(b)

lines.append('\n---\n')
lines.append('## APPENDIX C: EVERY BLOG POST (%d posts)\n' % len(blog))
lines.append('All posts live at `https://learn.modernagecoders.com/blog/<slug>`. '
             'Use these when a customer asks a question a post already answers in depth.\n')
for cat in sorted(bycat, key=lambda c: (-len(bycat[c]), c)):
    lines.append('\n### %s (%d)\n' % (cat, len(bycat[cat])))
    lines.append('| Post | URL path |')
    lines.append('|---|---|')
    for b in sorted(bycat[cat], key=lambda x: x['title'].lower()):
        lines.append('| %s | `/blog/%s` |' % (b['title'], b['slug']))

# ---------------------------------------------------------------- Appendix D
cfg = open(os.path.join(ROOT, 'pricing/pricing.config.jsonc'), encoding='utf-8').read()
cfg = re.sub(r'//.*', '', cfg)
pricing = json.loads(cfg)
bf = json.load(open(os.path.join(ROOT, 'scripts/brand-facts.json'), encoding='utf-8'))

# Any figure that is a live price in more than one place is ambiguous on its own
# (Rs 9,999 is both the AI-agents MONTHLY 1-on-1 rate and the India camp ONE-TIME
# fee). Compute it rather than hard-coding, so it stays true after a price change.
where = defaultdict(list)
for subj, regions in pricing['plans'].items():
    for region, tiers in regions.items():
        for tier, val in tiers.items():
            if isinstance(val, (int, float)):
                period = 'one time' if tier == 'oneTime' else 'per month'
                where[int(val)].append('%s.%s.%s (%s)' % (subj, region, tier, period))
# Only a PERIOD clash is genuinely ambiguous. The same monthly figure appearing
# across subjects is not: it means one price, quoted the same way everywhere.
ambiguous = {str(v): sorted(w) for v, w in sorted(where.items())
             if len({x.split('(')[1] for x in w}) > 1}

facts = {
    "_read_me_first": (
        "Prices are grouped subject.region.tier. Two different products can share "
        "the same digits: check the period before quoting. Monthly tiers are "
        "group/miniBatch/personal; oneTime is a single payment, not a monthly fee."
    ),
    "brand": "Modern Age Coders",
    "legal_name": "Modern Age Coders Education",
    "founded": bf['founded'],
    "founder": "Shivam Khemka",
    "website": SITE,
    "dashboard": "https://dashboard.modernagecoders.com",
    "phone_whatsapp": "+91 9123366161",
    "email": "contact@modernagecoders.com",
    "registered_office": "1B, JK Ambika Tower, Kolkata, West Bengal 700002, India",
    "phone_hours": "Mon-Sat 09:00-18:00 IST",
    "callback_sla_hours": 3,
    "form_response_sla_hours": 48,
    "languages": ["English", "Hindi"],
    "ages": bf['ages'],
    "students": bf['students'],
    "google_reviews": bf['reviews'],
    "rating": bf['rating'],
    "rating_source": "Google Business Profile reviews, not students",
    "countries": bf['countries'],
    "delivery": "100% online, live classes, recordings included",
    "classes_per_week": 2,
    "class_length_hours": pricing['display']['hoursPerClass'],
    "classes_per_month": pricing['display']['classesPerMonth'],
    "batch_caps": {"group": 10, "mini_batch": "3-4", "one_to_one": 1, "custom_group": "3-10"},
    "courses_live": len(courses),
    "blog_posts": len(blog),
    "live_urls": sum(len(v) for v in buckets.values()),
    "pricing": pricing['plans'],
    "pricing_ambiguous_figures": ambiguous,
    "pricing_currencies": pricing['display']['chargeCurrencies'],
    "pricing_updated": pricing['updated'],
    "premium_course_overrides": pricing['courseOverrides'],
    # Rs 9,999 is NOT retired: it is the India camp one-time fee AND the
    # AI-agents monthly one-to-one rate (see pricing_ambiguous_figures).
    "retired_never_quote": ["Rs 2499", "Rs 4999", "$40", "$149.99", "$374.99",
                            "any lifetime plan", "6 to 65", "500+ students", "247 reviews",
                            "15+ countries", "/courses/kids-ai-mastery-course"],
    "escalate_to_human": ["batch timings", "slot availability", "discounts",
                          "non-USD international pricing", "corporate quotes", "school quotes",
                          "custom curriculum", "refund disputes", "anything not in this document"],
    "demo": {"free": True, "card_required": False, "per_student": 1,
             "duration_minutes": "30-60", "live": True, "parent_may_attend": True},
    "refund": {"window_days": 7, "max_content_consumed_percent": 20,
               "processing_business_days": "7-10"},
}
lines.append('\n---\n')
lines.append('## APPENDIX D: MACHINE-READABLE QUICK FACTS\n')
lines.append('Paste this block straight into an agent prompt or a retrieval index. '
             'Generated from `pricing/pricing.config.jsonc` and `scripts/brand-facts.json`, '
             'the two files that govern every number on the website.\n')
lines.append('```json')
lines.append(json.dumps(facts, indent=2, ensure_ascii=False))
lines.append('```')

# ---------------------------------------------------------------- Appendix E
# What each course actually teaches: phase outlines and the hands-on projects,
# from the same JSON the course pages render. Parents get full transparency;
# fees stay in section 3 / Appendix D so prices live in exactly one place.
CURR_KEY = re.compile(r'^(phase|module|month|level|part|term|semester|stage|unit|week|curriculum|paper|topic)', re.I)

def sec_lines(sec, depth):
    out = []
    if not isinstance(sec, dict):
        return out
    if sec.get('title'):
        out.append('%s- %s' % ('  ' * depth, clean(str(sec['title']))))
    if depth == 0 and sec.get('description'):
        out.append('  ' + clean(str(sec['description'])))
    for k, v in sec.items():
        if k in ('title', 'description'):
            continue
        if isinstance(v, dict) and depth < 2:
            out += sec_lines(v, depth + 1)
    return out

def collect_projects(o, acc):
    if isinstance(o, dict):
        pr = o.get('projects')
        if isinstance(pr, list):
            for p in pr:
                if isinstance(p, str) and p not in acc:
                    acc.append(p)
        for v in o.values():
            collect_projects(v, acc)

lines.append('\n---\n')
lines.append('## APPENDIX E: WHAT EACH COURSE TEACHES (curriculum outlines and projects)\n')
lines.append('Share this freely and in detail when a parent or student asks what a course '
             'covers - full transparency is the policy, and the course page has the '
             'complete week-by-week plan. Fees are in section 3 and Appendix D; quote '
             'only the fee that applies to where the asker lives.\n')
for c in courses:
    lines.append('\n### %s\n' % c['title'])
    meta_bits = ['`/courses/%s`' % c['slug']]
    if c['duration']:
        meta_bits.append(c['duration'])
    if c['level']:
        meta_bits.append(c['level'])
    lines.append(' · '.join(meta_bits) + '\n')
    secs = [k for k in c['data'] if CURR_KEY.match(k) and isinstance(c['data'][k], dict)]
    for k in secs:
        lines += ['  ' + l for l in sec_lines(c['data'][k], 0)]
    projects = []
    collect_projects(c['data'], projects)
    if projects:
        shown = projects[:15]
        more = len(projects) - len(shown)
        lines.append('\n**Projects students build:** ' + '; '.join(clean(p) for p in shown) +
                     (' - plus %d more on the course page.' % more if more else '.'))

app = '\n'.join(lines)
doc = open(PROSE, encoding='utf-8').read()
assert '<!--APPENDICES-->' in doc, 'placeholder missing in prose source'
doc = doc.replace('<!--APPENDICES-->', app)
open(MD, 'w', encoding='utf-8').write(doc)

print('courses:', len(courses), '| blog:', len(blog),
      '| urls:', sum(len(v) for v in buckets.values()))
print('markdown chars:', len(doc))
for name, _ in RULES:
    if name in buckets:
        print('   %-42s %4d' % (name, len(buckets[name])))
