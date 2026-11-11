#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const candidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const chrome = candidates.find((path) => existsSync(path));

if (!chrome) {
  console.error("No Chrome found. Install Chrome or set CHROME_PATH to a Chromium binary.");
  process.exit(1);
}

const frames = "/tmp/banner-frames";
rmSync(frames, { recursive: true, force: true });
mkdirSync(frames, { recursive: true });

const source = pathToFileURL(join(root, "banner/banner.html")).href;

for (let index = 0; index < 24; index += 1) {
  const profile = mkdtempSync(join(tmpdir(), "banner-chrome-"));

  try {
    execFileSync(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--no-first-run",
        "--no-default-browser-check",
        "--force-device-scale-factor=2",
        "--allow-file-access-from-files",
        "--virtual-time-budget=800",
        `--user-data-dir=${profile}`,
        "--window-size=1600,500",
        `--screenshot=${join(frames, `${String(index).padStart(3, "0")}.png`)}`,
        `${source}?t=${index * 83}`,
      ],
      { stdio: "ignore" },
    );
  } finally {
    rmSync(profile, { recursive: true, force: true });
  }
}

execFileSync("python3", [join(root, "scripts/banner-gif.py")], { stdio: "inherit" });
