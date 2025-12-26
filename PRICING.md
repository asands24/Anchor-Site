# Pricing

Anchor is a **commercial software license** for a production-ready AI support copilot. You purchase the codebase once, deploy it in your own infrastructure, and optionally add professional setup and ongoing support. There are no per-seat fees, no usage limits, and no vendor lock-in—you own the code.

---

## Starter (License Only)

**Price:** $2,000–$5,000 (one-time)

**What's included:**
- Complete source code with commercial license
- Multi-tenant architecture (PostgreSQL + OpenAI)
- Embeddable chat widget
- Admin dashboard with observability
- Full deployment documentation
- 30-day email support for setup questions

**Ideal for:**
Teams with in-house engineering who want to self-deploy and customize.

---

## Pro (License + Setup)

**Price:** $3,000–$8,000 (one-time)

**What's included:**
- Everything in Starter
- **Guided setup session** (2–4 hours live pairing)
- Infrastructure review (AWS/GCP/Azure)
- Custom branding and widget configuration
- Initial data ingestion (up to 500 documents)
- Deployment validation and handoff

**Ideal for:**
Teams that want expert guidance to get running in production faster.

---

## Enterprise (Custom)

**Price:** Contact for pricing

**What's included:**
- Everything in Pro
- **Custom feature development** (SSO, RBAC, advanced integrations)
- Multi-environment deployment (staging, prod, DR)
- SLA and uptime guarantees
- Dedicated Slack/Teams channel
- White-glove onboarding and training
- Purchase order (PO) and procurement support

**Ideal for:**
Large organizations with complex compliance, security, or feature requirements.

---

## Optional Support

**Price:** $250–$750/month (month-to-month or annual contract)

**What's included:**
- Priority bug fixes and patches
- Minor version updates and migrations
- Configuration guidance (LLM tuning, indexing strategies)
- Data ingestion assistance
- Monitoring and performance review
- Email + Slack support (48-hour SLA on business days)

**Not included:** Major feature development (quoted separately)

---

## Payment & Procurement

### How to pay
- **Stripe Invoice** – [Stripe Invoice Link Placeholder]
- **Stripe Checkout** – [Stripe Checkout Link Placeholder]
- **ACH/Wire Transfer** – Available for Enterprise customers
- **Purchase Order (PO)** – Supported for Enterprise tier

### Payment terms
- **Net 14** (Starter, Pro)
- **Net 30** (Enterprise, or by prior arrangement)

### Tax & compliance
- All invoices include applicable sales tax (US) or VAT (EU).
- W-9 and vendor forms available upon request.

---

## Frequently Asked Questions

### Do we own the code?
Yes. You receive a perpetual, non-exclusive commercial license to use, modify, and deploy the codebase. You can fork it, customize it, and build on top of it without restrictions.

### Can we self-host?
Absolutely. Anchor is designed to run in your own AWS, GCP, Azure, or on-prem environment. You control the data, keys, and infrastructure.

### What's included in setup (Pro tier)?
A live pairing session where we:
- Review your cloud environment
- Deploy the app to staging/production
- Configure your LLM provider (OpenAI, Azure OpenAI, etc.)
- Ingest your initial documents
- Customize branding (colors, logo)
- Walk through the admin dashboard and widget embed

### Do you offer annual renewals/updates?
The license is perpetual (no annual renewal required). However, **ongoing support** is available via the Optional Support plan. Major version upgrades may be offered at a discounted upgrade fee (determined on a case-by-case basis).

### What security controls exist?
Anchor includes:
- Multi-tenant data isolation (PostgreSQL row-level security)
- API key rotation and scoped permissions
- HTTPS-only deployments
- Environment variable secrets management
- Audit logs for admin actions
- OWASP best practices (input validation, XSS protection, etc.)

For **Enterprise customers**, we can assist with:
- SOC 2 / ISO 27001 compliance documentation
- SAML/SSO integration
- Custom security reviews and penetration testing coordination

---

## Technical Requirements

### Stripe Buy Button & CSP
The pricing page uses Stripe Buy Buttons for checkout. This requires:
- **Script Source:** `https://js.stripe.com/v3/buy-button.js` must be loaded and not blocked by Content Security Policy (CSP) or ad blockers
- **CSP Configuration:** If you deploy with a strict CSP, ensure it allows `script-src` from `https://js.stripe.com`
- **Third-Party Scripts:** Ad blockers or privacy extensions may block Stripe scripts in development; test in an incognito/private window if the button doesn't appear

The Stripe Buy Button custom element is loaded globally in the site's `index.html` to ensure availability across all routes.

---

## Ready to get started?

1. **Schedule a demo** – [Contact us](mailto:support@anchor.ai) to see Anchor in action.
2. **Confirm your tier** – Let us know which plan fits your needs.
3. **Receive invoice** – We'll send a Stripe invoice or quote for PO.
4. **Deployment & handoff** – Get access to the repo and (if Pro/Enterprise) schedule your setup session.

**Questions?** Reach out at [support@anchor.ai](mailto:support@anchor.ai).
