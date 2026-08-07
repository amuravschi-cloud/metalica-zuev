import React from 'react';
import { Phone, Mail, ArrowUp, Clock, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <b>METALICA ZUEV</b>
            <p>
              Один из крупнейших поставщиков чёрного металлопроката в Республике Молдова с 1995 года. Прямые заводские контракты, 3 открытые металлобазы и узловой логистический хаб.
            </p>
            <div style={{ marginTop: '20px', fontSize: '13px', color: '#64748B' }}>
              © 1995–2026 Metalica Zuev SRL. Все права защищены.
            </div>
          </div>

          <div className="footer-col">
            <h4>Разделы и информация</h4>
            <ul>
              <li><a href="#company">О компании</a></li>
              <li><a href="#catalog">Ассортимент металлопроката</a></li>
              <li><a href="#capabilities">Оснащение & Сервис</a></li>
              <li><a href="#bases">Локации металлобаз</a></li>
              <li><a href="#contact">Контакты отделов</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Отдел продаж и контакты</h4>
            <ul>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#4ADE80" /> <strong>+373 68 47-15-30</strong> (Мобильный / Viber)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#4ADE80" /> +373 22 47-15-30 (Городской)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} color="#4ADE80" /> Пн–Пт · 08:00 – 17:00
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#4ADE80" /> info@mz.md
              </li>
            </ul>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              <a href="tel:+37368471530" className="btn btn-brand" style={{ padding: '8px 14px', fontSize: '12px' }}>
                <Phone size={14} /> Позвонить
              </a>
              <a href="viber://chat?number=%2B37368471530" className="btn btn-viber" style={{ padding: '8px 14px', fontSize: '12px' }}>
                <MessageSquare size={14} /> Viber
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Официальный информационный сайт поставщика металлопроката Metalica Zuev SRL в Молдове</span>
          <a href="#top" style={{ color: '#D1E5DC', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Наверх страницы <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
