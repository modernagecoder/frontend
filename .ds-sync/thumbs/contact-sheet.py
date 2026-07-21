# Builds contact sheets (4x4 grids of 380px-wide cards) from all poster specs,
# so every render can be eyeballed quickly.
#   python .ds-sync/thumbs/contact-sheet.py <out-dir>
import sys, os, glob, math
from PIL import Image, ImageDraw

out_dir = sys.argv[1]
names = sorted(os.path.basename(f)[:-4] for f in glob.glob('.ds-sync/thumbs/cards-poster/*.mjs'))
CW, CH, PAD, LBL = 380, 214, 12, 18
COLS, ROWS = 4, 4
per = COLS * ROWS
sheets = math.ceil(len(names) / per)
for s in range(sheets):
    batch = names[s * per:(s + 1) * per]
    W = COLS * (CW + PAD) + PAD
    H = ROWS * (CH + PAD + LBL) + PAD
    sheet = Image.new('RGB', (W, H), '#FBF8F2')
    d = ImageDraw.Draw(sheet)
    for i, n in enumerate(batch):
        p = f'public/images/{n}.png'
        if not os.path.exists(p):
            continue
        img = Image.open(p).resize((CW, CH), Image.LANCZOS)
        x = PAD + (i % COLS) * (CW + PAD)
        y = PAD + (i // COLS) * (CH + PAD + LBL)
        sheet.paste(img, (x, y))
        d.text((x + 2, y + CH + 3), n, fill='#1C1814')
    out = os.path.join(out_dir, f'sheet-{s+1:02d}.png')
    sheet.save(out, 'PNG', optimize=True)
    print('sheet', out, len(batch), 'cards')
print('total', len(names))
