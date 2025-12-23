# Anchor Site

Production-ready marketing + demo site for Anchor, built with Vite, React, TypeScript, and Tailwind CSS.

## Environment Variables

Create a `.env` file (see `.env.example`) and provide the widget configuration.

```
VITE_WIDGET_SRC="https://cdn.anchor.ai/widget.js"
VITE_API_BASE="https://api.anchor.ai"
VITE_DEMO_TENANT="demo"
```

## Run Locally

```bash
npm install
npm run dev
```

## Deploy (Netlify)

1. Push the repo to GitHub.
2. Create a new Netlify site and point it to the repo.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Add the environment variables from `.env.example` in the Netlify UI.

