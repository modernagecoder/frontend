# -*- coding: utf-8 -*-
"""Render the plain-text agent knowledge base to a plain PDF.

No colours, no tables, no styling. Monospace, black on white, so the text layer
a PDF parser extracts is byte-for-byte the same content as the .txt file.
"""
import os, html
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TXT = os.path.join(ROOT, 'Modern-Age-Coders-Agent-KnowledgeBase.txt')
HTML = os.path.join(ROOT, 'docs', '_kb-agent.html')
PDF = os.path.join(ROOT, 'Modern-Age-Coders-Agent-KnowledgeBase.pdf')

text = open(TXT, encoding='utf-8').read()

page = """<!doctype html><html><head><meta charset="utf-8">
<title>Modern Age Coders Knowledge Base</title>
<style>
@page { size: A4; margin: 12mm 10mm; }
html, body { margin: 0; padding: 0; background: #fff; }
pre {
  font-family: "Consolas", "DejaVu Sans Mono", monospace;
  font-size: 7.4pt;
  line-height: 1.32;
  color: #000;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
}
</style></head><body><pre>%s</pre></body></html>""" % html.escape(text)

os.makedirs(os.path.dirname(HTML), exist_ok=True)
open(HTML, 'w', encoding='utf-8').write(page)
print('html: %.2f MB' % (os.path.getsize(HTML) / 1048576))

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.goto('file:///' + HTML.replace('\\', '/'), wait_until='load')
    # No header and no footer on purpose. Anything Chromium paints per page gets
    # injected into the extracted text layer, so a page number would end up
    # spliced into the middle of a sentence for whatever parser reads this.
    pg.pdf(path=PDF, format='A4', print_background=False,
           margin={'top': '12mm', 'bottom': '12mm', 'left': '10mm', 'right': '10mm'},
           display_header_footer=False)
    b.close()

print('PDF: %s  (%.2f MB)' % (PDF, os.path.getsize(PDF) / 1048576))
