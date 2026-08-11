import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import CompanyOverview from './components/CompanyOverview';
import Capabilities from './components/Capabilities';
import BasesMap from './components/BasesMap';
import DirectContactSection from './components/DirectContactSection';
import Footer from './components/Footer';
import FloatingBar from './components/FloatingBar';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-wrapper">
      {/* Top Metallic Motion Progress Indicator */}
      <motion.div 
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #059669, #34D399, #F59E0B)',
          transformOrigin: '0%',
          zIndex: 1000,
          boxShadow: '0 0 10px #34D399'
        }}
      />

      <Header />
      <main>
        <Hero />
        <ProductCatalog />
        <CompanyOverview />
        <Capabilities />
        <BasesMap />
        <DirectContactSection />
      </main>
      <Footer />
      <FloatingBar />
    </div>
  );
}
