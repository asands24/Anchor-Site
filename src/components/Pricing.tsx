import React, { useState } from 'react';
import { StripeBuyButton } from './billing/StripeBuyButton';

export const Pricing: React.FC = () => {
    const [showStarterCheckout, setShowStarterCheckout] = useState(false);
    const [showProCheckout, setShowProCheckout] = useState(false);
    const [showSupportCheckout, setShowSupportCheckout] = useState(false);

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            {/* Background gradient similar to other sections if needed, or rely on OceanShell background */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to drop anchor?</h2>
                    <p className="text-lg text-anchor-slate">
                        Choose the Anchor license that fits your rollout, with optional support once you are live.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-anchor-blue-800/20 border border-anchor-blue-500/20 rounded-lg p-6 text-left hover:border-anchor-blue-500/40 transition-all">
                        <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                        <p className="text-anchor-blue-300 text-sm mb-4">Commercial license · You own the code</p>
                        <div className="text-3xl font-bold text-anchor-blue-400 mb-4">
                            $3,000
                            <span className="text-sm text-anchor-slate font-normal block">one-time</span>
                        </div>
                        <ul className="space-y-2 text-anchor-slate text-sm mb-6">
                            <li className="flex items-start">
                                <span className="text-anchor-blue-500 mr-2">✓</span>
                                Full Anchor source code
                            </li>
                            <li className="flex items-start">
                                <span className="text-anchor-blue-500 mr-2">✓</span>
                                Multi-tenant RAG backend
                            </li>
                            <li className="flex items-start">
                                <span className="text-anchor-blue-500 mr-2">✓</span>
                                Embeddable widget
                            </li>
                            <li className="flex items-start">
                                <span className="text-anchor-blue-500 mr-2">✓</span>
                                Ingestion CLI
                            </li>
                            <li className="flex items-start">
                                <span className="text-anchor-blue-500 mr-2">✓</span>
                                Admin + logs
                            </li>
                        </ul>
                        <div className="text-xs uppercase tracking-wider text-anchor-slate/70 font-semibold mb-3">
                            Secure Stripe checkout · One-time payment
                        </div>
                        {!showStarterCheckout ? (
                            <button
                                onClick={() => setShowStarterCheckout(true)}
                                className="w-full py-3 rounded-md bg-anchor-blue-500 text-anchor-blue-900 font-bold hover:bg-anchor-blue-400 transition-all shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:shadow-[0_0_25px_rgba(100,255,218,0.5)]"
                            >
                                Select Starter
                            </button>
                        ) : (
                            <StripeBuyButton
                                buyButtonId={import.meta.env.VITE_STRIPE_BUY_BTN_STARTER}
                                publishableKey={import.meta.env.VITE_STRIPE_KEY_STARTER}
                            />
                        )}
                    </div>

                    <div className="bg-anchor-blue-700/30 border-2 border-anchor-blue-500 rounded-lg p-6 text-left relative shadow-[0_0_30px_rgba(100,255,218,0.2)]">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-anchor-blue-500 text-anchor-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                            PRO
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                        <p className="text-anchor-blue-300 text-sm mb-4">License + setup · You own the code</p>
                        <div className="text-3xl font-bold text-anchor-blue-400 mb-4">
                            $6,000
                            <span className="text-sm text-anchor-slate font-normal block">one-time</span>
                        </div>
                        <ul className="space-y-2 text-anchor-slate text-sm mb-6">
                            <li className="flex items-start">
                                <span className="text-anchor-blue-500 mr-2">✓</span>
                                Everything in Starter
                            </li>
                            <li className="flex items-start">
                                <span className="text-anchor-blue-500 mr-2">✓</span>
                                Guided setup session
                            </li>
                            <li className="flex items-start">
                                <span className="text-anchor-blue-500 mr-2">✓</span>
                                Deployment checklist
                            </li>
                        </ul>
                        <div className="text-xs uppercase tracking-wider text-anchor-slate/70 font-semibold mb-3">
                            Secure Stripe checkout
                        </div>
                        {!showProCheckout ? (
                            <button
                                onClick={() => setShowProCheckout(true)}
                                className="w-full py-3 rounded-md bg-anchor-blue-500 text-anchor-blue-900 font-bold hover:bg-anchor-blue-400 transition-all shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:shadow-[0_0_25px_rgba(100,255,218,0.5)]"
                            >
                                Select Pro
                            </button>
                        ) : (
                            <StripeBuyButton
                                buyButtonId={import.meta.env.VITE_STRIPE_BUY_BTN_PRO}
                                publishableKey={import.meta.env.VITE_STRIPE_KEY_PRO}
                            />
                        )}
                    </div>

                    <div className="bg-anchor-blue-800/20 border border-anchor-blue-500/20 rounded-lg p-6 text-left hover:border-anchor-blue-500/40 transition-all">
                        <h3 className="text-2xl font-bold text-white mb-2">Optional Support</h3>
                        <p className="text-anchor-blue-300 text-sm mb-4">Available after purchase</p>
                        <div className="text-3xl font-bold text-anchor-blue-400 mb-4">
                            $350–$750
                            <span className="text-sm text-anchor-slate font-normal block">per month</span>
                        </div>
                        <ul className="space-y-2 text-anchor-slate text-sm mb-6">
                            <li className="flex items-start">
                                <span className="text-anchor-blue-500 mr-2">✓</span>
                                Monthly architecture office hours
                            </li>
                            <li className="flex items-start">
                                <span className="text-anchor-blue-500 mr-2">✓</span>
                                Priority email support
                            </li>
                            <li className="flex items-start">
                                <span className="text-anchor-blue-500 mr-2">✓</span>
                                Upgrade guidance
                            </li>
                        </ul>
                        <div className="text-xs uppercase tracking-wider text-anchor-slate/70 font-semibold mb-3">
                            Secure Stripe checkout · Monthly
                        </div>
                        {!showSupportCheckout ? (
                            <button
                                onClick={() => setShowSupportCheckout(true)}
                                className="w-full py-3 rounded-md bg-anchor-blue-600/30 border border-anchor-blue-500/40 text-anchor-blue-400 font-bold hover:bg-anchor-blue-600/50 hover:border-anchor-blue-500/60 transition-all"
                            >
                                Subscribe to Support
                            </button>
                        ) : (
                            <StripeBuyButton
                                buyButtonId={import.meta.env.VITE_STRIPE_BUY_BTN_SUPPORT}
                                publishableKey={import.meta.env.VITE_STRIPE_KEY_SUPPORT}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
