# Security implementation and limits

Anchor is a source-code implementation you deploy and operate. This documentation describes code mechanisms, not an independent audit or compliance certification.

## Tenant access

The core uses Supabase PostgreSQL. User-scoped database policies compare tenant_id with the authenticated user's profile. Backend chat retrieval passes a tenant identifier to search_knowledge_chunks. Shared system knowledge is also eligible for retrieval.

Service-role clients bypass row-level security. Those operations require explicit authorization and tenant filtering. A compromised privileged backend is outside the protection provided by RLS alone.

Read the [implementation reference](/security-implementation.md) for policy examples and exact repository paths.

## Provider data and secrets

Keep OPENAI_API_KEY and SUPABASE_SERVICE_ROLE_KEY on the server. Public Supabase client keys are intended for browser use, with appropriately configured RLS. AI-mode requests send the question and retrieved context through the backend to OpenAI. Provider training and retention terms depend on your account and configuration.

## Before production use

Verify tenant access, conversation ownership, allowed origins, public-demo configuration, rate limits, retention, and secret handling. The public sample mode does not demonstrate these backend controls. Cross-tenant negative tests and an independent review are required to substantiate deployment-specific security claims.

No SOC 2, HIPAA, GDPR certification, SSO implementation, zero-retention agreement, or penetration test is established by this repository review.
