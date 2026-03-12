import React, { useEffect } from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { SEO } from '../components/SEO';

export const Privacy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout title="Privacy Policy" lastUpdated={new Date().toLocaleDateString()}>
            <SEO
                title="Privacy Policy"
                description="Privacy policy for Anchor AI support copilot demo. Learn how we collect, process, and protect your data in our reference implementation."
                url="https://anchor-widget.com/privacy"
            />
            <p>
                Anchor is a reference implementation for a self-hosted architecture.
                This privacy policy applies to the public demo instance of Anchor available at this domain.
            </p>

            <h2>Data Collection</h2>
            <p>
                In the context of this live demo, we may collect and process the following information:
            </p>
            <ul>
                <li><strong>Chat Messages:</strong> Any text prompts or inputs you provide to the demo chat interface.</li>
                <li><strong>Usage Metrics:</strong> Basic interaction data to understand system performance and usage patterns.</li>
                <li><strong>Technical Logs:</strong> IP addresses and request metadata required for security, rate limiting, and abuse prevention.</li>
            </ul>

            <h2>Purpose of Data Processing</h2>
            <p>
                We process this data solely to:
            </p>
            <ul>
                <li>Operate availability of the public demo.</li>
                <li>Prevent abuse and ensure system stability.</li>
                <li>Improve the quality of the open-source codebase.</li>
            </ul>

            <h2>Service Providers</h2>
            <p>
                This demo allows you to interact with third-party AI models and services. The following providers act as data processors:
            </p>
            <ul>
                <li><strong>Netlify:</strong> Hosting and serverless function execution.</li>
                <li><strong>Supabase:</strong> Database hosting and authentication services.</li>
                <li><strong>OpenAI:</strong> Large Language Model (LLM) and embedding services for generating responses.</li>
            </ul>

            <h2>Data Retention</h2>
            <div className="bg-anchor-blue-900/30 border border-anchor-blue-500/30 rounded-lg p-4 my-6">
                <p className="m-0 text-anchor-blue-100 italic">
                    <strong>Note:</strong> Logs and data entered into this demo may be retained for a limited period and are subject to periodic purging or resets without notice.
                </p>
            </div>
            <p>
                We do not sell personal data. We do not use your data for advertising purposes.
            </p>

            <h2>Security & Sensitive Information</h2>
            <p>
                <strong>Do not enter sensitive, personal, or confidential information (PII, financial data, secrets) into this demo.</strong>
                This is a public demonstration environment. While we implement standard security measures, it is not intended for production usage or sensitive data processing.
            </p>

            <h2>Contact</h2>
            <p>
                For any privacy-related questions regarding this demo, please contact us at <a href="mailto:privacy@example.com">privacy@example.com</a>.
            </p>
        </LegalLayout>
    );
};
