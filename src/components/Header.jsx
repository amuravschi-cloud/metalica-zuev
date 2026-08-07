import React from 'react';
import { Phone, MessageSquare, Clock, MapPin, ChevronRight } from 'lucide-react';

export default function Header({ onOpenModal }) {
  // Dynamic status based on current time
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 6 is Saturday
  const hour = now.getHours();
  const isOpenNow = day >= 1 && day <= 5 && hour >= 8 && hour < 17;

  return (
    <>
      {/* Top Info Bar */}
      <div className="top-announcement">
        <div className="container top-announcement-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {isOpenNow ? (
              <span className="status-badge">
                <span className="status-dot"></span>
                Базы открыты · Краны в работе
              </span>
            ) : (
              <span className="status-badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#FBBF24' }}>
                <span className="status-dot" style={{ backgroundColor: '#F59E0B', boxShadow: '0 0 8px #F59E0B' }}></span>
                Приём заявок 24/7 · Отгрузка с 08:00
              </span>
            )}
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} color="#94A3B8" /> Пн–Пт: 08:00–17:00
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color="#94A3B8" /> 3 Металлобазы + Хаб в Молдове
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="https://wa.me/37368471530?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D1%82%D1%8C%20%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B5%20%D0%B8%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82%D0%B0."
              target="_blank" 
              rel="noreferrer"
              style={{ color: '#4ADE80', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600' }}
            >
              <MessageSquare size={14} /> WhatsApp отдел продаж
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="brand-logo">
            <div className="brand-icon">MZ</div>
            <div className="brand-text">
              <b>METALICA ZUEV</b>
              <small>Комплексный металлопрокат в Молдове</small>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#catalog">Каталог проката</a>
            <a href="#calculator">Расчёт спецификации</a>
            <a href="#capabilities">Сервис & Резка</a>
            <a href="#bases">Металлобазы</a>
            <a href="#contact">Контакты</a>
          </nav>

          <div className="header-cta-group">
            <a href="tel:+37322471530" className="header-phone">
              <span>Отдел продаж / Дежурный</span>
              <strong>+373 22 47-15-30</strong>
            </a>

            <button className="btn btn-navy" onClick={() => onOpenModal('Заказать обратный звонок')}>
              Заказать звонок <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
