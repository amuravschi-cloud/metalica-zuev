import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Calculator, Award, CheckCircle } from 'lucide-react';
import { RebarSchematic } from './TechnicalSchematics';

export default function Hero({ onOpenModal }) {
  return (
    <>
      <section className="hero" id="top">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-in">
              <div className="hero-badge-tag">
                <ShieldCheck size={16} /> 30+ лет прямого импорта и поставок по Молдове
              </div>
              
              <h1>
                Металлопрокат для <em>масштабных</em> строительных проектов.
              </h1>

              <p className="hero-lead">
                450+ складских позиций проката в наличии на 3-х открытых базах и логистическом хабе. 
                Комплектация сложных ведомостей, точность нарезки в размер и крановая отгрузка под ваш график.
              </p>

              <div className="hero-actions">
                <a href="#calculator" className="btn btn-navy" style={{ padding: '14px 28px', fontSize: '15px' }}>
                  <Calculator size={18} /> Расчитать спецификацию online <ArrowRight size={18} />
                </a>

                <button 
                  className="btn btn-outline" 
                  style={{ padding: '14px 24px', fontSize: '15px' }}
                  onClick={() => onOpenModal('Запрос наличия у менеджера')}
                >
                  Уточнить наличие на складе
                </button>
              </div>

              <div className="hero-stats-row">
                <div className="stat-item">
                  <strong>30+</strong>
                  <span>лет лидерства в Молдове</span>
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

            <div className="hero-visual fade-in" style={{ animationDelay: '0.15s' }}>
              <div className="hero-visual-card">
                <div style={{ height: '340px' }}>
                  <RebarSchematic />
                </div>
                
                <div className="hero-visual-badge">
                  <div className="hero-visual-badge-info">
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle size={16} color="#4ADE80" /> Стандарты ГОСТ 34028 / А500С
                    </h4>
                    <p>Точность допусков, сертификаты заводов, прямые поставки</p>
                  </div>
                  <button 
                    className="btn btn-gold"
                    style={{ padding: '8px 14px', fontSize: '12px' }}
                    onClick={() => onOpenModal('Заказ арматуры А500С')}
                  >
                    Запросить расчёт
                  </button>
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
          <div className="ticker-item">БВАУТАВРОВАЯ БАЛКА <span>◆</span></div>
          <div className="ticker-item">ШВЕЛЛЕР И УГОЛОК <span>◆</span></div>
          <div className="ticker-item">СЕТКА СВАРНАЯ И КАТАНКА <span>◆</span></div>
          <div className="ticker-item">РЕЗКА В РАЗМЕР И КРАНЫ <span>◆</span></div>
          {/* Repeat loop for smooth continuous animation */}
          <div className="ticker-item">АРМАТУРА А500С / А400 <span>◆</span></div>
          <div className="ticker-item">ТРУБА ПРОФИЛЬНАЯ И КРУГЛАЯ <span>◆</span></div>
          <div className="ticker-item">ЛИСТОВОЙ ПРОКАТ Г/К И Х/К <span>◆</span></div>
          <div className="ticker-item">БВАУТАВРОВАЯ БАЛКА <span>◆</span></div>
          <div className="ticker-item">ШВЕЛЛЕР И УГОЛОК <span>◆</span></div>
          <div className="ticker-item">СЕТКА СВАРНАЯ И КАТАНКА <span>◆</span></div>
        </div>
      </div>
    </>
  );
}
