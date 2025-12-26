import React, { useEffect, useRef } from 'react';
import { OceanShell } from '../components/OceanShell';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { Features } from '../components/Features';
import { Architecture } from '../components/Architecture';
import { DeveloperSection } from '../components/DeveloperSection';
import { LiveDemo } from '../components/LiveDemo';
import { Security as SecuritySection } from '../components/Security'; // Renamed to avoid confusion with the page
import { Pricing } from '../components/Pricing';
import { Footer } from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
    const location = useLocation();
    const isInitialMount = useRef(true);

    useEffect(() => {
        // Only handle scroll on initial mount to prevent scroll jumps
        if (isInitialMount.current) {
            isInitialMount.current = false;

            // On initial load, only scroll to top if there's no hash
            // Hash navigation should only work when user explicitly clicks a link, not on page load
            if (!location.hash) {
                window.scrollTo(0, 0);
            }
        }
    }, [location]);

    return (
        <OceanShell>
            <SEO
                title="Anchor | Enterprise AI Support Copilot - Multi-Tenant Architecture"
                description="Production-ready AI support copilot with secure multi-customer architecture, embeddable chat widgets, and complete admin observability. Built on PostgreSQL, OpenAI, and TypeScript."
                url="https://anchor-site.netlify.app/"
            />
            <Navbar />
            <Hero />
            <TrustBar />
            <Features />
            <Architecture />
            <DeveloperSection />
            <LiveDemo />
            <SecuritySection />
            <Pricing />
            <Footer />
        </OceanShell>
    );
};
