# -*- coding: utf-8 -*-
"""Render the plain-text agent knowledge base to a Word document (.docx).

Built from Modern-Age-Coders-Agent-KnowledgeBase.txt, never edited by hand, so
the .txt, the .pdf and the .docx always say the same thing. The text file is
hard-wrapped at 96 characters; here each wrapped paragraph is joined back into
one Word paragraph, and the PART / COURSE banners become real headings so the
document has a navigation pane.

Needs python-docx:  pip install python-docx
"""
import os, re
from docx import Document
from docx.shared import Pt, Cm
from docx.enum.text import WD_BREAK

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TXT = os.path.join(ROOT, 'Modern-Age-Coders-Agent-KnowledgeBase.txt')
DOCX = os.path.join(ROOT, 'Modern-Age-Coders-Agent-KnowledgeBase.docx')

lines = open(TXT, encoding='utf-8').read().split('\n')

RULE = re.compile(r'^\s*[=-]{20,}\s*$')
BULLET = re.compile(r'^(\s*)- (.*)$')
LABEL = re.compile(r'^[A-Z][A-Za-z ,()\']{1,45}:(\s|$)')      # "Course link:", "Q:", "Group class:"
CAPS = re.compile(r'^[A-Z0-9][A-Z0-9 ,.()\'/&+:-]{3,}$')        # ALL CAPS section labels

doc = Document()
sec = doc.sections[0]
sec.page_height, sec.page_width = Cm(29.7), Cm(21.0)
for side in ('left_margin', 'right_margin'):
    setattr(sec, side, Cm(2.0))
sec.top_margin = sec.bottom_margin = Cm(1.8)
base = doc.styles['Normal']
base.font.name = 'Calibri'
base.font.size = Pt(10.5)
base.paragraph_format.space_after = Pt(3)

def is_banner(i):
    """a title line sandwiched between two ruler lines"""
    return (0 < i < len(lines) - 1 and RULE.match(lines[i - 1]) and RULE.match(lines[i + 1])
            and lines[i].strip())

def indent_of(s):
    return len(s) - len(s.lstrip(' '))

i, n = 0, len(lines)
first_course = True
while i < n:
    raw = lines[i]
    s = raw.strip()
    if not s or RULE.match(raw):
        i += 1
        continue
    if is_banner(i):
        level = 2 if s.startswith('COURSE ') or (raw.startswith('  ') and indent_of(raw) == 2) else 1
        if s.startswith('COURSE ') and not first_course:
            doc.add_paragraph().add_run().add_break(WD_BREAK.PAGE)
        if s.startswith('COURSE '):
            first_course = False
        doc.add_heading(s, level=level if not s.startswith('PART') else 1)
        i += 2
        continue
    if CAPS.match(s) and len(s) < 90 and not BULLET.match(raw):
        doc.add_heading(s, level=3)
        i += 1
        continue
    # gather one logical paragraph: a line plus its wrapped continuation lines
    b = BULLET.match(raw)
    text = b.group(2) if b else s
    base_indent = indent_of(raw)
    cont_indent = base_indent + 2 if b else base_indent
    prev_len = len(raw)
    j = i + 1
    while j < n:
        nxt = lines[j]
        t = nxt.strip()
        if (not t or RULE.match(nxt) or BULLET.match(nxt) or is_banner(j)
                or indent_of(nxt) != cont_indent or prev_len < 78
                or LABEL.match(t) or CAPS.match(t)):
            break
        text += ' ' + t
        prev_len = len(nxt)
        j += 1
    if b:
        p = doc.add_paragraph(text, style='List Bullet' if base_indent <= 4 else 'List Bullet 2')
    else:
        p = doc.add_paragraph()
        lab = LABEL.match(text)
        if lab:
            head = text[:lab.end()].rstrip()
            p.add_run(head).bold = True
            p.add_run(text[len(head):])
        else:
            p.add_run(text)
        if base_indent:
            p.paragraph_format.left_indent = Cm(0.4 * min(base_indent, 8) / 2)
    i = j

doc.core_properties.title = 'Modern Age Coders Knowledge Base for AI and WhatsApp Agents'
doc.core_properties.author = 'Modern Age Coders'
doc.save(DOCX)
print('DOCX: %s  (%.2f MB)' % (DOCX, os.path.getsize(DOCX) / 1048576))

# ---- round-trip check: every word of the text file must survive into the docx
d = Document(DOCX)
got = re.sub(r'\s+', ' ', ' '.join(p.text for p in d.paragraphs)).split()
want = re.sub(r'\s+', ' ', ' '.join(l for l in lines if not RULE.match(l))).replace(' - ', ' ').split()
want = [w for w in want if w != '-']
got = [w for w in got if w != '-']
if got != want:
    k = next((x for x in range(min(len(got), len(want))) if got[x] != want[x]), min(len(got), len(want)))
    raise SystemExit('DOCX text differs from the .txt at word %d: %r vs %r'
                     % (k, ' '.join(got[k:k + 8]), ' '.join(want[k:k + 8])))
print('PASS: docx carries every word of the text file (%d words)' % len(got))
