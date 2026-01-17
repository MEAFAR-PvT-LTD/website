# Copilot / AI Agent Instructions — MeaFar site

Purpose

- Help code-writing agents make safe, correct edits to this Eleventy static-site repository.

Big picture (what to know)

- This is an Eleventy (11ty) static site. Source content lives in `src/` and `projects/`.
- Templates use Nunjucks (`.njk`) with layouts under `src/layouts/` and include fragments under `src/_includes/`.
- Site-wide data lives in `src/_data/site.json` (e.g., site.title, site.email).
- Built output is generated to `_site/`. Do not edit files under `_site/` — modify source files in `src/` or `projects/`.

Key files and patterns (examples)

- Dev server / build: `package.json` scripts: `npm start` → `eleventy --serve`, `npm run build` → `eleventy`.
- Home page uses layout frontmatter at `src/index.njk` (example: `--- layout: layouts/base.njk ---`).
- Project listings use the `collections.projects` collection (see `src/index.njk`) with source markdown files in the `projects/` folder.
- Layouts include `header.njk` / `footer.njk` via `{% include "header.njk" %}` in `src/layouts/base.njk`.
- Site data: see [src/\_data/site.json](src/_data/site.json) for authors and contact email.
- Contact form: `src/contact.njk` posts to a Formspree endpoint (placeholder in README). Do not commit real credentials.

Developer workflows and commands

- Install dependencies: `npm install`.
- Run local development server (live reload): `npm start`.
- Build production output: `npm run build` (output is `_site/`).
- Deploy: publish the `_site` folder (README recommends Netlify; build command `npx @11ty/eleventy`, publish `_site`).

Project-specific conventions

- Prefer editing source in `src/` (pages and layouts) and `projects/` (project markdown). Keep `_site/` read-only.
- CSS and images are served from `/assets/...` in the site — source copies live in `public/assets/css/styles.css` and `public/assets/images/` (update source assets, then build).
- Use Nunjucks frontmatter for pages (see `src/index.njk` header). When adding a page, include `layout: layouts/base.njk` in frontmatter.

Integration points and external services

- Formspree: contact form in `src/contact.njk` uses a Formspree action URL — update only via env or dashboard; do not store secrets here.

Editing guardrails for AI agents

- Never edit `_site/` files — edits must be made in `src/`, `projects/`, or `public/` as appropriate.
- When changing layouts, prefer making minimal, focused changes and run `npm start` locally to verify HTML output.
- Don't introduce runtime servers or new build tools; keep changes consistent with existing Eleventy setup.

If uncertain, where to look

- Layouts and includes: `src/layouts/`, `src/_includes/`.
- Page templates: `src/*.njk` and `projects/*.md`.
- Build scripts: `package.json`.
- Site data: `src/_data/site.json`.

Next step for reviewers

- Ask for clarification on any content areas (collections, asset pipeline, or deploy targets).
