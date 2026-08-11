import React from 'react';
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';

export default function DirectContactSection() {
  return (
    <section className="section-industrial" id="contact" style={{ background: '#0F172A', color: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(6, 78, 59, 0.5)', color: '#6EE7B7', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontSize: '13px', fontWeight: '700', marginBottom: '20px' }}>
            <ShieldCheck size={16} color="#34D399" /> Отдел продаж металлопроката
          </div>

          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#FFFFFF', marginBottom: '18px' }}>
            Готовы рассчитать спецификацию вашего объекта за 15 минут
          </h2>
          
          <p style={{ fontSize: '18px', color: '#CBD5E1', marginBottom: '40px', lineHeight: '1.6' }}>
            Отправьте список нужных позиций (арматура, труба, двутавр). Дежурный менеджер металлобазы проверит фактические остатки на складе и подготовит точную накладную со спецскидкой.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="tel:+37368471530" className="btn-industrial btn-brand-green" style={{ padding: '16px 36px', fontSize: '16px' }}>
              <Phone size={20} /> Позвонить: +373 68 47-15-30
            </a>

            <a 
              href="viber://chat?number=%2B37368471530" 
              className="btn-industrial btn-viber-industrial" 
              style={{ padding: '16px 32px', fontSize: '16px' }}
            >
              <MessageSquare size={20} /> Написать в Viber ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
