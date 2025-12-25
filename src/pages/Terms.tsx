import React, { useEffect } from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { SEO } from '../components/SEO';

export const Terms: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout title="Terms of Use" lastUpdated={new Date().toLocaleDateString()}>
            <SEO
                title="Terms of Use"
                description="Terms of use for Anchor AI support copilot demo. Review acceptable use, service nature, and liability information for our reference implementation."
                url="https://anchor-site.netlify.app/terms"
            />
            <p className="lead">
                Welcome to the Anchor reference implementation demo. By accessing or using this website, you agree to be bound by these Terms of Use.
            </p>

            <h2>1. Nature of Service</h2>
            <p>
                Anchor is provided as a <strong>reference implementation</strong> and self-hosted architecture pattern.
                This hosted version is a public demonstration intended for evaluation and educational purposes only.
            </p>
            <p>
                <strong>No Warranty:</strong> The service is provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, whether express, implied, or statutory.
                We do not guarantee uptime, data persistence, or specific performance levels.
            </p>

            <h2>2. Acceptable Use</h2>
            <p>
                You agree to use this demo responsibly. You must not:
            </p>
            <ul>
                <li>Use the service for any illegal purpose.</li>
                <li>Attempt to bypass security measures, rate limits, or tenant isolation mechanisms.</li>
                <li>Input content that is unlawful, harmful, threatening, or otherwise objectionable.</li>
                <li>Launch automated attacks or high-volume traffic against the demo infrastructure.</li>
            </ul>

            <h2>3. Limitation of Liability</h2>
            <p>
                To the maximum extent permitted by law, the maintainers and contributors of Anchor shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use or inability to use this demo.
            </p>

            <h2>4. Self-Hosted Deployments</h2>
            <p>
                If you choose to deploy the Anchor code in your own environment, you are solely responsible for that deployment.
                You assume all liability for security, compliance, and service level agreements (SLAs) associated with your self-hosted instance.
            </p>

            <h2>5. Changes to Terms</h2>
            <p>
                We reserve the right to modify these terms at any time. Continued use of the demo constitutes acceptance of updated terms.
            </p>

            <h2>6. Contact</h2>
            <p>
                Questions about these terms? Reach out via our <a href="/contact">contact page</a>.
            </p>
        </LegalLayout>
    );
};
