import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Award, Building2, CheckCircle2 } from 'lucide-react';
import { RebarSchematic } from './TechnicalSchematics';

export default function Hero() {
  return (
    <>
      <section className="hero-metallic" id="top">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-tag">
                <ShieldCheck size={16} color="#4ADE80" /> Поставщик №1 металлопроката в Молдове с 1995 года
              </div>
              
              <h1>
                Металл для <em>масштабных</em> проектов любой сложности.
              </h1>

              <p className="hero-lead">
                Самый большой складской ассортимент в Молдове: 450+ позиций проката на 3-х действующих открытых металлобазах и логистическом хабе. 
                Прямые заводские контракты, комплектация по ведомостям VOR, резка в размер и собственная доставка.
              </p>

              <div className="hero-actions">
                <a href="tel:+37368471530" className="btn btn-brand" style={{ padding: '16px 32px', fontSize: '16px' }}>
                  <Phone size={20} /> Позвонить в отдел продаж
                </a>

                <a 
                  href="https://wa.me/37368471530" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-whatsapp" 
                  style={{ padding: '16px 28px', fontSize: '16px' }}
                >
                  <MessageSquare size={20} /> Написать в WhatsApp ↗
                </a>
              </div>

              <div className="hero-stats-row">
                <div className="stat-item">
                  <strong>30+ лет</strong>
                  <span>надежной работы в Молдове</span>
                </div>
                <div className="stat-item">
                  <strong>450+</strong>
                  <span>позиций проката в наличии</span>
                </div>
                <div className="stat-item">
                  <strong>3+1</strong>
                  <span>металлобазы и лог-хаб</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-schematic-card">
                <div className="hero-schematic-header">
                  <span>ИНЖЕНЕРНАЯ СПЕЦИФИКАЦИЯ</span>
                  <span style={{ color: '#4ADE80' }}>ГОСТ 34028 / А500С</span>
                </div>
                <div style={{ height: '320px', background: '#0F2C22' }}>
                  <RebarSchematic />
                </div>
                <div style={{ padding: '18px 20px', background: 'rgba(0,0,0,0.4)', fontSize: '13px', color: '#D1E5DC', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#4ADE80" /> Гарантия геометрии, допусков и марки стали
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Animated Ticker */}
      <div className="ticker-strip" aria-label="Категории проката">
        <div className="ticker-track">
          <div className="ticker-item">АРМАТУРА А500С / А400 <span>◆</span></div>
          <div className="ticker-item">ТРУБА ПРОФИЛЬНАЯ И КРУГЛАЯ <span>◆</span></div>
          <div className="ticker-item">ЛИСТОВОЙ ПРОКАТ Г/К И Х/К <span>◆</span></div>
          <div className="ticker-item">ДВУТАВРОВАЯ БАЛКА <span>◆</span></div>
          <div className="ticker-item">ШВЕЛЛЕР И УГОЛОК <span>◆</span></div>
          <div className="ticker-item">СЕТКА СВАРНАЯ И КАТАНКА <span>◆</span></div>
          <div className="ticker-item">РЕЗКА В РАЗМЕР И КРАНЫ <span>◆</span></div>
          {/* Loop */}
          <div className="ticker-item">АРМАТУРА А500С / А400 <span>◆</span></div>
          <div className="ticker-item">ТРУБА ПРОФИЛЬНАЯ И КРУГЛАЯ <span>◆</span></div>
          <div className="ticker-item">ЛИСТОВОЙ ПРОКАТ Г/К И Х/К <span>◆</span></div>
          <div className="ticker-item">ДВУТАВРОВАЯ БАЛКА <span>◆</span></div>
          <div className="ticker-item">ШВЕЛЛЕР И УГОЛОК <span>◆</span></div>
          <div className="ticker-item">СЕТКА СВАРНАЯ И КАТАНКА <span>◆</span></div>
        </div>
      </div>
    </>
  );
}
