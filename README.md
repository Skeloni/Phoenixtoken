# Phoenix Token Landing Page

Static landing page for [phoenixproject.community](https://phoenixproject.community).

## Build CSS

Tailwind CSS is compiled locally (do not use the CDN in production):

```bash
npm install
npm run build:css
```

Re-run `npm run build:css` after changing Tailwind classes in `index.html` or `hr.html`.

## Deploy

Upload all files including:

- `css/styles.css` (built stylesheet)
- `phoenix-logo-160.png`, `phoenix-logo-32.png`
- `video-poster.jpg`
- `video-phoenix-token.mp4`
