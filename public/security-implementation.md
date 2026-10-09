# Anchor security implementation reference

Reviewed source: Anchor-Core repository, October 8, 2026. This is an implementation excerpt, not an audit or a claim that the deployed database matches these files.

## Evidence you can inspect in the licensed source

- netlify/functions/utils/supabase.ts: createServiceClient uses Supabase's HTTP SDK and a service-role key; its comment explicitly notes that the key bypasses RLS.
- netlify/functions/chat.ts: authenticated requests resolve user/tenant context; retrieval calls search_knowledge_chunks with filter_tenant_id.
- supabase/migrations/009_search_knowledge_chunks.sql: retrieval includes matching tenant_id OR tenant_id IS NULL (shared system knowledge).
- supabase/migrations/008_knowledge_ops.sql: example tenant policy on knowledge_search_events:

```sql
CREATE POLICY "Users can view search events in their tenant"
  ON knowledge_search_events FOR SELECT
  USING (
    tenant_id = (SELECT tenant_id FROM profiles WHERE user_id = auth.uid())
  );
```

This example covers search events, not every database table. Review the complete policies before deployment.

## Limits and required verification

Service-role operations bypass RLS. Authorization, tenant filtering, and conversation ownership must be verified separately. Public demo requests can use a shared demo tenant. RLS does not guarantee isolation after a privileged server compromise.

Test authorized access and cross-tenant denial with designated test accounts, including conversation IDs, shared knowledge, admin endpoints, and unauthenticated requests. Verify deployed schema/policies, provider retention terms, allowed origins, rate limits, and server-only secrets. No independent audit or certification is claimed.
