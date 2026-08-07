import React, { useState } from 'react';
import { MapPin, Phone, Clock, CheckCircle, Navigation } from 'lucide-react';

export default function BasesMap() {
  const [selectedBaseIndex, setSelectedBaseIndex] = useState(0);

  const bases = [
    {
      id: 'base1',
      title: 'Металлобаза №1 (Кишинёв)',
      city: 'Chișinău',
      address: 'str. Industrială, 48',
      type: 'Открытая металлобаза · Склад металла',
      hours: 'Пн–Пт: 08:00 – 17:00',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Metalica+Zuev+Industrial%C4%83+48+Chisinau',
      features: ['Козловые краны 15т', 'Склад сортового и фасонного проката', 'Гильотинная и лентопильная резка', 'Точный весовой контроль'],
      desc: 'Открытый складской комплекс компании с широким ассортиментом чёрного металлопроката и быстрой крановой отгрузкой.'
    },
    {
      id: 'base2',
      title: 'Металлобаза №2 (Кишинёв)',
      city: 'Chișinău',
      address: 'str. Transnistria, 3 (заезд с str. Vadul lui Vodă, 142)',
      type: 'Открытая металлобаза · Склад металла',
      hours: 'Пн–Пт: 08:00 – 17:00',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Metalica+Zuev+Transnistria+3+Chisinau',
      features: ['Открытый склад металлопроката', 'Лентопильная резка', 'Удобный подъезд длинномеров', 'Погрузка крановым оборудованием'],
      desc: 'Открытая металлобаза с удобным заездом с улицы Вадул-луй-Водэ (142), оборудованная под отгрузку тяжелых длинномеров.'
    },
    {
      id: 'base3',
      title: 'Региональная Металлобаза №3 (Орхей)',
      city: 'Orhei',
      address: 'str. Unirii, 49D',
      type: 'Региональная металлобаза',
      hours: 'Пн–Пт: 08:00 – 17:00 | Сб: 08:00 – 14:00',
      isSaturdayOpen: true,
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Metalica+Zuev+Orhei',
      features: ['Отгрузка по субботам до 14:00', 'Быстрая доставка по Северу', 'Крановая погрузка', 'Прямой выезд на трассу'],
      desc: 'Обеспечивает поставками строительные объекты Оргеева, Бельц и северных районов Молдовы. Работает по субботам до 14:00.'
    },
    {
      id: 'base4',
      title: 'Логистический Хаб (Сынжера)',
      city: 'Sîngera',
      address: 'str. Industrială, 3',
      type: 'Логистический хаб',
      hours: 'Пн–Пт: 08:00 – 17:00',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Metalica+Zuev+Singera',
      features: ['Площадка тяжелого фасона', 'Склады балок и швеллеров', 'Парк длинномерных фур', 'Спецкомплектация проектов'],
      desc: 'Узловой логистический центр распределения прямых заводских поставок и тяжелого фасонного проката.'
    }
  ];

  const currentBase = bases[selectedBaseIndex];

  return (
    <section className="section" id="bases" style={{ background: '#F4F7F5' }}>
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
                  <span style={{ fontSize: '12px', color: 'var(--brand-green)', fontWeight: '700' }}>0{idx + 1}</span>
                </h4>
                <p style={{ fontWeight: '700', color: 'var(--text-dark)', margin: '4px 0 2px 0', lineHeight: '1.3' }}>{b.address}</p>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginTop: '4px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{b.type}</span>
                  {b.isSaturdayOpen && (
                    <span style={{ background: '#FEF3C7', color: '#B45309', padding: '2px 8px', borderRadius: 'var(--radius-sm)', fontSize: '11px', fontWeight: '800' }}>
                      Сб до 14:00
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="base-detail-card">
            <div className="base-detail-info">
              <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ background: 'var(--brand-green-light)', color: 'var(--brand-green)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: '700' }}>
                  {currentBase.type}
                </span>
                {currentBase.isSaturdayOpen && (
                  <span style={{ background: '#FEF3C7', color: '#B45309', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: '800' }}>
                    Работает в субботу до 14:00
                  </span>
                )}
              </div>

              <h3>{currentBase.title}</h3>
              
              <div style={{ display: 'flex', gap: '20px', margin: '16px 0', fontSize: '14px', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                  <MapPin size={16} color="var(--brand-green)" /> {currentBase.address}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                  <Clock size={16} color="var(--brand-green)" /> {currentBase.hours}
                </span>
              </div>

              <p>{currentBase.desc}</p>

              <h4 style={{ fontSize: '14px', fontWeight: '800', margin: '20px 0 12px 0', color: 'var(--bg-dark-green)' }}>
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

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border-green)' }}>
              <a 
                href={currentBase.mapUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-brand"
                style={{ flex: 1 }}
              >
                <Navigation size={16} /> Найти на Google Maps (Метка MZ) ↗
              </a>

              <a 
                href="tel:+37368471530" 
                className="btn btn-outline-dark"
              >
                <Phone size={16} /> Уточнить проезд
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
