# Converts rendered thumbnail PNGs to webp in both image dirs.
#   python .ds-sync/thumbs/towebp.py python-kids scratch-kids
import sys, os
from PIL import Image

PUB = 'public/images'
CRS = 'content/courses/images'

for name in sys.argv[1:]:
    src = f'{PUB}/{name}.png'
    img = Image.open(src)
    img.save(f'{PUB}/{name}.webp', 'WEBP', quality=82)
    if os.path.isdir(CRS):
        img.save(f'{CRS}/{name}.webp', 'WEBP', quality=82)
        # keep a same-art png alongside it when one already exists there
        if os.path.exists(f'{CRS}/{name}.png'):
            img.save(f'{CRS}/{name}.png', 'PNG', optimize=True)
    print('webp', name)
