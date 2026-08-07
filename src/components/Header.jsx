import React from 'react';
import { Phone, MessageSquare, Clock, MapPin, ChevronRight } from 'lucide-react';

export default function Header() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isOpenNow = day >= 1 && day <= 5 && hour >= 8 && hour < 17;

  return (
    <>
      {/* Top Bar */}
      <div className="top-announcement">
        <div className="container top-announcement-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {isOpenNow ? (
              <span className="status-badge">
                <span className="status-dot"></span>
                Базы открыты · Отгрузка металла
              </span>
            ) : (
              <span className="status-badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#FBBF24' }}>
                <span className="status-dot" style={{ backgroundColor: '#F59E0B', boxShadow: '0 0 8px #F59E0B' }}></span>
                Приём сообщений 24/7 · Отгрузка: Пн–Пт 08:00–17:00
              </span>
            )}

            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} color="#A3D9C9" /> Пн–Пт · 08:00–17:00
            </span>

            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color="#A3D9C9" /> 3 Базы + Хаб в Молдове
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="https://wa.me/37368471530" 
              target="_blank" 
              rel="noreferrer"
              style={{ color: '#4ADE80', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700' }}
            >
              <MessageSquare size={14} /> WhatsApp: +373 68 47-15-30
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="brand-logo">
            <div className="brand-icon">MZ</div>
            <div className="brand-text">
              <b>METALICA ZUEV</b>
              <small>Металлопрокат и комплексные поставки</small>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#company">О компании</a>
            <a href="#catalog">Ассортимент</a>
            <a href="#capabilities">Оснащение баз</a>
            <a href="#bases">Локации складов</a>
            <a href="#contact">Контакты</a>
          </nav>

          <div className="header-cta-group">
            <a href="tel:+37368471530" className="btn btn-brand" style={{ padding: '10px 18px', fontSize: '13px' }}>
              <Phone size={15} /> +373 68 47-15-30
            </a>
            
            <a href="https://wa.me/37368471530" target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ padding: '10px 16px', fontSize: '13px' }}>
              <MessageSquare size={15} /> Написать
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
