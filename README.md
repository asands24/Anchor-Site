# Anchor Site

Production-ready marketing + demo site for Anchor, built with Vite, React, TypeScript, and Tailwind CSS.

## Pricing

Anchor is a **commercial software license** for a production-ready AI support copilot. Purchase the codebase once, deploy in your own infrastructure, and optionally add professional setup and ongoing support.

### Starter (License Only)
**$2,000–$5,000 (one-time)**
- Complete source code with commercial license
- Multi-tenant architecture (PostgreSQL + OpenAI)
- Embeddable chat widget + admin dashboard
- Full deployment documentation
- 30-day email support

**Ideal for:** Teams with in-house engineering who want to self-deploy.

### Pro (License + Setup)
**$3,000–$8,000 (one-time)**
- Everything in Starter
- Guided setup session (2–4 hours)
- Infrastructure review
- Custom branding and widget configuration
- Initial data ingestion (up to 500 docs)

**Ideal for:** Teams that want expert guidance to get running faster.

### Enterprise (Custom)
**Contact for pricing**
- Everything in Pro
- Custom feature development (SSO, RBAC, integrations)
- SLA and uptime guarantees
- Dedicated support channel
- Purchase order (PO) support

**Ideal for:** Organizations with complex compliance or security requirements.

### Optional Support
**$250–$750/month**
- Priority bug fixes and patches
- Configuration guidance
- Data ingestion assistance
- Email + Slack support (48-hour SLA)

### Payment & Procurement
- Pay by Stripe invoice: [Stripe Invoice Link Placeholder]
- Pay by Stripe checkout: [Stripe Checkout Link Placeholder]
- ACH/Wire available for Enterprise
- Net 14 (Starter/Pro) or Net 30 (Enterprise)
- PO available for Enterprise tier

**See [PRICING.md](PRICING.md) for full details and FAQ.**

## Features implemented
- **Underwater Theme**: Custom "OceanShell" background with bubbles and deep navy gradients.
- **Konami Code**: Entering `↑ ↑ ↓ ↓ ← → ← → B A` toggles "Deep Dive Mode".
- **Live Demo**: Integrates with the production widget script.
- **Architecture Visualization**: Explains the RAG stack clearly.
- **Knowledge Base**: Enterprise-ready documentation center (`/knowledge`) powered by Markdown files, `react-markdown`, and Tailwind Typography.

## Environment Variables

Create a `.env` file (see `.env.example`) and provide the widget configuration.

\`\`\`
VITE_WIDGET_SRC="https://cdn.anchor.ai/widget.js"
VITE_API_BASE="https://api.anchor.ai"
VITE_DEMO_TENANT="demo"
\`\`\`

## Run Locally

\`\`\`bash
npm install
npm run dev
\`\`\`

## Managing Knowledge Base

Content is located in `src/content/knowledge/*.md`.
1. Create a new markdown file in that directory.
2. Import it in `src/pages/KnowledgeBase.tsx`.
3. Add it to the `contentMap` and `navigation` array in `KnowledgeBase.tsx`.

## Deploy (Netlify)

1. Push the repo to GitHub.
2. Create a new Netlify site and point it to the repo.
3. Build command: \`npm run build\`.
4. Publish directory: \`dist\`.
5. Add the environment variables from `.env.example` in the Netlify UI.
