import React from 'react';
import { Phone, MessageSquare, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#0B131F', color: '#94A3B8', padding: '60px 0 30px 0', borderTop: '2px solid #1E293B', fontSize: '13px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <div className="brand-logo-industrial" style={{ marginBottom: '16px' }}>
              <div className="brand-icon-industrial">MZ</div>
              <div className="brand-text-industrial">
                <b style={{ color: '#FFFFFF' }}>METALICA ZUEV</b>
                <small style={{ color: '#94A3B8' }}>Металлопрокат в Молдове</small>
              </div>
            </div>
            <p style={{ lineHeight: '1.6', color: '#94A3B8' }}>
              Крупнейший поставщик чёрного металлопроката в Республике Молдова с 1995 года.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px' }}>Каталог металлопроката</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="#catalog" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Арматура А500С / А400</a>
              <a href="#catalog" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Трубы профильные и круглые</a>
              <a href="#catalog" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Листовой прокат Г/К, Х/К</a>
              <a href="#catalog" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Двутавр, Швеллер, Уголок</a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px' }}>Металлобазы</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#CBD5E1' }}>
              <span>• Кишинёв: str. Industrială, 48</span>
              <span>• Кишинёв: str. Transnistria, 3A</span>
              <span>• Орхей: str. Unirii, 49D</span>
              <span>• Сынжера: str. Industrială, 3</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px' }}>Отдел продаж</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="tel:+37368471530" style={{ color: '#4ADE80', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                <Phone size={16} /> +373 68 47-15-30
              </a>
              <a href="viber://chat?number=%2B37368471530" style={{ color: '#C4B5FD', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={16} /> Viber Direct
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#94A3B8' }}>
                <Clock size={14} /> Режим: Пн–Пт 08:00–17:00
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            © {currentYear} Metalica Zuev SRL. Все права защищены.
          </div>
          <a href="#top" style={{ color: '#34D399', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '700' }}>
            Наверх <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
