import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#020504', borderTop: '1px solid var(--border-subtle)', padding: '60px 0 30px 0', fontSize: '13px', color: 'var(--text-secondary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <div className="brand-logo-editorial" style={{ marginBottom: '16px' }}>
              <div className="brand-icon-editorial">MZ</div>
              <div className="brand-text-editorial">
                <b>METALICA ZUEV</b>
                <small>BESPOKE STEEL SUPPLIES</small>
              </div>
            </div>
            <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>
              Системообразующий поставщик чёрного металлопроката в Республике Молдова с 1995 года.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', color: '#FFFFFF', marginBottom: '14px' }}>Каталог</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="#catalog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Арматура А500С / А400</a>
              <a href="#catalog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Профильная & Круглая труба</a>
              <a href="#catalog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Листовой прокат Г/К, Х/К</a>
              <a href="#catalog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Двутавр, Швеллер, Уголок</a>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', color: '#FFFFFF', marginBottom: '14px' }}>Локации склада</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span>• Кишинёв: str. Industrială, 48</span>
              <span>• Кишинёв: str. Transnistria, 3A</span>
              <span>• Орхей: str. Unirii, 49D</span>
              <span>• Сынжера: str. Industrială, 3</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', color: '#FFFFFF', marginBottom: '14px' }}>Отдел продаж</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="tel:+37368471530" style={{ color: 'var(--text-emerald)', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} /> +373 68 47-15-30
              </a>
              <a href="viber://chat?number=%2B37368471530" style={{ color: '#A78BFA', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={14} /> Viber Direct
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)' }}>
                <Clock size={13} /> Пн–Пт 08:00–17:00
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            © {currentYear} Metalica Zuev SRL. Все права защищены.
          </div>
          <a href="#top" style={{ color: 'var(--text-emerald)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '700' }}>
            Наверх <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
