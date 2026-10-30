#!/usr/bin/env node
// Renders resume/resume.html to public/resume.pdf using headless Chrome.
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "resume", "resume.html");
const target = join(root, "public", "resume.pdf");

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

const profile = mkdtempSync(join(tmpdir(), "resume-chrome-"));

try {
  execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--no-default-browser-check",
      "--no-pdf-header-footer",
      "--virtual-time-budget=2000",
      `--user-data-dir=${profile}`,
      `--print-to-pdf=${target}`,
      pathToFileURL(source).href,
    ],
    { stdio: "inherit" },
  );
} finally {
  rmSync(profile, { recursive: true, force: true });
}

console.log(`wrote ${target}`);
