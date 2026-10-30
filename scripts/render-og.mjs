#!/usr/bin/env node
// Renders the Open Graph image and the Apple touch icon with headless Chrome.
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
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

const jobs = [
  { source: "og/og.html", target: "public/og.png", width: 1200, height: 630 },
  { source: "og/icon.html", target: "src/app/icon.png", width: 512, height: 512, transparent: true },
  { source: "og/apple-icon.html", target: "src/app/apple-icon.png", width: 180, height: 180 },
];

for (const job of jobs) {
  const profile = mkdtempSync(join(tmpdir(), "og-chrome-"));

  try {
    execFileSync(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--no-first-run",
        "--no-default-browser-check",
        "--force-device-scale-factor=1",
        "--allow-file-access-from-files",
        "--virtual-time-budget=2000",
        ...(job.transparent ? ["--default-background-color=00000000"] : []),
        `--user-data-dir=${profile}`,
        `--window-size=${job.width},${job.height}`,
        `--screenshot=${join(root, job.target)}`,
        pathToFileURL(join(root, job.source)).href,
      ],
      { stdio: "ignore" },
    );
  } finally {
    rmSync(profile, { recursive: true, force: true });
  }

  console.log(`wrote ${job.target}`);
}
