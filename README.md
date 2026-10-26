# Piolo Macayan — Portfolio

A responsive, static portfolio for [notyourgrandpa.github.io](https://notyourgrandpa.github.io), built with HTML, CSS, and vanilla JavaScript. No package installation or build step is required.

## Preview

Open `index.html` directly, or serve this directory with any static HTTP server. An HTTP localhost preview supports the clipboard button; direct file previews may require manually copying the email address.

## Editing

- `index.html`: profile, selected projects, skills, and contact links.
- `style.css`: layout, responsive styles, and colors.
- `gallery.css`: repository gallery, filters, and snapshot dialog styles.
- `script.js`: current year, email copying, repository search/filtering, and snapshot enlargement.
- `repositories.json`: metadata for all 16 public repositories, verified October 26, 2026. Forks are identified separately from original projects.
- `assets/snapshots/`: locally saved project and source snapshots.
- `favicon.svg`: portfolio monogram.

The hero artwork is illustrative CSS. Project images are browser captures of actual interfaces, static templates, original README screenshots, or explicitly labeled source/README previews. See `SNAPSHOTS.md` for provenance. Kita remains labeled as in development.

Google Fonts is optional: the site falls back to system fonts when offline. All artwork and core functionality are local, with no framework or animation CDN dependency.

## Publishing

The root `index.html` is ready for GitHub Pages from the `main` branch, repository root. Review changes, commit, and push when ready. No deployment automation is included.
