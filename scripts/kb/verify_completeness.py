# -*- coding: utf-8 -*-
"""Did Chromium drop any appendix content?

Checks that every single course slug, blog slug and city page present in the
repo actually survives into the rendered PDF. Whitespace is stripped before
matching because print layout hard-wraps long URLs mid-token.
"""
import re, os, glob, json, sys, fitz

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PDF = os.path.join(ROOT, 'Modern-Age-Coders-KnowledgeBase-v2-Aug2026.pdf')

full = '\n'.join(p.get_text() for p in fitz.open(PDF))
flat = re.sub(r'\s+', '', full)          # kills line-wrap breaks inside URLs

def check(label, items, fmt):
    missing = [i for i in items if fmt(i).replace(' ', '') not in flat]
    print('%-28s %4d expected, %4d missing' % (label, len(items), len(missing)))
    for m in missing[:12]:
        print('    MISSING:', m)
    return missing

# courses
slugs = set()
for f in glob.glob(os.path.join(ROOT, 'content/courses/data/*.json')):
    if os.path.basename(f) == 'courses-config.json':
        continue
    m = json.load(open(f, encoding='utf-8')).get('meta', {})
    if m.get('slug'):
        slugs.add(m['slug'])

# blog
bslugs = set()
for f in glob.glob(os.path.join(ROOT, 'content/blog/data/*.json')):
    try:
        m = json.load(open(f, encoding='utf-8')).get('meta', {})
    except Exception:
        continue
    if m.get('slug'):
        bslugs.add(m['slug'])

# city pages from the sitemap
cities = set()
for f in glob.glob(os.path.join(ROOT, 'sitemap*.xml')):
    for u in re.findall(r'<loc>\s*(.*?)\s*</loc>',
                        open(f, encoding='utf-8', errors='replace').read()):
        p = u.split('learn.modernagecoders.com')[-1].rstrip('/')
        if p.startswith('/best-coding-class-in-'):
            cities.add(p)

bad = 0
bad += len(check('course slugs', sorted(slugs), lambda s: '/courses/' + s))
bad += len(check('blog slugs', sorted(bslugs), lambda s: '/blog/' + s))
bad += len(check('city pages', sorted(cities), lambda s: s))

print()
print('RESULT:', 'ALL CONTENT SURVIVED' if bad == 0 else 'CONTENT DROPPED')
sys.exit(0 if bad == 0 else 1)
