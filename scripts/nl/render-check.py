import html, os, re, sys
# Static check of a built cluster page, read from src/pages (no dev server or browser needed).
#   python scripts/nl/render-check.py <slug> [<figure> ...]
# Prints each figure's count in the visible text, house-rule violations in the raw HTML, every
# visible "best" with context (only the capsule question may use it), and RESULT PASS or FAIL.
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
slug = sys.argv[1]
figs = sys.argv[2:]
raw = open(os.path.join(ROOT, 'src', 'pages', slug + '.html'), encoding='utf-8').read()
body = re.sub(r'(?is)<(script|style|noscript|svg)[^>]*>.*?</\1>', ' ', raw)
head_title = re.search(r'(?is)<title>(.*?)</title>', raw).group(1)
main = re.sub(r'(?is)<head>.*?</head>', ' ', body)
txt = re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', main)))
noscript = re.sub(r'(?is)<script[^>]*>.*?</script>', ' ', raw)
bad = 0
for f in figs:
    n = txt.count(f)
    print(('ok   ' if n else 'MISS ') + f + '  x' + str(n))
    bad += 0 if n else 1
for k, v in {'em dash': '—', 'en dash': '–', 'euro sign': '€'}.items():
    n = raw.count(v)
    print(('ok   ' if n == 0 else 'BAD  ') + k + ' in raw html: ' + str(n))
    bad += 1 if n else 0
rules = {'bare IST': (r'\bIST\b', raw, 0), 'bare BST': (r'\bBST\b', noscript, 0), 'pound sign or GBP': (r'£|&pound;|&#163;|\bGBP\b', noscript, 0),
         'Premium': (r'\bpremium\b', raw, re.I), 'AggregateRating': (r'AggregateRating', raw, 0)}
gb = "countryIso:'GB'" in raw or "countryIso: 'GB'" in raw
for k, (pat, src, fl) in rules.items():
    if k in ('bare BST', 'pound sign or GBP') and not gb:
        continue
    n = len(re.findall(pat, src, fl))
    print(('ok   ' if n == 0 else 'BAD  ') + k + ': ' + str(n))
    bad += 1 if n else 0
best = [m.start() for m in re.finditer(r'\bbest\b', txt, re.I)]
print('"best" in visible text: ' + str(len(best)))
for i in best:
    print('     ...' + txt[max(0, i - 50):i + 40] + '...')
print('title: ' + head_title)
print('RESULT ' + ('PASS' if bad == 0 else 'FAIL (' + str(bad) + ')'))
