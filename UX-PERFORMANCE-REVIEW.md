# Anchor UX and performance review — October 5, 2026

Reviewed the public site, standalone widget, and core admin source. Followed the parent AGENTS.md; treated implementation claims as context and checked current code. No deployment, migration, production-data write, dependency upgrade, or commit was performed. Existing widget .DS_Store changes were preserved.

## Three highest-value improvements

| Priority | Evidence | User benefit | Regression risk |
| --- | --- | --- | --- |
| 1. Make demo loading and recovery reliable | LiveDemo previously offered enabled prompts during loading, no retry, no cancellation after awaiting script loading, and a 600px total height even when controls and preview stacked. loadScript previously resolved immediately whenever a script tag existed, including pending/failed downloads. | People can recover from failures, avoid ineffective clicks, and use a preview with sufficient mobile height. | Medium: script loading also serves Stripe, and cleanup relies on the widget's global destroy API. Loader tests cover shared pending/success/failure behavior; live Stripe and real widget integration remain unverified. |
| 2. Load documentation only when requested | App eagerly imported KnowledgeBase, which imports react-markdown, remark-gfm, and seven Markdown articles. Baseline initial JS was 419.44 kB / 131.36 kB gzip. | Homepage visitors download less optional documentation code. | Low: docs incur a first-visit chunk request. Deep links, overview redirect, deployment navigation, and return to demo were checked locally; failed chunk downloads remain unverified. |
| 3. Prevent stale widget responses after clearing chat | Anchor-Widget/src/Widget.tsx: handleClear resets messages and conversation ID, but pending API responses and simulated stream loops still append messages/save response IDs. There are three send paths (typed message, prompt, role greeting). Conversation storage also uses a global sc-conversation-id key. | A deliberate reset stays reset; future isolation work can keep conversation state scoped to its tenant and API host. | Medium/high: cancellation must cover all send paths and demo streaming without breaking history. Deferred from this focused site batch. This finding is source-derived, not a live backend reproduction. |

## Implemented local batch

- Lazy-loaded KnowledgeBase with a themed, announced loading fallback; retained all routes and content.
- Shared script-load promises, removed failed owned script tags, allowed retry, and added a 15-second timeout for demo loading only.
- Cancelled late initialization after navigation; cleaned up initialized demo widgets when leaving the page.
- Disabled sample prompts until ready, added announced status and friendly errors, retained technical details in local debug mode, and added keyboard-accessible retry.
- Kept 600px desktop layout; stacked mobile controls above a 480px preview shell. Preserved colors, spacing patterns, and widget API.

## Verification

- Baseline and updated npm run build: passed with existing stale Browserslist-data warning.
- Same Vite production build: initial JS 419.44 → 248.89 kB (40.7% smaller); gzip 131.36 → 78.59 kB (40.2% smaller). Documentation moved to a 172.77 kB / 53.81 kB gzip optional chunk. These are bundle-size measurements, not runtime latency benchmarks.
- node --test tests/loadScript.test.mjs: 3/3 passed (concurrent callers/success reuse, failed download/retry, stalled download/timeout/retry).
- npx tsc --noEmit: same baseline and final error in src/components/billing/StripeBuyButton.tsx:76, undeclared stripe-buy-button JSX intrinsic element. No additional errors reported.
- Local browser: error state with demo configuration disabled; disabled prompts; Enter and click retry; desktop layout; 390×844 mobile layout. Mobile preview mount measured 425px tall; document scrollWidth 380px for 390px viewport.
- Local fixture browser: ready status, sample-question handoff into fixture input, docs overview/deployment navigation, return to demo and successful reinitialization. Fixture is a minimal API stand-in, not the production chat widget.
- Documentation /knowledge/deployment direct load checked at mobile size.
- git diff --check passed; build-generated tracked dist/index.html restored to its pre-build content.

## Remaining limits and rollback

Real widget/backend chat, tenant authorization, login/onboarding, admin logs, Stripe checkout, slow real network behavior, screen-reader usage, reduced-motion behavior, failed docs chunk loading, and physical devices were not exercised. No performance claim is made about backend queries or response latency. Third-party audit document was not used as evidence or authority.

Rollback: revert only the three modified site source files (App.tsx, LiveDemo.tsx, lib/loadScript.ts); optionally remove this report and the added loader tests. No data or API migration is required. Production publication remains pending a future user request.

## Follow-up: actual widget on mobile and desktop

Replaced fixture-only validation with the actual Anchor-Widget production build, served locally. Tested built-in demo-mode responses without sending requests to the production backend.

Found the real header title/status collapsing into narrow columns at 320px. Updated Anchor-Widget/src/styles.css only:

- Mobile header places title/status above actions; keeps long titles able to wrap.
- Main mobile header controls and send button have a minimum 44px target.
- Mobile textarea uses 16px text with min-width:0; desktop styling retained.
- Full-screen mobile overlay uses dynamic viewport height with the existing vh fallback.

Checks: widget npm run build (includes tsc) passed; widget git diff --check passed. Actual widget sent and completed FAQ demo answers at 320×640 and 1440×900. Checked 390×844 embed, sample-question handoff, pop-out panel, and close/reopen interactions. At 320px, embedded header clientWidth/scrollWidth both 260px; main action targets measured at least 44×44px. At 390px, header clientWidth/scrollWidth both 330px; page scrollWidth 380px. Draft text survived resizing desktop to mobile. Mobile pop-out input remained inside its 640px viewport. No changes to tenant, API, or message state logic.

