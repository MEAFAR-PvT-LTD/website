MeaFar — Static Site (Eleventy)

Quick start

1. Install dev deps:

```bash
npm install
```

1. Run local dev server:

```bash
npm start
```

1. Build for production:

```bash
npm run build
```

Formspree contact form

- The contact form in `src/contact.njk` posts to a Formspree endpoint placeholder. Replace the action URL with your Formspree form endpoint (`https://formspree.io/f/yourFormId`) or sign up on Formspree to get a form ID.
- To forward to `contact@meafar.com`, configure that email in Formspree dashboard.

Deploy

- Recommended: Netlify. Set build command to `npx @11ty/eleventy` and publish directory to `_site`.
