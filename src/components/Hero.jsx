import React from 'react';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Truck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <section className="hero-industrial-photo" id="top">
        <div className="container">
          <div className="hero-grid-industrial">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(6, 78, 59, 0.4)', border: '1px solid rgba(52, 211, 153, 0.3)', color: '#6EE7B7', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontSize: '13px', fontWeight: '700', marginBottom: '24px' }}>
                <ShieldCheck size={16} color="#34D399" /> Прямой поставщик стального проката в Республике Молдова
              </div>

              <h1>
                Металлопрокат <em>заводского качества</em> для стройки любой сложности.
              </h1>

              <p className="hero-lead-industrial">
                Самый большой складской резерв в стране: 450+ позиций чёрного проката в наличии на 3-х действующих металлобазах и центральном хабе. 
                Прямой импорт, сертификаты ГОСТ / EN 10025, резка в точный размер и отгрузка козловыми кранами под ваш объект.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
                <a href="tel:+37368471530" className="btn-industrial btn-brand-green" style={{ padding: '16px 32px', fontSize: '16px' }}>
                  <Phone size={20} /> Звонок отделу продаж
                </a>

                <a 
                  href="viber://chat?number=%2B37368471530" 
                  className="btn-industrial btn-viber-industrial" 
                  style={{ padding: '16px 28px', fontSize: '16px' }}
                >
                  <MessageSquare size={20} /> Запрос в Viber ↗
                </a>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', paddingTop: '28px', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '38px', fontWeight: '800', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>30+ лет</strong>
                  <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '600', marginTop: '4px', display: 'block' }}>опыта поставок в РМ</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '38px', fontWeight: '800', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>450+</strong>
                  <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '600', marginTop: '4px', display: 'block' }}>позиций в наличии</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '38px', fontWeight: '800', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>3+1</strong>
                  <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '600', marginTop: '4px', display: 'block' }}>металлобазы + хаб</span>
                </div>
              </div>
            </div>

            {/* Industrial Showcase Card */}
            <div>
              <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', backdropFilter: 'blur(16px)' }}>
                <div style={{ marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#FFFFFF' }}>Metalica Zuev SRL</h3>
                  <p style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '600', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>
                    ОФИЦИАЛЬНЫЙ ПОСТАВЩИК ПРОКАТА С 1995 ГОДА
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                  {[
                    'Крупнейший складской резерв проката в Молдове',
                    '100% сертификация качества ГОСТ / EN 10025',
                    'Погрузка heavy-duty козловыми кранами 15т',
                    'Точная плазменная и лентопильная резка'
                  ].map((text, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#FFFFFF', fontWeight: '600' }}>
                      <CheckCircle2 size={18} color="#34D399" /> {text}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  <a href="tel:+37368471530" className="btn-industrial btn-brand-green" style={{ padding: '10px', fontSize: '13px' }}>
                    <Phone size={14} /> +373 68 47-15-30
                  </a>
                  <a href="viber://chat?number=%2B37368471530" className="btn-industrial btn-viber-industrial" style={{ padding: '10px', fontSize: '13px' }}>
                    <MessageSquare size={14} /> Viber ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Ticker */}
      <div style={{ background: '#0B131F', color: '#FFFFFF', padding: '16px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div className="ticker-track">
          {[
            'АРМАТУРА А500С / А400 (Ø 8-32мм)',
            'ТРУБА ПРОФИЛЬНАЯ КВАДРАТНАЯ И ПРЯМОУГОЛЬНАЯ',
            'ЛИСТОВОЙ ПРОКАТ Г/К, Х/К, ОЦИНКОВАННЫЙ',
            'ДВУТАВРОВАЯ БАЛКА Б1 / Б2 / К1',
            'ШВЕЛЛЕР № 5U - 30U И УГОЛОК ГОСТ',
            'СЕТКА ВР-1 И ВЯЗАЛЬНАЯ ПРОВОЛОКА',
            'АРМАТУРА А500С / А400 (Ø 8-32мм)',
            'ТРУБА ПРОФИЛЬНАЯ КВАДРАТНАЯ И ПРЯМОУГОЛЬНАЯ',
            'ЛИСТОВОЙ ПРОКАТ Г/К, Х/К, ОЦИНКОВАННЫЙ',
            'ДВУТАВРОВАЯ БАЛКА Б1 / Б2 / К1',
          ].map((item, idx) => (
            <div className="ticker-item" key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '13px', fontWeight: '800', fontFamily: 'var(--font-mono)', color: '#CBD5E1', paddingRight: '36px' }}>
              {item} <span style={{ color: '#34D399' }}>◆</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
