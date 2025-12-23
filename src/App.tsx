import CTA from './components/CTA';
import DevSection from './components/DevSection';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LiveDemo from './components/LiveDemo';
import Navbar from './components/Navbar';
import OceanShell from './components/OceanShell';
import Security from './components/Security';
import TrustBar from './components/TrustBar';

const App = () => {
  return (
    <OceanShell>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <DevSection />
        <LiveDemo />
        <Security />
        <CTA />
      </main>
      <Footer />
    </OceanShell>
  );
};

export default App;
