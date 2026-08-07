import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <b>METALICA ZUEV</b>
            <p>
              Один из лидеров на рынке металлопроката в Республике Молдова с 1995 года. Прямые поставки от ведущих заводов, 3 открытые металлобазы и узловой логистический хаб.
            </p>
            <div style={{ marginTop: '20px', fontSize: '13px', color: '#64748B' }}>
              © 1995–2026 Metalica Zuev SRL. Все права защищены.
            </div>
          </div>

          <div className="footer-col">
            <h4>Продукция & Услуги</h4>
            <ul>
              <li><a href="#catalog">Арматура А500С / А400</a></li>
              <li><a href="#catalog">Круглые и профильные трубы</a></li>
              <li><a href="#catalog">Листовой прокат Г/К, Х/К, Оцинк</a></li>
              <li><a href="#catalog">Двутавровая балка и швеллер</a></li>
              <li><a href="#capabilities">Высокоточная резка в размер</a></li>
              <li><a href="#capabilities">Комплектация ведомостей VOR</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Отдел продаж и контакты</h4>
            <ul>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#38BDF8" /> <strong>+373 22 47-15-30</strong>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#38BDF8" /> info@mz.md
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#38BDF8" /> г. Кишинёв, ул. Индустриальная, 48
              </li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <button 
                className="btn btn-navy"
                style={{ width: '100%', fontSize: '13px' }}
                onClick={() => onOpenModal('Вызов менеджера из футера')}
              >
                Связаться с дежурным менеджером
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Официальный сайт поставщика металлопроката Metalica Zuev SRL в Молдове</span>
          <a href="#top" style={{ color: '#E2E8F0', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Наверх страницы <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
