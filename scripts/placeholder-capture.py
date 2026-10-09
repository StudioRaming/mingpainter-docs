"""Writes a gray placeholder PNG for each capture that has no real screenshot yet.

usage: python placeholder-capture.py <out-dir> <name.png> [<name.png> ...]

Each placeholder carries the text "촬영 예정: <name>" so a reader of the built
site can tell it apart from a real capture.
"""

import os
import sys

from PIL import Image, ImageDraw, ImageFont

FONT_CANDIDATES = [
    "C:/Windows/Fonts/malgun.ttf",
    "C:/Windows/Fonts/NanumGothic.ttf",
]
WIDTH, HEIGHT = 960, 540
BACKGROUND = (206, 210, 216)
TEXT = (60, 64, 70)


def load_font(size):
    for path in FONT_CANDIDATES:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def main(argv):
    if len(argv) < 3:
        print(__doc__)
        return 2
    out_dir = argv[1]
    os.makedirs(out_dir, exist_ok=True)
    big = load_font(40)
    small = load_font(26)
    for name in argv[2:]:
        image = Image.new("RGB", (WIDTH, HEIGHT), BACKGROUND)
        draw = ImageDraw.Draw(image)
        label = "촬영 예정: " + name
        for text, font, y in ((label, big, HEIGHT // 2 - 30), ("PLACEHOLDER", small, HEIGHT // 2 + 30)):
            left, top, right, bottom = draw.textbbox((0, 0), text, font=font)
            draw.text(((WIDTH - (right - left)) // 2, y), text, font=font, fill=TEXT)
        fmt = {".webp": "WEBP", ".gif": "GIF"}.get(os.path.splitext(name)[1].lower(), "PNG")
        image.save(os.path.join(out_dir, name), fmt)
    print("placeholders written: %d" % (len(argv) - 2))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
