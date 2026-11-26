# Montana Cabinet Painting

One-page website for Montana Cabinet Painting (Missoula, MT): plain HTML/CSS/JS with no build step, hosted on GitHub Pages.

## Files
- `index.html`: all page content
- `css/tokens.css`: brand colors, fonts and spacing (see `BRAND.md`)
- `css/styles.css`: layout and components
- `js/main.js`: mobile menu, before/after slider, desktop text fallback
- `images/`: logo files and photos (see `images/README.md`)
- `BRAND.md`: brand guide

## Before going live: replace placeholders
Search `index.html` and `js/main.js` for these and replace them:
Phone is set to (406) 207-7830.

Email is set to Quote@MontanaCabinetPainting.com.
- `href="#"` on "See our Google reviews": your Google Business Profile reviews link
- Photo placeholders: see `images/README.md`

## Preview locally
```
python3 -m http.server 8000
```
Then open http://localhost:8000

## Publish on GitHub Pages
1. Merge to `main`.
2. In the repo, go to **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Optional custom domain: add it there, which creates a `CNAME` file, then point your DNS at GitHub Pages.
