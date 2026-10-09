import React, { useEffect, useRef } from 'react';
import { OceanShell } from '../components/OceanShell';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { LiveDemo } from '../components/LiveDemo';
import { Pricing } from '../components/Pricing';
import { HowItWorks } from '../components/HowItWorks';
import { WhyAnchor } from '../components/WhyAnchor';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
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
                title="Anchor | AI assistant that answers your customers 24/7"
                description="Anchor adds an AI assistant to your small-business website that answers from your own FAQ, services and policies. Set up for you in 3 business days, from $199/month."
                url="https://anchor-widget.com/"
            />
            <Navbar />
            <Hero />
            <HowItWorks />
            <LiveDemo />
            <Features />
            <WhyAnchor />
            <Pricing />
            <FAQ />
            <FinalCTA />
            <Footer />
        </OceanShell>
    );
};
