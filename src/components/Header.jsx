import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Clock, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isOpenNow = day >= 1 && day <= 5 && hour >= 8 && hour < 17;

  return (
    <>
      {/* Top Metallic Strip */}
      <div style={{ background: '#070C12', borderBottom: '1px solid var(--border-chrome)', padding: '10px 0', fontSize: '12px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span className="steel-badge">
              <span className="status-dot-steel" style={{ backgroundColor: isOpenNow ? '#34D399' : '#F59E0B' }}></span>
              {isOpenNow ? 'Базы открыты · Прямая отгрузка кранами' : 'Приём сообщений 24/7 · Отгрузка: Пн–Пт 08:00–17:00'}
            </span>

            <span style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)' }}>
              <Clock size={13} color="#34D399" /> Пн–Пт 08:00–17:00
            </span>

            <span style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)' }}>
              <MapPin size={13} color="#34D399" /> 3 Базы + Хаб в Молдове
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="viber://chat?number=%2B37368471530" 
              style={{ color: '#C4B5FD', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '700', fontFamily: 'var(--font-mono)' }}
            >
              <MessageSquare size={13} /> Viber: +373 68 47-15-30
            </a>

            {/* Version switcher */}
            <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-chrome)', gap: '4px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
              <a href="../v1/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '2px 6px' }}>v1</a>
              <a href="../v2/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '2px 6px' }}>v2</a>
              <a href="../" style={{ color: '#FFFFFF', background: 'var(--brand-green)', fontWeight: '700', textDecoration: 'none', padding: '2px 6px', borderRadius: 'var(--radius-full)' }}>v3 Metallic Motion</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Metallic Header */}
      <motion.header 
        className="header-metal"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container header-inner-metal">
          <a href="#top" className="brand-logo-metal">
            <div className="brand-icon-metal">MZ</div>
            <div className="brand-text-metal">
              <b>METALICA ZUEV</b>
              <small>STEEL & REBAR SUPPLIES</small>
            </div>
          </a>

          <nav className="nav-metal">
            <a href="#catalog">Каталог металла</a>
            <a href="#company">О компании</a>
            <a href="#capabilities">Оснащение</a>
            <a href="#bases">Локации</a>
            <a href="#contact">Контакты</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <motion.a 
              href="tel:+37368471530" 
              className="btn-metal btn-metal-emerald" 
              style={{ padding: '10px 18px', fontSize: '13px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Phone size={14} /> +373 68 47-15-30
            </motion.a>

            <motion.a 
              href="viber://chat?number=%2B37368471530" 
              className="btn-metal btn-metal-viber" 
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
