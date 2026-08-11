import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Clock, MapPin, Sparkles } from 'lucide-react';

export default function Header() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isOpenNow = day >= 1 && day <= 5 && hour >= 8 && hour < 17;

  return (
    <>
      {/* Top Editorial Status Strip */}
      <div style={{ background: '#020504', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', padding: '10px 0', fontSize: '12px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span className="status-pill">
              <span className="status-dot-pulse" style={{ backgroundColor: isOpenNow ? '#4ADE80' : '#F59E0B' }}></span>
              {isOpenNow ? 'Базы открыты · Прямая отгрузка' : 'Заявки 24/7 · Отгрузка Пн–Пт 08:00–17:00'}
            </span>
            <span style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={13} color="#10B981" /> Пн–Пт 08:00–17:00
            </span>
            <span style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={13} color="#10B981" /> Кишинёв · Бельцы · Комрат
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="viber://chat?number=%2B37368471530" 
              style={{ color: '#A78BFA', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '700', fontFamily: 'var(--font-mono)' }}
            >
              <MessageSquare size={13} /> Viber Direct
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <motion.header 
        className="header-glass"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container header-inner">
          <a href="#top" className="brand-logo-editorial">
            <div className="brand-icon-editorial">MZ</div>
            <div className="brand-text-editorial">
              <b>METALICA ZUEV</b>
              <small>BESPOKE STEEL SUPPLIES</small>
            </div>
          </a>

          <nav className="nav-editorial">
            <a href="#company">О компании</a>
            <a href="#catalog">Каталог</a>
            <a href="#capabilities">Оснащение</a>
            <a href="#bases">Локации</a>
            <a href="#contact">Контакты</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <motion.a 
              href="tel:+37368471530" 
              className="btn-editorial btn-emerald" 
              style={{ padding: '10px 18px', fontSize: '13px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Phone size={14} /> +373 68 47-15-30
            </motion.a>

            <motion.a 
              href="viber://chat?number=%2B37368471530" 
              className="btn-editorial btn-viber" 
              style={{ padding: '10px 16px', fontSize: '13px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <MessageSquare size={14} /> Viber
            </motion.a>
          </div>
        </div>
      </motion.header>
    </>
  );
}
