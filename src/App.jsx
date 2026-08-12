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
      {/* Top Scroll Indicator */}
      <motion.div 
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #064E3B 0%, #047857 50%, #D97706 100%)',
          transformOrigin: '0%',
          zIndex: 1000,
          boxShadow: '0 0 12px rgba(6, 78, 59, 0.4)'
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
