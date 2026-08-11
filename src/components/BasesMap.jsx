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
      type: 'Центральный склад металла',
      hours: 'Пн–Пт: 08:00 – 17:00',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Metalica+Zuev+Industrial%C4%83+48+Chisinau',
      features: ['Козловые краны 15т', 'Полный ассортимент 450+ позиций', 'Гильотинная & лентопильная резка', 'Точный весовой контроль'],
      desc: 'Главный складской комплекс с тяжелой крановой инфраструктурой и открытыми площадками хранения сортового проката.'
    },
    {
      id: 'base2',
      title: 'Металлобаза №2 (Кишинёв)',
      city: 'Chișinău',
      address: 'str. Transnistria, 3A (заезд str. Vadul lui Vodă, 142)',
      type: 'Открытая металлобаза',
      hours: 'Пн–Пт: 08:00 – 17:00',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Metalica+Zuev+Transnistria+3A+Chisinau',
      features: ['Удобный заезд для 12-метровых длинномеров', 'Лентопильная резка', 'Погрузка мостовым краном'],
      desc: 'Специализированная площадка для оперативной отгрузки строительных ферм, швеллера и профильных труб.'
    },
    {
      id: 'base3',
      title: 'Региональная Металлобаза №3 (Орхей)',
      city: 'Orhei',
      address: 'str. Unirii, 49D',
      type: 'Региональный хаб',
      hours: 'Пн–Пт: 08:00 – 17:00 | Сб: 08:00 – 14:00',
      isSaturdayOpen: true,
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Metalica+Zuev+Orhei',
      features: ['Отгрузка по субботам до 14:00', 'Быстрая доставка по Северным районам', 'Прямой выезд на трассу'],
      desc: 'Обеспечивает поставками застройщиков Оргеева, Бельц и северных регионов Молдовы.'
    },
    {
      id: 'base4',
      title: 'Логистический Хаб (Сынжера)',
      city: 'Sîngera',
      address: 'str. Industrială, 3',
      type: 'Узловой логистический центр',
      hours: 'Пн–Пт: 08:00 – 17:00',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Metalica+Zuev+Singera',
      features: ['Площадка тяжелого двутаврового профиля', 'База длинномерного транспорта'],
      desc: 'Распределительный центр прямого заводского импорта и спецкомплектации промышленных проектов.'
    }
  ];

  const currentBase = bases[selectedBaseIndex];

  return (
    <section className="section-editorial" id="bases">
      <div className="container">
        <div className="section-header-center">
          <div className="section-eyebrow">
            <ShieldCheck size={14} color="#10B981" /> Складская инфраструктура
          </div>
          <h2>Локации металлобаз в Молдове</h2>
          <p>4 распределительных объекта обеспечивают оперативную отгрузку и минимальное плечо доставки.</p>
        </div>

        <div className="bases-grid-editorial">
          <div>
            {bases.map((b, idx) => (
              <motion.div 
                key={b.id}
                className={`base-card-item ${selectedBaseIndex === idx ? 'active' : ''}`}
                onClick={() => setSelectedBaseIndex(idx)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: '#FFFFFF' }}>{b.city}</h4>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-emerald)' }}>0{idx + 1}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>{b.address}</p>
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
              className="base-display-box"
            >
              <div>
                <span className="product-badge" style={{ marginBottom: '12px', display: 'inline-block' }}>{currentBase.type}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: '#FFFFFF', marginBottom: '12px' }}>{currentBase.title}</h3>
                
                <div style={{ display: 'flex', gap: '20px', color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={16} color="#10B981" /> {currentBase.address}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={16} color="#10B981" /> {currentBase.hours}
                  </span>
                </div>

                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>{currentBase.desc}</p>

                <h4 style={{ fontSize: '14px', color: '#FFFFFF', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Инфраструктура базы:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '32px' }}>
                  {currentBase.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                      <CheckCircle size={14} color="#10B981" /> {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                <a href={currentBase.mapUrl} target="_blank" rel="noreferrer" className="btn-editorial btn-emerald" style={{ flex: 1, fontSize: '13px' }}>
                  <Navigation size={15} /> Открыть на Google Maps ↗
                </a>
                <a href="tel:+37368471530" className="btn-editorial btn-outline-glass" style={{ fontSize: '13px' }}>
                  <Phone size={15} /> Проезд
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
