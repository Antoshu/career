# Build and fit to one page

The builder is `career/pdf/build.js` (Node, no dependencies). It wraps a content fragment in a layout stylesheet and renders PDF and PNG with headless Chrome. It looks for Chrome in the standard install locations on Windows, macOS and Linux, then falls back to Edge or Chromium; if the browser lives elsewhere, set `CHROME_PATH` to the executable. Use Node for any scripted edits rather than assuming Python is installed.

## Build

From `career/pdf/`:

```
node build.js classic content-<slug>
```

Output: `out/<slug>-classic.pdf`, `out/<slug>-classic.png` (A4 preview, first page only), `out/<slug>-classic.html`. The build prints the PDF page count; it must say `1 page`. Classic is the default layout; `compact` and `banded` exist too, but do not offer them unless asked.

If you need a taller preview to see how far the overflow goes, screenshot the built HTML with the same Chrome at a taller window:

```
"<chrome>" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
  --screenshot="<scratchpad>/tall.png" --window-size=794,1400 --force-device-scale-factor=1 \
  "file:///<absolute path to>/career/pdf/out/<slug>-classic.html"
```

Then Read the PNG. Always look at the final PNG before sending: check nothing is cramped, no bullet runs past three lines, the contact line is one row.

## Fit sequence

Apply in this order and rebuild after each step. Stop as soon as the count is 1.

1. **Header:** contact line on one row. Drop any job-title label from it ("Data Engineer · Leeds…" becomes "Leeds…").
2. **Merge, then cut**, per `career-interview/references/deliverables.md` "Fitting to one page". Weakest bullet in the least relevant role first; older or off-target roles down to two bullets; their context line to one row.
3. **Compress Education and Additional** to one or two lines each: secondary school folds into the degree line or goes; languages, publications, awards and interests share a single Additional line separated by dots.
4. **Style overrides**, a `<style>` block at the top of the content file (the template has it). Allowed values, no further:
   ```
   .head { margin-bottom: 10pt; }
   h2 { margin-top: 7pt; }
   li { margin-bottom: 2pt; }
   @page { margin: 12mm 15mm 10mm 15mm; }
   @media screen { body { padding: 12mm 15mm 10mm; } }
   ```
   Never reduce font size or line height; the recruiter complaint the layout guards against is density.

Record in `interview-state.md` what the PDF says differently from the markdown after fitting.

## Naming

- Content: `career/pdf/content-<slug>.html`
- Markdown: `career/cv-<slug>.md`
- Posting: `career/sources/posting-<slug>.md`
- Sent file: `career/send/<Firstname>-<Lastname>-CV-<Target>.pdf`, e.g. `Jane-Doe-CV-Data-Engineer.pdf`

## HTML entities

The content files use entities, not raw characters: `&rsquo;` `&ldquo;` `&rdquo;` `&middot;` `&ndash;` `&eacute;` `&amp;` and so on. Grep the file for `—` before building; it must return nothing.
