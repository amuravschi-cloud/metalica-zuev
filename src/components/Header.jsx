import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Clock, MapPin } from 'lucide-react';

export default function Header() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isOpenNow = day >= 1 && day <= 5 && hour >= 8 && hour < 17;

  return (
    <>
      {/* Top Announcement Strip */}
      <div className="top-announcement-v4">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <span className="status-badge-v4">
              <span className="status-dot-v4"></span>
              {isOpenNow ? 'Металлобазы открыты · Прямая отгрузка кранами 15т' : 'Приём заявок 24/7 · Погрузка Пн–Пт 08:00–17:00'}
            </span>

            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#CBD5E1' }}>
              <Clock size={14} color="#34D399" /> Режим: Пн–Пт 08:00–17:00
            </span>

            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#CBD5E1' }}>
              <MapPin size={14} color="#34D399" /> 3 Базы + Складской Хаб в Молдове
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="viber://chat?number=%2B37368471530" 
              style={{ color: '#C4B5FD', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700', fontFamily: 'var(--font-mono)' }}
            >
              <MessageSquare size={14} /> Viber: +373 68 47-15-30
            </a>

            {/* Complete 5-Version Switcher */}
            <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.12)', padding: '3px 8px', borderRadius: 'var(--radius-full)', gap: '4px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
              <span style={{ color: '#94A3B8', padding: '2px 4px', fontWeight: '700' }}>Версии:</span>
              <a href="../v1/" style={{ color: '#CBD5E1', textDecoration: 'none', padding: '2px 6px', borderRadius: '4px' }}>v1</a>
              <a href="../v2/" style={{ color: '#CBD5E1', textDecoration: 'none', padding: '2px 6px', borderRadius: '4px' }}>v2</a>
              <a href="../v3/" style={{ color: '#CBD5E1', textDecoration: 'none', padding: '2px 6px', borderRadius: '4px' }}>v3</a>
              <a href="../v4/" style={{ color: '#CBD5E1', textDecoration: 'none', padding: '2px 6px', borderRadius: '4px' }}>v4</a>
              <a href="../" style={{ color: '#FFFFFF', background: 'var(--brand-green)', fontWeight: '700', textDecoration: 'none', padding: '2px 8px', borderRadius: 'var(--radius-full)' }}>v5 Active</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header 
        className="header-v4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container header-inner-v4">
          <a href="#top" className="brand-logo-v4">
            <div className="brand-icon-v4">MZ</div>
            <div className="brand-text-v4">
              <b>METALICA ZUEV</b>
              <small>Крупнейший поставщик металлопроката в РМ</small>
            </div>
          </a>

          <nav className="nav-v4">
            <a href="#catalog">Каталог металла</a>
            <a href="#company">О компании</a>
            <a href="#capabilities">Оснащение баз</a>
            <a href="#bases">Металлобазы</a>
            <a href="#contact">Контакты</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <motion.a 
              href="tel:+37368471530" 
              className="btn-v4 btn-v4-emerald" 
              style={{ padding: '11px 20px', fontSize: '14px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Phone size={16} /> +373 68 47-15-30
            </motion.a>

            <motion.a 
              href="viber://chat?number=%2B37368471530" 
              className="btn-v4 btn-v4-viber" 
              style={{ padding: '11px 18px', fontSize: '14px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <MessageSquare size={16} /> Viber ↗
            </motion.a>
          </div>
        </div>
      </motion.header>
    </>
  );
}
