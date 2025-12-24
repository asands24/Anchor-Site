import React, { useEffect } from 'react';
import { OceanShell } from '../components/OceanShell';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { Features } from '../components/Features';
import { Architecture } from '../components/Architecture';
import { DeveloperSection } from '../components/DeveloperSection';
import { LiveDemo } from '../components/LiveDemo';
import { Security as SecuritySection } from '../components/Security'; // Renamed to avoid confusion with the page
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { useLocation } from 'react-router-dom';

export const Home: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Anchor | Enterprise AI Support Copilot - Multi-Tenant Architecture';

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Production-ready AI support copilot with secure multi-customer architecture, embeddable chat widgets, and complete admin observability. Built on PostgreSQL, OpenAI, and TypeScript.');
        }

        // Handle hash navigation manually since we are using a Router now
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <OceanShell>
            <Navbar />
            <Hero />
            <TrustBar />
            <Features />
            <Architecture />
            <DeveloperSection />
            <LiveDemo />
            <SecuritySection />
            <CTA />
            <Footer />
        </OceanShell>
    );
};
