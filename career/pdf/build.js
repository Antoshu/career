#!/usr/bin/env node
// Assembles a content fragment + a layout stylesheet into a standalone HTML file,
// then renders it to PDF (and a PNG preview) via headless Chrome.
//
//   node build.js classic content-acme   -> one layout, content-acme.html
//   node build.js all content-acme       -> classic, compact and banded
//
// Chrome is found in the usual install locations, falling back to Edge or Chromium;
// set CHROME_PATH to override.

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { pathToFileURL } = require('url');

const DIR = __dirname;
const OUT = path.join(DIR, 'out');

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Google\\Chrome\\Application\\chrome.exe'),
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/snap/bin/chromium',
    // Edge renders identically and ships with every Windows install
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/microsoft-edge',
  ].filter(Boolean);
  const hit = candidates.find(p => fs.existsSync(p));
  if (!hit) {
    console.error('Chrome not found (Edge and Chromium also work). Install Google Chrome or set CHROME_PATH to the browser executable.');
    process.exit(1);
  }
  return hit;
}

const [layoutArg, contentName] = process.argv.slice(2);
if (!layoutArg || !contentName) {
  console.error('usage: node build.js <classic|compact|banded|all> <content-name>');
  process.exit(1);
}
const layouts = layoutArg === 'all' ? ['classic', 'compact', 'banded'] : [layoutArg];
const CHROME = findChrome();

fs.mkdirSync(OUT, { recursive: true });
const content = fs.readFileSync(path.join(DIR, `${contentName}.html`), 'utf8');
const nameMatch = content.match(/<h1 class="name">([^<]+)<\/h1>/);
const title = nameMatch ? `${nameMatch[1].trim()} - CV` : 'CV';

for (const layout of layouts) {
  const css = fs.readFileSync(path.join(DIR, `layout-${layout}.css`), 'utf8');
  const slug = `${contentName.replace(/^content-/, '')}-${layout}`;
  const htmlPath = path.join(OUT, `${slug}.html`);
  const pdfPath = path.join(OUT, `${slug}.pdf`);
  const pngPath = path.join(OUT, `${slug}.png`);

  fs.writeFileSync(htmlPath, `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>${title}</title>
<style>
${css}
</style>
</head>
<body>
${content}
</body>
</html>
`);

  const url = pathToFileURL(htmlPath).href;
  const common = ['--headless=new', '--disable-gpu', '--no-sandbox', '--run-all-compositor-stages-before-draw', '--virtual-time-budget=4000'];

  execFileSync(CHROME, [...common, '--no-pdf-header-footer', `--print-to-pdf=${pdfPath}`, url], { stdio: 'pipe' });
  execFileSync(CHROME, [...common, '--screenshot=' + pngPath, '--window-size=794,1123', '--force-device-scale-factor=2', '--hide-scrollbars', url], { stdio: 'pipe' });

  const kb = (fs.statSync(pdfPath).size / 1024).toFixed(0);
  const m = fs.readFileSync(pdfPath, 'latin1').match(/\/Count (\d+)/);
  const pages = m ? `${m[1]} page${m[1] === '1' ? '' : 's'}` : 'page count unknown';
  console.log(`${slug.padEnd(22)} pdf ${kb}kB  ${pages}  ->  out/${slug}.pdf`);
}
