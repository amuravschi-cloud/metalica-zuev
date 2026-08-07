import React from 'react';
import { Phone, MessageSquare, Clock, MapPin, Mail } from 'lucide-react';

export default function DirectContactSection() {
  return (
    <section className="section" id="contact" style={{ background: '#F4F7F5' }}>
      <div className="container">
        <div className="direct-action-card">
          <h2>Нужен металлопрокат? Свяжитесь с нами прямо сейчас.</h2>
          <p>
            Дежурный отдел продаж проконсультирует по наличию на базах, забронирует объём под ваш проект и согласует удобную доставку по Молдове.
          </p>

          <div className="direct-action-buttons">
            <a href="tel:+37368471530" className="btn btn-brand" style={{ padding: '18px 36px', fontSize: '17px' }}>
              <Phone size={22} /> Позвонить: +373 68 47-15-30
            </a>

            <a 
              href="https://wa.me/37368471530" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-whatsapp" 
              style={{ padding: '18px 36px', fontSize: '17px' }}
            >
              <MessageSquare size={22} /> Написать в WhatsApp ↗
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginTop: '40px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.12)', fontSize: '14px', color: '#D1E5DC' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} color="#4ADE80" /> График работы баз: Пн–Пт · 08:00 – 17:00
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} color="#4ADE80" /> Городской отдел: +373 22 47-15-30
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} color="#4ADE80" /> E-mail: info@mz.md
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
