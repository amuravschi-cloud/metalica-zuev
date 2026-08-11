import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, CheckCircle, Navigation, ShieldCheck } from 'lucide-react';

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
    <section className="section-metal" id="bases">
      <div className="container">
        <div className="section-header-metal">
          <div className="section-eyebrow-metal">
            <ShieldCheck size={14} color="#34D399" /> Складская инфраструктура
          </div>
          <h2>Локации металлобаз в Молдове</h2>
          <p>4 распределительных объекта обеспечивают оперативную отгрузку и минимальное плечо доставки.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '32px' }}>
          <div>
            {bases.map((b, idx) => (
              <motion.div 
                key={b.id}
                onClick={() => setSelectedBaseIndex(idx)}
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  border: selectedBaseIndex === idx ? '1px solid var(--border-emerald)' : '1px solid var(--border-chrome)',
                  background: selectedBaseIndex === idx ? 'var(--metal-titanium-bg)' : 'var(--bg-steel-card)',
                  cursor: 'pointer',
                  marginBottom: '12px',
                  boxShadow: selectedBaseIndex === idx ? 'var(--shadow-metal)' : 'none',
                  transition: 'all 0.2s ease'
                }}
                whileHover={{ x: 4 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#FFFFFF' }}>{b.city}</h4>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-emerald)', fontFamily: 'var(--font-mono)' }}>0{idx + 1}</span>
                </div>
                <p style={{ fontWeight: '700', color: 'var(--text-primary)', margin: '4px 0 2px 0', fontSize: '13px' }}>{b.address}</p>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{b.type}</span>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={currentBase.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="metal-plate-card"
              style={{ padding: '36px', justifyContent: 'space-between' }}
            >
              <div>
                <span className="steel-badge" style={{ marginBottom: '14px' }}>{currentBase.type}</span>

                <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>{currentBase.title}</h3>
                
                <div style={{ display: 'flex', gap: '20px', margin: '16px 0', fontSize: '14px', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                    <MapPin size={16} color="#34D399" /> {currentBase.address}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                    <Clock size={16} color="#34D399" /> {currentBase.hours}
                  </span>
                </div>

                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>{currentBase.desc}</p>

                <h4 style={{ fontSize: '14px', fontWeight: '800', margin: '20px 0 12px 0', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Оснащение базы:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '32px' }}>
                  {currentBase.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-primary)', fontWeight: '600' }}>
                      <CheckCircle size={16} color="#34D399" /> {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', paddingTop: '20px', borderTop: '1px solid var(--border-chrome)' }}>
                <a href={currentBase.mapUrl} target="_blank" rel="noreferrer" className="btn-metal btn-metal-emerald" style={{ flex: 1 }}>
                  <Navigation size={16} /> Google Maps (Метка MZ) ↗
                </a>
                <a href="tel:+37368471530" className="btn-metal btn-metal-dark">
                  <Phone size={16} /> Проезд
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
