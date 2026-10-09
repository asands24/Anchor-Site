import React, { useEffect } from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { SEO } from '../components/SEO';
import { BOOKING_URL, CONTACT_EMAIL } from '../lib/offer';

export const Security: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout title="How we protect your data">
            <SEO
                title="Security & privacy"
                description="How Anchor keeps each business's content private, how AI providers handle your data, and what you control."
                url="https://anchor-widget.com/security"
            />
            <h2>Your content is private to your business</h2>
            <p>
                Every business gets its own workspace. Each document, conversation and search is tagged to that workspace, and
                the database itself enforces that your assistant can only read your content. Another Anchor customer's assistant can never see it.
            </p>

            <h2>We never train AI on your data</h2>
            <p>
                Answers are written by OpenAI's business API. OpenAI does not use API data to train its models by default and may keep
                requests for up to 30 days for abuse monitoring. Anchor itself does not train models on your content or your customers' conversations.
            </p>

            <h2>Only you decide where the assistant appears</h2>
            <p>
                We lock each assistant to your website's address, so it can't be copied onto someone else's site. We can switch it off instantly at your request.
            </p>

            <h2>What we store</h2>
            <ul>
                <li><strong>Your content:</strong> the pages and documents you ask us to load.</li>
                <li><strong>Conversations:</strong> questions and answers, so we can improve accuracy and send your monthly report.</li>
                <li><strong>We don't ask visitors for</strong> names, emails or payment details.</li>
            </ul>

            <h2>Deleting your data</h2>
            <p>
                Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we'll delete your content and conversation history. When you cancel, we delete it.
            </p>

            <h2>Keys and infrastructure</h2>
            <p>
                AI and database keys are kept on the server and never reach the browser. Admin tools require a separate key. Data is stored
                with Supabase (PostgreSQL) and the service runs on Netlify; both encrypt data in transit.
            </p>

            <h2>For technical reviewers</h2>
            <p>
                The <a href="/security-implementation.md">implementation reference</a> covers isolation policies, key handling and how to verify a deployment.
                Anchor has not completed a third-party audit such as SOC 2; if your industry requires one, tell us on the call.
            </p>

            <div className="mt-8 p-6 rounded-lg bg-anchor-blue-900/40 border border-anchor-blue-500/20 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Questions about your situation?</h3>
                <a href={BOOKING_URL} className="inline-block mt-2 px-6 py-3 rounded-md bg-anchor-blue-500 text-anchor-blue-900 font-bold no-underline">Book a setup call</a>
            </div>
        </LegalLayout>
    );
};
