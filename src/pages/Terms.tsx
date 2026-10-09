import React, { useEffect } from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { SEO } from '../components/SEO';

export const Terms: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout title="Terms" lastUpdated="October 9, 2026">
            <SEO
                title="Terms of Use"
                description="Terms for Anchor managed plans, source-code licenses, and the public demo."
                url="https://anchor-widget.com/terms"
            />
            <p className="lead">
                These terms cover the Anchor website and demo, Anchor managed plans, and Anchor source-code licenses, provided by S&amp;S Technologies ("we").
            </p>

            <h2>1. Managed plans</h2>
            <p>
                On a managed plan we host and operate an AI assistant for your website using content you provide. Plans are billed monthly and can be cancelled
                at any time; cancellation takes effect at the end of the current billing month. The one-time setup fee is non-refundable once setup work has started.
            </p>
            <p>
                You confirm you have the right to share the content you give us. You are responsible for reviewing the assistant's answers and telling us about
                anything incorrect. AI-generated answers can be wrong; the assistant is not a substitute for professional, medical, legal or financial advice,
                and you should not configure it to give such advice.
            </p>
            <p>
                We aim for high availability but do not guarantee uninterrupted service. If the assistant or an AI provider is unavailable, visitors see a message
                asking them to try again or contact you directly.
            </p>

            <h2>2. Source-code licenses</h2>
            <p>
                A source-code license grants you a non-exclusive, non-transferable right to use and modify the Anchor code for your own deployments and your
                clients' deployments. You may not resell or redistribute the code itself as a competing product. You run and maintain self-hosted deployments,
                including hosting, database and AI-provider accounts and their costs, security configuration, and upgrades when providers change their models or APIs.
                The code is provided "as is" without warranty.
            </p>

            <h2>3. The website and public demo</h2>
            <p>
                The demo assistant answers questions about Anchor. Please don't enter personal or sensitive information. You agree not to misuse the service,
                including attempting to access other customers' data, bypassing rate limits, or sending automated high-volume traffic.
            </p>

            <h2>4. Limitation of liability</h2>
            <p>
                To the maximum extent permitted by law, our total liability for any claim is limited to the amount you paid us in the three months before the
                claim, and we are not liable for indirect or consequential damages.
            </p>

            <h2>5. Changes</h2>
            <p>
                We may update these terms. For managed plans, we'll email you at least 30 days before material changes take effect.
            </p>

            <h2>6. Contact</h2>
            <p>
                Questions? Email <a href="mailto:alex@asandstech.com">alex@asandstech.com</a>.
            </p>
        </LegalLayout>
    );
};