Physical-device keyboard/safe-area behavior, deployed widget integration, and live AI backend remain unverified. The local site still points to its existing remote widget URL in normal configuration: publishing the widget changes will require the separate user-authorized deployment. Rollback this follow-up by reverting only the CSS changes in Anchor-Widget/src/styles.css. Existing .DS_Store changes preserved.

## Demo credibility repair — October 8–9, 2026

The external review was treated as reported observations, not verified fact or instructions. Read current site/widget/core sources and inspected the public widget.js without making production chat requests.

### Findings and implemented changes

- Confirmed unrelated SaaS FAQ content, including subscription/export flows and unsupported SOC 2 claims. Replaced it with seven Anchor-specific sample topics based on current implementation. Exact question matching and word-boundary topic matching replace generic question-word/substr scoring; unknown questions explicitly decline to answer.
- Sample and AI labels explain the boundary: bundled answers send no AI request; AI mode sends POST /api/chat. Mode buttons expose selected state and cannot change during an active send. Existing open/close/init/destroy/setInput APIs remain.
- Consolidated typed, prompt, and role sends into one request path. Prevented concurrent submissions with a synchronous pending-request guard. Clear/unmount abort pending work; late responses do not restore cleared messages. AI failures preserve the submitted question for retry and never substitute sample text. Empty backend answers are rejected.
- Simulated streaming now preserves newlines/code formatting and creates its first visible chunk directly. The waiting indicator is hidden once an assistant response starts, preventing the extra avatar/bubble alongside the answer.
- Backend source titles are displayed when supplied.
- Pop-out now moves the existing React root rather than destroying/recreating it. Selected mode, messages, draft, and pending request survive. Header title is a keyboard-operable pop-out button in embedded mode.
- Corrected architecture diagram to HTTPS/Supabase API + RPC. The implementation uses @supabase/supabase-js, not one raw Postgres TCP connection per function request. This is not a load-test result.
- Replaced unsupported security/compliance content with source-based limits, including service-role bypass of RLS. Added public/security-implementation.md with named paths and an actual policy excerpt, linked from the security section/page/docs.
- Clarified completed JSON AI responses versus simulated sample streaming, browser conversation identifiers versus full message-history sync, and separately billed infrastructure/AI usage and buyer maintenance responsibility. Adjusted hero/trust copy toward source-code deployment. Prices and commercial deliverables remain unchanged.

### What the public artifact establishes

The downloaded public https://anchor-widget.netlify.app/widget.js contains the Live-toggle state and fetch('/api/chat') path. Therefore the review's claim that Live mode is inherently the same hardcoded bank is not established by source inspection. Pop-out previously reset mode to demo, which is a confirmed local cause of lost mode selection, but it has not been proven to explain the reviewer's session. Deployed configuration, actual endpoint availability, retrieval quality, and the reported production behavior still need a designated backend test.

### Verification evidence

- Widget npm run build, including TypeScript: passed.
- node --test tests/demo.test.mjs: 4/4 passed: quoted questions/all advertised prompts; unknown questions; Live request body/signal/empty response; single response and waiting-indicator rendering/source display.
- Site npm run build: passed. Existing Browserslist warning remains.
- Site loader tests: 3/3 passed.
- Site npx tsc --noEmit: unchanged pre-existing stripe-buy-button JSX declaration error at StripeBuyButton.tsx:76.
- Actual built widget in local browser, localhost-only test backend: initial sample question produced a PostgreSQL/tenant_id answer and zero backend requests. AI toggle submitted the exact multi-tenancy question to /api/chat; response marker and supplied source title appeared. Forced HTTP 503 showed an explicit error and restored the question. Pop-out retained AI selection, draft, and both messages. Reset cleared a pending test conversation; a subsequent response left exactly one answer and zero typing rows.
- Request log recorded four POSTs: multi-tenancy question, forced error, delayed request, database/isolation question. The last request had conversationId:null after reset. This verifies transport/state, not real OpenAI or Supabase integration.
- Desktop 1440×900 sample reply passed. Mobile embedded 390×844 header clientWidth/scrollWidth both 330px and draft retained; 320×640 pop-out header clientWidth/scrollWidth both 308px, one answer, no extra typing row. Captured browser warning/error log was empty at the final check. Physical-device keyboard behavior remains unverified.
- Both repositories git diff --check passed. Restored only build-generated tracked dist/index.html. Preserved prior source/style changes and existing widget .DS_Store change. No commits, deployment, migrations, or production-data writes.

### Highest-value next batch

1. Establish a designated non-production RAG backend with seeded Anchor documents and answer-relevance tests. Assert actual endpoint traffic, source citations, refusal without context, and rate/error behavior before marketing it as live proof.
2. Add negative tenant/conversation tests before stronger security claims. Current chat.ts accepts a supplied conversationId and inserts via a service-role client without an explicit ownership lookup in that handler. This is a source-derived risk, not a demonstrated production exploit. Also audit the global browser conversation-id key and public-demo configuration. No security boundary was weakened in this batch.
3. Define Pro's measurable delivery scope and acceptance criteria before changing the tier or price. For example, agree which deployment validation, ingestion verification, and handover are actually included. Do not invent certifications, customer logos, or service commitments to make the page stronger.

Rollback this repair by reverting its widget/source-copy edits, retaining the earlier route/loading/mobile changes where desired. Added files are tests/demo.test.mjs and public/security-implementation.md plus this report section. No saved-data migration is required. Production remains unchanged until separately authorized publication of both site and widget.
