# -*- coding: utf-8 -*-
"""Render the knowledge base markdown to a print-quality PDF via Chromium."""
import os, re, markdown
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MD = os.path.join(ROOT, 'docs', 'Modern-Age-Coders-KnowledgeBase-v2.md')
HTML = os.path.join(ROOT, 'docs', '_kb-v2.html')
PDF = os.path.join(ROOT, 'Modern-Age-Coders-KnowledgeBase-v2-Aug2026.pdf')

src = open(MD, encoding='utf-8').read()
body = markdown.markdown(src, extensions=['tables', 'fenced_code', 'sane_lists', 'attr_list'])

# Brand: Ledger & Proof. Paper #FBF8F2, ink #1C1814, amber #B45309, muted #6B6259.
CSS = """
@page { size: A4; margin: 16mm 14mm 18mm 14mm; }
* { box-sizing: border-box; }
body {
  font-family: "Georgia", "Iowan Old Style", serif;
  font-size: 9.6pt; line-height: 1.5; color: #1C1814; background: #FBF8F2;
  margin: 0; -webkit-font-smoothing: antialiased;
}
h1, h2, h3, h4 { font-family: "Georgia", serif; font-weight: 700; line-height: 1.2; color: #1C1814; }
h1 { font-size: 23pt; margin: 0 0 4mm; letter-spacing: -0.4px; }
h2 {
  font-size: 14pt; margin: 9mm 0 3mm; padding-bottom: 1.6mm;
  border-bottom: 1.6pt solid #B45309; page-break-after: avoid; break-after: avoid;
}
h3 { font-size: 11pt; margin: 6mm 0 2mm; color: #8a3f07; page-break-after: avoid; break-after: avoid; }
h4 { font-size: 9.8pt; margin: 4mm 0 1.5mm; page-break-after: avoid; }
p { margin: 0 0 2.6mm; orphans: 3; widows: 3; }
strong { color: #1C1814; font-weight: 700; }
a { color: #B45309; text-decoration: none; word-break: break-word; }

ul, ol { margin: 0 0 3mm; padding-left: 5.5mm; }
li { margin-bottom: 1.1mm; }

hr { border: 0; border-top: 0.6pt solid #d9d0c2; margin: 6mm 0; }

blockquote {
  margin: 3mm 0; padding: 2.6mm 4mm; background: #F4EEE3;
  border-left: 2.4pt solid #B45309; page-break-inside: avoid;
}
blockquote p { margin: 0 0 1.6mm; }
blockquote p:last-child { margin-bottom: 0; }

code {
  font-family: "Consolas", "JetBrains Mono", monospace; font-size: 8.4pt;
  background: #F1EADC; padding: 0.4mm 1mm; border-radius: 1.4px; color: #6d3206;
  word-break: break-word;
}
pre {
  background: #221E19; color: #F1EADC; padding: 3.2mm 4mm; border-radius: 2px;
  font-size: 7.7pt; line-height: 1.45; overflow-wrap: break-word; white-space: pre-wrap;
  page-break-inside: auto; margin: 0 0 3mm;
}
pre code { background: none; color: inherit; padding: 0; font-size: inherit; }

table {
  width: 100%; border-collapse: collapse; margin: 2.5mm 0 4mm;
  font-size: 8.5pt; page-break-inside: auto;
}
th {
  background: #1C1814; color: #FBF8F2; text-align: left; font-weight: 700;
  padding: 1.8mm 2mm; font-size: 8.2pt; border: 0.4pt solid #1C1814;
}
td { padding: 1.5mm 2mm; border: 0.4pt solid #ddd4c6; vertical-align: top; }
tbody tr:nth-child(even) { background: #F5F0E6; }
tr { page-break-inside: avoid; }
thead { display: table-header-group; }
table code { font-size: 7.8pt; background: none; padding: 0; color: #6d3206; }

/* cover */
.cover { text-align: left; padding: 6mm 0 4mm; border-bottom: 2.4pt solid #1C1814; margin-bottom: 6mm; }
.cover .kicker {
  font-family: Consolas, monospace; font-size: 8pt; letter-spacing: 2.2px;
  text-transform: uppercase; color: #B45309; margin-bottom: 3mm;
}
.cover .sub { font-size: 10.5pt; color: #6B6259; margin-top: 2mm; }
"""

html = """<!doctype html><html><head><meta charset="utf-8">
<title>Modern Age Coders Knowledge Base v2.0</title><style>%s</style></head>
<body>%s</body></html>""" % (CSS, body)

# turn the leading H1 + version line into the cover block
html = html.replace(
    '<h1>Modern Age Coders: AI Agent, WhatsApp Agent and Support Knowledge Base</h1>',
    '<div class="cover"><div class="kicker">Modern Age Coders</div>'
    '<h1>AI Agent, WhatsApp Agent and Support Knowledge Base</h1>'
    '<div class="sub">Version 2.0 &middot; 4 August 2026</div></div>', 1)

open(HTML, 'w', encoding='utf-8').write(html)
print('html written:', len(html), 'chars')

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.goto('file:///' + HTML.replace('\\', '/'), wait_until='load')
    pg.pdf(path=PDF, format='A4', print_background=True,
           margin={'top': '16mm', 'bottom': '18mm', 'left': '14mm', 'right': '14mm'},
           display_header_footer=True,
           header_template='<div></div>',
           footer_template=(
               '<div style="width:100%;font-family:Georgia,serif;font-size:7pt;color:#6B6259;'
               'padding:0 14mm;display:flex;justify-content:space-between;">'
               '<span>Modern Age Coders Knowledge Base v2.0 &middot; August 2026</span>'
               '<span class="pageNumber"></span></div>'))
    b.close()

print('PDF written:', PDF, os.path.getsize(PDF), 'bytes')
