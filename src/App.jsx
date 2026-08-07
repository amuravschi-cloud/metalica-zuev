import React from 'react';
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
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Catalog IMMEDIATELY after Hero */}
        <ProductCatalog />

        {/* 3. Company Overview */}
        <CompanyOverview />

        {/* 4. Capabilities & Services */}
        <Capabilities />

        {/* 5. Bases Locations Map */}
        <BasesMap />

        {/* 6. Direct Contact CTA */}
        <DirectContactSection />
      </main>
      <Footer />
      <FloatingBar />
    </div>
  );
}
