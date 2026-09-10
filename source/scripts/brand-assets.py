#!/usr/bin/env python3
"""Generate brand assets: og-image.png (1200x630) + apple-touch-icon.png (180)."""
from PIL import Image, ImageDraw, ImageFont
import os

OUT = '/workspace/portfolio-src/public'
os.makedirs(f'{OUT}/images', exist_ok=True)

VAR = '/workspace/assets/Manrope.ttf'
F400 = '/workspace/assets/Manrope-400.ttf'
F800 = '/workspace/assets/Manrope-800.ttf'
DEJAVU = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'

CREAM = (245, 241, 230)
CHARCOAL = (37, 38, 31)
OLIVE = (102, 122, 62)
OLIVE_DEEP = (75, 83, 32)
GRAY = (111, 113, 102)
GOLD = (197, 168, 90)
LINE = (203, 202, 181)  # olive @ 25% over cream


def get_font(size, weight=400):
    if os.path.exists(VAR):
        f = ImageFont.truetype(VAR, size)
        try:
            f.set_variation_by_axes([weight])
        except Exception:
            pass
        return f
    path = F800 if weight >= 700 else F400
    if os.path.exists(path):
        return ImageFont.truetype(path, size)
    return ImageFont.truetype(DEJAVU, size)


def tracked(draw, xy, text, fnt, fill, tracking=0):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + tracking
    return x


# ── Open Graph image — 1200 x 630 ────────────────────────────────────────────
img = Image.new('RGB', (1200, 630), CREAM)
d = ImageDraw.Draw(img)

# inset editorial frame
d.rectangle([28, 28, 1171, 601], outline=LINE, width=2)

# status
d.ellipse([92, 84, 104, 96], fill=OLIVE)
tracked(d, (118, 78), 'OPEN TO OPPORTUNITIES', get_font(21, 700), OLIVE_DEEP, 6)

# name
d.text((88, 168), 'AMAN NIZAR', font=get_font(96, 800), fill=CHARCOAL)
d.text((88, 272), 'M P.', font=get_font(96, 800), fill=OLIVE)

# role
tracked(d, (92, 408), 'JAVA FULL STACK DEVELOPER', get_font(30, 800), OLIVE_DEEP, 10)

# rule
d.line([92, 462, 560, 462], fill=LINE, width=2)

# tagline
d.text((92, 486), 'Building software with purpose — Java · Spring Boot · MySQL', font=get_font(26, 500), fill=GRAY)

# footer
tracked(d, (92, 548), 'AMANNIZAR.GITHUB.IO', get_font(19, 700), GRAY, 5)

# right monogram block
d.rectangle([856, 128, 1092, 364], outline=OLIVE_DEEP, width=2)
d.rectangle([868, 140, 1080, 352], outline=LINE, width=1)
d.text((918, 178), 'AN', font=get_font(110, 800), fill=OLIVE_DEEP)
d.ellipse([1044, 316, 1062, 334], fill=GOLD)

img.save(f'{OUT}/images/og-image.png', optimize=True)
print('og-image.png', img.size, round(os.path.getsize(f"{OUT}/images/og-image.png") / 1024), 'KB')

# ── Apple touch icon — 180 x 180 ────────────────────────────────────────────
ico = Image.new('RGB', (180, 180), OLIVE_DEEP)
di = ImageDraw.Draw(ico)
di.text((38, 48), 'AN', font=get_font(72, 800), fill=CREAM)
di.ellipse([140, 34, 152, 46], fill=GOLD)
ico.save(f'{OUT}/apple-touch-icon.png', optimize=True)
print('apple-touch-icon.png', ico.size, round(os.path.getsize(f"{OUT}/apple-touch-icon.png") / 1024), 'KB')
