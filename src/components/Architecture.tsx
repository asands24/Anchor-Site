import React from 'react';

export const Architecture: React.FC = () => {
    return (
        <section id="architecture" className="py-24 bg-anchor-blue-900/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-anchor-blue-500/20 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Built on a Proven Stack
                        </h2>
                        <p className="text-anchor-slate text-lg mb-8 leading-relaxed">
                            Anchor leverages industry-standard infrastructure to ensure reliability, security, and performance.
                            No experimental databases or fragile glues. Just solid engineering.
                        </p>

                        <ul className="space-y-4">
                            {[
                                { name: 'Supabase', desc: 'PostgreSQL + pgvector + RLS' },
                                { name: 'OpenAI', desc: 'LLM & Embeddings API' },
                                { name: 'Netlify Functions', desc: 'Serverless backend logic' },
                                { name: 'Typescript', desc: 'End-to-end type safety' },
                            ].map((item) => (
                                <li key={item.name} className="flex items-start gap-4">
                                    <div className="mt-1 w-5 h-5 rounded border border-anchor-blue-500/50 flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 bg-anchor-blue-500 rounded-sm" />
                                    </div>
                                    <div>
                                        <span className="block text-white font-bold">{item.name}</span>
                                        <span className="text-sm text-anchor-slate">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="relative p-8 rounded-lg bg-anchor-blue-900/80 border border-anchor-slate/20 font-mono text-sm shadow-2xl">
                            {/* Simple ASCII/Block architecture diagram */}
                            <div className="flex flex-col gap-6 text-center">

                                {/* Client Layer */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded border border-anchor-blue-500/40 bg-anchor-blue-800/20 text-anchor-blue-500">
                                        Admin Dashboard
                                    </div>
                                    <div className="p-4 rounded border border-anchor-blue-500/40 bg-anchor-blue-800/20 text-anchor-blue-500">
                                        Widget (Embed)
                                    </div>
                                </div>

                                {/* Arrow Down */}
                                <div className="text-anchor-slate">↓↓ HTTPS / REST ↓↓</div>

                                {/* Compute Layer */}
                                <div className="p-6 rounded border border-white/20 bg-anchor-blue-900 shadow-inner">
                                    <span className="absolute top-2 left-3 text-xs text-anchor-slate uppercase tracking-wider">Netlify Functions</span>
                                    <div className="grid grid-cols-1 gap-3 mt-2">
                                        <div className="py-2 px-4 rounded bg-anchor-blue-800/50 text-white">API Routes</div>
                                        <div className="py-2 px-4 rounded bg-anchor-blue-800/50 text-white">Ingestion Processor</div>
                                    </div>
                                </div>

                                {/* Arrow Down */}
                                <div className="text-anchor-slate">↓↓ TCP / Postgres Protocol ↓↓</div>

                                {/* Data Layer */}
                                <div className="p-6 rounded border border-green-500/30 bg-anchor-blue-900 shadow-[0_0_30px_rgba(74,222,128,0.05)]">
                                    <span className="absolute top-2 left-3 text-xs text-green-500/70 uppercase tracking-wider">Supabase</span>
                                    <div className="text-white font-bold text-lg mb-2">PostgreSQL</div>
                                    <div className="flex justify-center gap-2 text-xs text-anchor-slate">
                                        <span className="px-2 py-1 rounded bg-white/5">pgvector</span>
                                        <span className="px-2 py-1 rounded bg-white/5">RLS Policies</span>
                                        <span className="px-2 py-1 rounded bg-white/5">Auth</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mt-4 text-center">
                            <span className="text-xs text-anchor-slate opactiy-50 font-mono">
                                Also connects to OpenAI for Embeddings & Chat Completion
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
