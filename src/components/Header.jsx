import React from 'react';
import { Phone, MessageSquare, Clock, MapPin, ShieldCheck } from 'lucide-react';

export default function Header() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isOpenNow = day >= 1 && day <= 5 && hour >= 8 && hour < 17;

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-announcement-industrial">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <span className="status-badge-industrial">
              <span className="status-dot-industrial"></span>
              {isOpenNow ? 'Металлобазы открыты · Прямая отгрузка кранами' : 'Заявки 24/7 · Погрузка Пн–Пт 08:00–17:00'}
            </span>

            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} color="#34D399" /> Режим: Пн–Пт 08:00–17:00
            </span>

            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color="#34D399" /> 3 Базы + Складской Хаб в Молдове
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="viber://chat?number=%2B37368471530" 
              style={{ color: '#C4B5FD', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700' }}
            >
              <MessageSquare size={14} /> Viber: +373 68 47-15-30
            </a>

            {/* Version switcher */}
            <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 'var(--radius-full)', gap: '4px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
              <a href="../v1/" style={{ color: '#CBD5E1', textDecoration: 'none', padding: '2px 6px' }}>v1</a>
              <a href="../v2/" style={{ color: '#CBD5E1', textDecoration: 'none', padding: '2px 6px' }}>v2</a>
              <a href="../" style={{ color: '#FFFFFF', background: 'var(--brand-green)', fontWeight: '700', textDecoration: 'none', padding: '2px 6px', borderRadius: 'var(--radius-full)' }}>v3 Heavy Steel</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Corporate Header */}
      <header className="header-industrial">
        <div className="container header-inner-industrial">
          <a href="#top" className="brand-logo-industrial">
            <div className="brand-icon-industrial">MZ</div>
            <div className="brand-text-industrial">
              <b>METALICA ZUEV</b>
              <small>Металлопрокат и комплексные поставки</small>
            </div>
          </a>

          <nav className="nav-industrial">
            <a href="#catalog">Каталог металлопроката</a>
            <a href="#company">О компании</a>
            <a href="#capabilities">Сервис & Резка</a>
            <a href="#bases">Металлобазы</a>
            <a href="#contact">Контакты</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="tel:+37368471530" className="btn-industrial btn-brand-green" style={{ padding: '11px 20px', fontSize: '14px' }}>
              <Phone size={16} /> +373 68 47-15-30
            </a>

            <a href="viber://chat?number=%2B37368471530" className="btn-industrial btn-viber-industrial" style={{ padding: '11px 18px', fontSize: '14px' }}>
              <MessageSquare size={16} /> Viber ↗
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
