#!/usr/bin/env python3
from pathlib import Path

from PIL import Image

root = Path(__file__).resolve().parent.parent
frames_dir = Path("/tmp/banner-frames")
files = sorted(frames_dir.glob("*.png"))

if not files:
    raise SystemExit("no frames found")

frames = []
for file in files:
    frames.append(Image.open(file).convert("RGB").resize((1100, 344), Image.LANCZOS))

palette = frames[0].quantize(colors=64, method=Image.MEDIANCUT)
frames = [image.quantize(palette=palette, dither=Image.NONE) for image in frames]

out = root / "assets" / "banner.gif"
frames[0].save(
    out,
    save_all=True,
    append_images=frames[1:],
    duration=83,
    loop=0,
    optimize=True,
)
print(f"wrote {out} ({out.stat().st_size // 1024} KB)")
