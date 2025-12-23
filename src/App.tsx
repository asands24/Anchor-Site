import React from 'react';
import { OceanShell } from './components/OceanShell';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Features } from './components/Features';
import { Architecture } from './components/Architecture';
import { DeveloperSection } from './components/DeveloperSection';
import { LiveDemo } from './components/LiveDemo';
import { Security } from './components/Security';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <OceanShell>
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <Architecture />
      <DeveloperSection />
      <LiveDemo />
      <Security />
      <CTA />
      <Footer />
    </OceanShell>
  );
}

export default App;
