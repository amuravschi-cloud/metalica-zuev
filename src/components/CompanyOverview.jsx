import React from 'react';
import { ShieldCheck, Award, Truck, Phone, MessageSquare } from 'lucide-react';

export default function CompanyOverview() {
  return (
    <section className="section-industrial" id="company" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <span className="section-tag-industrial">О компании Metalica Zuev</span>
            <h2 style={{ fontSize: '38px', fontWeight: '800', margin: '14px 0 20px 0', color: 'var(--text-dark)' }}>
              Надёжный поставщик металлопроката с 1995 года
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
              <strong style={{ color: 'var(--text-dark)' }}>Metalica Zuev SRL</strong> — крупнейший и опытнейший поставщик чёрного металлопроката в Республике Молдова. Более 30 лет мы обеспечиваем крупнейшие строительные и промышленные объекты надежным материалом прямо с заводов.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>
              Мы соединяем самый широкий складской ассортимент в стране (450+ позиций в наличии) с собственным парком козловых кранов, оборудованием для резки и оперативной доставкой.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:+37368471530" className="btn-industrial btn-brand-green">
                <Phone size={16} /> Связаться с отделом продаж
              </a>
              <a href="viber://chat?number=%2B37368471530" className="btn-industrial btn-viber-industrial">
                <MessageSquare size={16} /> Написать в Viber ↗
              </a>
            </div>
          </div>

          {/* REAL INDUSTRIAL STEEL CUTTING PHOTO */}
          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--border-light)' }}>
            <img 
              src="./images/steel_cutting.jpg" 
              alt="High Precision Metal Cutting" 
              style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', bottom: 0, inset: 'auto 0 0 0', background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.9) 100%)', padding: '24px', color: '#FFFFFF' }}>
              <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '800' }}>Металлообработка и Резка в Размер</h4>
              <p style={{ fontSize: '13px', color: '#CBD5E1', marginTop: '4px' }}>Лентопильные и плазменные станки непосредственно на складских объектах</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
