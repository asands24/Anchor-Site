import React, { useEffect } from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout title="Request a Pilot" lastUpdated={new Date().toLocaleDateString()}>
            <SEO
                title="Contact Us"
                description="Request a dedicated pilot environment for Anchor AI support copilot. Contact our team about enterprise deployment, architecture questions, and implementation support."
                url="https://anchor-site.netlify.app/contact"
            />
            <p className="lead text-xl text-anchor-blue-100 mb-8">
                Ready to evaluate Anchor for your organization? We can provision a dedicated environment for your team.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="mt-0">Get in Touch</h2>
                    <p>
                        Whether you have technical questions about the architecture or want to discuss a pilot deployment, our team is here to help.
                    </p>
                    <p>
                        For pilot requests, please include:
                    </p>
                    <ul>
                        <li>Your Company Name</li>
                        <li>Estimated Team Size</li>
                        <li>Primary Use Case</li>
                    </ul>
                </div>

                <div className="bg-anchor-blue-900/20 p-8 rounded-xl border border-anchor-slate/10">
                    <h3 className="text-white text-lg font-semibold mb-6">Contact Information</h3>

                    <div className="space-y-6">
                        <div>
                            <div className="text-xs uppercase tracking-wider text-anchor-slate/50 font-bold mb-1">Email</div>
                            <a href="mailto:hello@example.com" className="text-xl text-anchor-blue-300 hover:text-white transition-colors font-medium flex items-center gap-2">
                                <span>hello@example.com</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>

                        <div>
                            <div className="text-xs uppercase tracking-wider text-anchor-slate/50 font-bold mb-1">GitHub</div>
                            <a href="https://github.com/example/anchor" target="_blank" rel="noopener noreferrer" className="text-lg text-anchor-slate/80 hover:text-white transition-colors">
                                github.com/example/anchor
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-anchor-slate/10">
                        <p className="text-sm text-anchor-slate/60">
                            Note: As this is a reference implementation, responses may be best effort based on maintainer availability.
                        </p>
                    </div>
                </div>
            </div>
        </LegalLayout>
    );
};
