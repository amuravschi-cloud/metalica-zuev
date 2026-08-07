import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecCalculator from './components/SpecCalculator';
import ProductCatalog from './components/ProductCatalog';
import Capabilities from './components/Capabilities';
import BasesMap from './components/BasesMap';
import Footer from './components/Footer';
import ManagerModal from './components/ManagerModal';
import FloatingBar from './components/FloatingBar';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handleOpenModal = (title = 'Запросить точный расчёт со скидкой') => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <div className="app-wrapper">
      <Header onOpenModal={handleOpenModal} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <SpecCalculator onOpenModal={handleOpenModal} />
        <ProductCatalog onOpenModal={handleOpenModal} />
        <Capabilities onOpenModal={handleOpenModal} />
        <BasesMap onOpenModal={handleOpenModal} />
      </main>
      <Footer onOpenModal={handleOpenModal} />
      <FloatingBar onOpenModal={handleOpenModal} />

      <ManagerModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialTitle={modalTitle} 
      />
    </div>
  );
}
