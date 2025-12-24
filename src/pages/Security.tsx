import React, { useEffect } from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { Link } from 'react-router-dom';

export const Security: React.FC = () => {
    useEffect(() => {
        document.title = 'Security Architecture | Anchor - Multi-Tenant Data Isolation';

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Learn about Anchor\'s security architecture: database-level data isolation, layered security, and key management for enterprise AI support systems.');
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout title="Security Overview" lastUpdated={new Date().toLocaleDateString()}>
            <p>
                Security is a core design principle of the Anchor architecture. This page outlines the security model used in this reference implementation to ensure tenant isolation and data protection.
            </p>

            <h2>Three Layers of Isolation</h2>
            <p>
                Anchor implements defense-in-depth using three distinct layers of enforcement to prevent data leaks between tenants.
            </p>

            <h3>1. Database Layer</h3>
            <p>
                We use PostgreSQL Row Level Security as the foundational barrier. Every database query automatically filters to the authenticated user's customer ID. Even if the application code fails, the database security policies prevent unauthorized access.
            </p>

            <h3>2. Application Layer</h3>
            <p>
                Our backend services explicitly filter data retrieval and processing based on customer context. This redundancy ensures that business logic aligns with data access policies.
            </p>

            <h3>3. Frontend Layer</h3>
            <p>
                The user interface uses secure authentication tokens to scope all API requests. The frontend is aware of the user's customer context and prevents rendering or requesting data that belongs to other customers.
            </p>

            <h2>Key Management & Separation</h2>
            <p>
                Correct key management is critical for security.
            </p>
            <div className="overflow-x-auto">
                <table className="min-w-full text-left font-sm">
                    <thead>
                        <tr className="border-b border-anchor-slate/20">
                            <th className="py-2 px-4 font-semibold text-anchor-blue-200">Key Type</th>
                            <th className="py-2 px-4 font-semibold text-anchor-blue-200">Visibility</th>
                            <th className="py-2 px-4 font-semibold text-anchor-blue-200">Usage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-anchor-slate/10 text-anchor-slate/80">
                            <td className="py-2 px-4 font-mono text-sm">SUPABASE_ANON_KEY</td>
                            <td className="py-2 px-4"><span className="inline-block px-2 py-1 rounded bg-green-900/40 text-green-300 text-xs font-bold">PUBLIC</span></td>
                            <td className="py-2 px-4">Safe to expose in client-side code for initiating requests.</td>
                        </tr>
                        <tr className="border-b border-anchor-slate/10 text-anchor-slate/80">
                            <td className="py-2 px-4 font-mono text-sm">SERVICE_ROLE_KEY</td>
                            <td className="py-2 px-4"><span className="inline-block px-2 py-1 rounded bg-red-900/40 text-red-300 text-xs font-bold">PRIVATE</span></td>
                            <td className="py-2 px-4">Can bypass security policies. Must <strong>never</strong> be exposed to the client.</td>
                        </tr>
                        <tr className="text-anchor-slate/80">
                            <td className="py-2 px-4 font-mono text-sm">OPENAI_API_KEY</td>
                            <td className="py-2 px-4"><span className="inline-block px-2 py-1 rounded bg-red-900/40 text-red-300 text-xs font-bold">PRIVATE</span></td>
                            <td className="py-2 px-4">Used only in secure server-side environments (e.g., Edge Functions).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Demo Environment Security</h2>
            <p>
                For this public demo, we implement additional measures:
            </p>
            <ul>
                <li><strong>Rate Limiting:</strong> Requests are throttled to prevent abuse and denial-of-service attacks.</li>
                <li><strong>Data Minimization:</strong> We discourage entering PII and may periodically reset the database to maintain a clean state.</li>
            </ul>

            <div className="mt-8 p-6 rounded-lg bg-anchor-blue-900/40 border border-anchor-blue-500/20 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Interested in a Private Instance?</h3>
                <p className="mb-4 text-anchor-slate/80">
                    We can deploy a dedicated, single-tenant instance for your organization to evaluate safely.
                </p>
                <Link
                    to="/contact"
                    className="inline-block px-6 py-3 rounded-md bg-anchor-blue-500 text-white font-medium hover:bg-anchor-blue-400 transition-colors"
                >
                    Request a Pilot
                </Link>
            </div>
        </LegalLayout>
    );
};
