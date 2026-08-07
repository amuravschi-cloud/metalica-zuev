import React, { useState } from 'react';
import { MapPin, Phone, ExternalLink, Clock, CheckCircle, Navigation } from 'lucide-react';

export default function BasesMap({ onOpenModal }) {
  const [selectedBaseIndex, setSelectedBaseIndex] = useState(0);

  const bases = [
    {
      id: 'base1',
      title: 'Центральная Металлобаза №1 (Кишинёв)',
      city: 'Chișinău',
      address: 'str. Industrială, 48',
      type: 'Открытая база + Склад арматуры',
      hours: 'Пн–Пт: 08:00 – 17:00',
      mapUrl: 'https://maps.google.com/?q=Industriala%2048%20Chisinau%20Moldova',
      features: ['2 Козловых крана 15т', 'Склад гладкой & профильной арматуры', 'Гильотинная резка листов', 'Автомобильные весы 60т'],
      desc: 'Главный открытый складской комплекс компании с круглосуточным пополнением запасов от заводов-изготовителей.'
    },
    {
      id: 'base2',
      title: 'Металлобаза №2 (Кишинёв)',
      city: 'Chișinău',
      address: 'str. Vadul lui Vodă, 142',
      type: 'Склад труб и профилей',
      hours: 'Пн–Пт: 08:00 – 17:00',
      mapUrl: 'https://maps.google.com/?q=Vadul%20lui%20Voda%20142%20Chisinau%20Moldova',
      features: ['Цех профильных труб', 'Лентопильная резка', 'Крытый ангар хранения', 'Удобный подъезд длинномеров'],
      desc: 'Специализированная база по сортовому и профильному прокату, круглой и квадратной трубе.'
    },
    {
      id: 'base3',
      title: 'Региональная Металлобаза №3 (Орхей)',
      city: 'Orhei',
      address: 'str. Unirii, 49D',
      type: 'Региональный хаб Севера',
      hours: 'Пн–Пт: 08:00 – 17:00',
      mapUrl: 'https://maps.google.com/?q=Unirii%2049D%20Orhei%20Moldova',
      features: ['Быстрая отгрузка на Север', 'Крановая погрузка', 'Основной ассортимент проката', 'Прямой выезд на трассу'],
      desc: 'Обеспечивает поставками строительные объекты Оргеева, Бельц и северных районов Молдовы.'
    },
    {
      id: 'base4',
      title: 'Логистический Узловой Хаб (Сынжера)',
      city: 'Sîngera',
      address: 'str. Industrială, 3',
      type: 'Главный логистический хаб',
      hours: 'Пн–Пт: 08:00 – 17:00',
      mapUrl: 'https://maps.google.com/?q=Industriala%203%20Singera%20Moldova',
      features: ['Площадка тяжелого фасона', 'Склады балок и швеллеров', 'Парк длинномерных фур', 'Спецкомплектация проектов'],
      desc: 'Логистический центр распределения вагонных поставок и тяжелого фасонного проката.'
    }
  ];

  const currentBase = bases[selectedBaseIndex];

  return (
    <section className="section" id="bases" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Складская сеть</span>
          <h2>3 Металлобазы и Логистический хаб в Молдове</h2>
          <p>
            Равномерное распределение складских запасов позволяет комплектовать заказы любой сложности и минимизировать плечо доставки.
          </p>
        </div>

        <div className="bases-container">
          <div className="bases-list">
            {bases.map((b, idx) => (
              <div 
                key={b.id} 
                className={`base-item-btn ${selectedBaseIndex === idx ? 'active' : ''}`}
                onClick={() => setSelectedBaseIndex(idx)}
              >
                <h4>
                  <span>{b.city}</span>
                  <span style={{ fontSize: '12px', color: 'var(--brand-navy)', fontWeight: '700' }}>0{idx + 1}</span>
                </h4>
                <p style={{ fontWeight: '600', color: 'var(--text-dark)', margin: '2px 0' }}>{b.address}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{b.type}</p>
              </div>
            ))}
          </div>

          <div className="base-detail-card">
            <div className="base-detail-info">
              <div style={{ display: 'inline-block', background: '#EFF6FF', color: 'var(--brand-navy)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: '700', marginBottom: '12px' }}>
                {currentBase.type}
              </div>

              <h3>{currentBase.title}</h3>
              
              <div style={{ display: 'flex', gap: '20px', margin: '16px 0', fontSize: '14px', color: 'var(--text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={16} color="var(--brand-navy)" /> {currentBase.address}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} color="var(--brand-navy)" /> {currentBase.hours}
                </span>
              </div>

              <p>{currentBase.desc}</p>

              <h4 style={{ fontSize: '14px', fontWeight: '800', margin: '20px 0 12px 0', color: 'var(--text-dark)' }}>
                Оснащение и сервисы базы:
              </h4>

              <div className="base-features-list">
                {currentBase.features.map((feat, i) => (
                  <div key={i} className="base-feature-item">
                    <CheckCircle size={16} color="#16A34A" /> {feat}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
              <a 
                href={currentBase.mapUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-navy"
                style={{ flex: 1 }}
              >
                <Navigation size={16} /> Построить маршрут на Google Maps ↗
              </a>

              <button 
                className="btn btn-outline"
                onClick={() => onOpenModal(`Самовывоз с базы: ${currentBase.city}, ${currentBase.address}`)}
              >
                Забронировать самовывоз
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
