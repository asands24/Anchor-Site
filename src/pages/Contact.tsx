import React, { useEffect } from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { SEO } from '../components/SEO';
import { BOOKING_URL, CONTACT_EMAIL } from '../lib/offer';

export const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout title="Book a setup call">
            <SEO
                title="Book a setup call"
                description="Get an AI assistant on your website. Book a 20-minute setup call with Anchor."
                url="https://anchor-widget.com/contact"
            />
            <p className="lead text-xl text-anchor-blue-100 mb-8">
                20 minutes, no pressure. We'll look at your site, talk through what your customers ask, and tell you honestly whether Anchor will help.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="mt-0">What to have handy</h2>
                    <ul>
                        <li>Your website address</li>
                        <li>The 5–10 questions customers ask most</li>
                        <li>Any documents with answers (FAQ, price list, policies, PDFs)</li>
                        <li>Who customers should contact when the assistant can't help</li>
                    </ul>
                    <h2>What happens next</h2>
                    <p>
                        We build and test your assistant, then walk you through it answering your own customers' questions. Once you're happy, we install it.
                        Most businesses are live within 3 business days.
                    </p>
                </div>

                <div className="bg-anchor-blue-900/20 p-8 rounded-xl border border-anchor-slate/10">
                    <a
                        href={BOOKING_URL}
                        className="block text-center w-full py-3 rounded-md bg-anchor-blue-500 text-anchor-blue-900 font-bold no-underline hover:bg-anchor-blue-500/90 mb-8"
                    >
                        Book a setup call
                    </a>
                    <div className="text-xs uppercase tracking-wider text-anchor-slate/50 font-bold mb-1">Or email directly</div>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl text-anchor-blue-300 hover:text-white transition-colors font-medium">
                        {CONTACT_EMAIL}
                    </a>
                    <p className="text-sm text-anchor-slate/70 mt-6">
                        You'll hear back from Alex, who builds and runs Anchor, within one business day.
                    </p>
                </div>
            </div>
        </LegalLayout>
    );
};
