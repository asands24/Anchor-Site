import React from 'react';

const CODE_EXAMPLE = '<script src="https://cdn.anchor.ai/widget.js"></script>\n<script>\n  SupportCopilot.init({\n    mount: "#support-copilot-mount",\n    mode: "embed",\n    tenantSlug: "demo",\n    apiUrl: "https://api.anchor.ai"\n  });\n</script>';

export const DeveloperSection: React.FC = () => {
    return (
        <section id="developers" className="py-24">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <div className="rounded-lg bg-anchor-blue-900 border border-anchor-blue-500/20 shadow-2xl overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 bg-anchor-blue-900/50 border-b border-anchor-blue-500/10">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <span className="ml-2 text-xs text-anchor-slate/50 font-mono">index.html</span>
                        </div>
                        <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
                            <code className="text-anchor-slate">
                                {CODE_EXAMPLE.split('\n').map((line, i) => (
                                    <div key={i} className="table-row">
                                        <span className="table-cell select-none text-anchor-slate/20 pr-4 text-right transform -translate-y-[1px]">{i + 1}</span>
                                        <span className="table-cell whitespace-pre text-anchor-text">
                                            {line.split(/(<[^>]+>)/g).map((part, j) => {
                                                if (part.startsWith('<')) {
                                                    return <span key={j} className="text-anchor-blue-500">{part}</span>;
                                                }
                                                // Simple highlighting
                                                if (part.includes('SupportCopilot')) {
                                                    return <span key={j} className="text-anchor-teal">{part}</span>;
                                                }
                                                return part;
                                            })}
                                        </span>
                                    </div>
                                ))}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="w-full md:w-1/2 order-1 md:order-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Everything your engineers want.
                        <br />
                        <span className="text-anchor-blue-500">Nothing they don't.</span>
                    </h2>
                    <p className="text-anchor-slate text-lg mb-8 leading-relaxed">
                        Integration is literally copy-paste. Works with React, Vue, Svelte, Angular, or plain HTML—just include one script file.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded bg-anchor-blue-800/50 flex items-center justify-center text-2xl">
                                🔒
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Type-Safe & Secure</h3>
                                <p className="text-anchor-slate">Exported TypeScript definitions for configuration. No secrets exposed on the client.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded bg-anchor-blue-800/50 flex items-center justify-center text-2xl">
                                🚀
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Modern Deployment</h3>
                                <p className="text-anchor-slate">Designed for Netlify + Supabase architectures. Edge-ready.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
