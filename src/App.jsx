import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import ProductCatalog from './components/ProductCatalog';
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
        <Hero />
        <CompanyOverview />
        <ProductCatalog />
        <Capabilities />
        <BasesMap />
        <DirectContactSection />
      </main>
      <Footer />
      <FloatingBar />
    </div>
  );
}
