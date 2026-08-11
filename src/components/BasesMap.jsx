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
      address: 'str. Transnistria, 3A (заезд с str. Vadul lui Vodă, 142)',
      type: 'Открытая металлобаза · Склад металла',
      hours: 'Пн–Пт: 08:00 – 17:00',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Metalica+Zuev+Transnistria+3A+Chisinau',
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
    <section className="section-industrial" id="bases" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header-industrial">
          <span className="section-tag-industrial">Складская сеть</span>
          <h2>3 Металлобазы и Логистический хаб в Молдове</h2>
          <p>Равномерное распределение складских запасов позволяет комплектовать заказы любой сложности и минимизировать плечо доставки.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '32px', background: '#F8FAFC', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '36px', boxShadow: 'var(--shadow-md)' }}>
          <div>
            {bases.map((b, idx) => (
              <div 
                key={b.id} 
                onClick={() => setSelectedBaseIndex(idx)}
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  border: selectedBaseIndex === idx ? '2px solid var(--brand-green)' : '1px solid var(--border-light)',
                  background: selectedBaseIndex === idx ? 'var(--brand-green-light)' : '#FFFFFF',
                  cursor: 'pointer',
                  marginBottom: '12px',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '17px', fontWeight: '800', color: 'var(--text-dark)' }}>{b.city}</h4>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--brand-green)', fontFamily: 'var(--font-mono)' }}>0{idx + 1}</span>
                </div>
                <p style={{ fontWeight: '700', color: 'var(--text-dark)', margin: '4px 0 2px 0', fontSize: '13px' }}>{b.address}</p>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{b.type}</span>
              </div>
            ))}
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ background: 'var(--brand-green-light)', color: 'var(--brand-green)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: '700', display: 'inline-block', marginBottom: '12px' }}>
                {currentBase.type}
              </span>

              <h3 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '12px' }}>{currentBase.title}</h3>
              
              <div style={{ display: 'flex', gap: '20px', margin: '16px 0', fontSize: '14px', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                  <MapPin size={16} color="var(--brand-green)" /> {currentBase.address}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                  <Clock size={16} color="var(--brand-green)" /> {currentBase.hours}
                </span>
              </div>

              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>{currentBase.desc}</p>

              <h4 style={{ fontSize: '14px', fontWeight: '800', margin: '20px 0 12px 0', color: 'var(--text-dark)' }}>Оснащение базы:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '32px' }}>
                {currentBase.features.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>
                    <CheckCircle size={16} color="#16A34A" /> {feat}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
              <a href={currentBase.mapUrl} target="_blank" rel="noreferrer" className="btn-industrial btn-brand-green" style={{ flex: 1 }}>
                <Navigation size={16} /> Google Maps (Метка MZ) ↗
              </a>
              <a href="tel:+37368471530" className="btn-industrial btn-outline-steel">
                <Phone size={16} /> Уточнить проезд
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
