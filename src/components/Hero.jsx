import React from 'react';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Award, Building2, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <section className="hero-metallic" id="top">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-tag">
                <ShieldCheck size={16} color="#4ADE80" /> Прямые поставки металлопроката по всей Молдове
              </div>
              
              <h1>
                Металл для <em>масштабных</em> проектов любой сложности.
              </h1>

              <p className="hero-lead">
                Самый большой складской ассортимент в Республике Молдова: 450+ позиций чёрного проката в наличии на 3-х действующих металлобазах и логистическом хабе. 
                Прямые заводские поставки, резка в размер и отгрузка козловыми кранами под ваш график.
              </p>

              <div className="hero-actions">
                <a href="tel:+37368471530" className="btn btn-brand" style={{ padding: '16px 32px', fontSize: '16px' }}>
                  <Phone size={20} /> Позвонить отделу продаж
                </a>

                <a 
                  href="viber://chat?number=%2B37368471530" 
                  className="btn btn-viber" 
                  style={{ padding: '16px 28px', fontSize: '16px' }}
                >
                  <MessageSquare size={20} /> Написать в Viber ↗
                </a>
              </div>

              <div className="hero-stats-row">
                <div className="stat-item">
                  <strong>30+ лет</strong>
                  <span>лидерства в Молдове</span>
                </div>
                <div className="stat-item">
                  <strong>450+</strong>
                  <span>позиций в наличии</span>
                </div>
                <div className="stat-item">
                  <strong>3+1</strong>
                  <span>базы и лог-хаб</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-showcase-card">
                <div className="hero-showcase-header">
                  <h3>Metalica Zuev SRL</h3>
                  <p>Официальный поставщик проката с 1995 года</p>
                </div>

                <div className="hero-feature-list">
                  <div className="hero-feature-item">
                    <CheckCircle2 size={18} color="#4ADE80" /> Самый крупный складской запас в стране
                  </div>
                  <div className="hero-feature-item">
                    <CheckCircle2 size={18} color="#4ADE80" /> 100% сертификация металлопроката ГОСТ / EN
                  </div>
                  <div className="hero-feature-item">
                    <CheckCircle2 size={18} color="#4ADE80" /> Погрузка heavy-duty козловыми кранами
                  </div>
                  <div className="hero-feature-item">
                    <CheckCircle2 size={18} color="#4ADE80" /> Высокоточная лентопильная & газовая резка
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  <a href="tel:+37368471530" className="btn btn-brand" style={{ padding: '10px', fontSize: '13px' }}>
                    <Phone size={14} /> +373 68 47-15-30
                  </a>
                  <a href="viber://chat?number=%2B37368471530" className="btn btn-viber" style={{ padding: '10px', fontSize: '13px' }}>
                    <MessageSquare size={14} /> Viber ↗
                  </a>
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
