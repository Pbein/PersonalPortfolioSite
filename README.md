# philipbein.com

Personal site — SvelteKit + Tailwind, deployed on Vercel.

## Editing content

All public-facing copy lives in **`src/lib/content.js`**. Hero text, project cards,
the "currently building" list, the About paragraphs, and the contact links are all
there. The components read from it; don't edit copy inside `.svelte` files.

Two things in that file are conference-specific and should be revisited afterwards:

```js
const mailSubject = "Hello from the New Mexico Tech Summit";
const mailBody    = `Hi Philip, ...`;
```

These build the prefilled `mailto:` used by the "Email me" button. Blank them or
swap in something generic once the summit is over.

## Develop

```bash
npm install
npm run dev          # http://localhost:5173
```

## Build

```bash
npm run build
npm run preview      # note: restart it after a rebuild — it caches the bundle
```

## Assets

| Path | What |
|---|---|
| `static/qr/philipbein-qr.svg` | QR used by the in-page "Show QR" modal |
| `static/qr/philipbein-qr.png` | Same code, 1200px raster |
| `static/qr/philip-conference-card.png` | Name + QR card, sized for a phone screen |
| `static/og.png` / `og.jpg` | Open Graph / link-preview image (1200×630) |
| `static/images/profile-main.webp` / `.png` | Hero avatar (optimized from `AnimatedProfilePic.png`) |
| `static/images/philip.webp` / `.jpg` | Unused alternate: the real photo, if you ever want to swap |
| `static/favicon.svg` | "PB" mark |

All QR assets encode `https://philipbein.com` and have been decode-verified.

Regenerate the QR with:

```bash
npx qrcode -t svg -e H -q 2 -d 020617ff -l ffffffff \
  -o static/qr/philipbein-qr.svg "https://philipbein.com"
```
