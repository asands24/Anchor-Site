import React from 'react';
import { OceanShell } from './OceanShell';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LegalLayoutProps {
    children: React.ReactNode;
    title: string;
    lastUpdated?: string;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ children, title, lastUpdated }) => {
    return (
        <OceanShell>
            <Navbar />
            <div className="pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-anchor-blue-200 bg-clip-text text-transparent mb-4">
                            {title}
                        </h1>
                        {lastUpdated && (
                            <p className="text-anchor-slate/60 text-sm">
                                Last updated: {lastUpdated}
                            </p>
                        )}
                        <div className="h-px w-full bg-gradient-to-r from-anchor-blue-500/50 to-transparent mt-8" />
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-anchor-blue-100 prose-a:text-anchor-blue-400 hover:prose-a:text-anchor-blue-300 prose-strong:text-white prose-code:text-anchor-blue-200 prose-code:bg-anchor-blue-900/30 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-li:text-anchor-slate/80 text-anchor-slate/80">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </OceanShell>
    );
};
