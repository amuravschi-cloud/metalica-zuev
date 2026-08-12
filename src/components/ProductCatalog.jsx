import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Table, LayoutGrid, Calculator, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SpecCalculator from './SpecCalculator';

import rebarImg from '../assets/images/rebar.png';
import pipesImg from '../assets/images/pipes.png';
import sheetsImg from '../assets/images/sheets.png';
import beamsImg from '../assets/images/beams.png';

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState('all');
  const [displayMode, setDisplayMode] = useState('cards'); // 'cards' or 'table'
  const [isCalcOpen, setIsCalcOpen] = useState(false);
  const trackRef = useRef(null);

  const products = [
    {
      id: 'armatura',
      code: '01',
      category: 'armatura',
      title: 'Арматура А500С / А400',
      subtitle: 'Гладкая и периодическая (Ø 8 – 32 мм)',
      desc: 'Высокопрочная стальная арматура для монолитного строительства, фундаментов, ЖБИ изделий и несущих каркасов.',
      tag: 'ГОСТ 34028 / А500С',
      image: rebarImg,
      specs: [
        { label: 'Марка стали', value: 'А500С / А400 / 35ГС' },
        { label: 'Диаметры в наличии', value: '8, 10, 12, 14, 16, 18, 20-32 мм' },
        { label: 'Длина прутков', value: 'Мерная 11.7 м / Немерная' },
        { label: 'Сервис', value: 'Пакетная увязка, резка в размер' },
      ]
    },
    {
      id: 'pipes_prof',
      code: '02',
      category: 'pipes',
      title: 'Профильная труба',
      subtitle: 'Квадратное и прямоугольное сечение',
      desc: 'Профильный прокат с точной геометрией сечения для навесов, заборов, ангаров, легких ферм и строительных лесов.',
      tag: 'ГОСТ 8639-82 / 8645',
      image: pipesImg,
      specs: [
        { label: 'Сечения квадратные', value: '15х15, 20х20, 40х40, 60х60, 100х100' },
        { label: 'Прямоугольные', value: '40х20, 50х25, 60х40, 80х40, 100х50' },
        { label: 'Толщина стенки', value: 'от 1.5 мм до 6.0 мм' },
        { label: 'Марка стали', value: 'Ст3сп / Ст10 / 09Г2С' },
      ]
    },
    {
      id: 'pipes_round',
      code: '03',
      category: 'pipes',
      title: 'Круглая стальная труба',
      subtitle: 'Водогазопроводная и электросварная',
      desc: 'Стальные трубы различных диаметров и толщины стенки для инженерных коммуникаций, металлических конструкций и гидросистем.',
      tag: 'ГОСТ 3262-75 / 10704',
      image: pipesImg,
      specs: [
        { label: 'Диаметры наружные', value: 'от 15 мм до 219+ мм (1/2" — 8")' },
        { label: 'Толщина стенки', value: 'от 2.0 мм до 8.0 мм' },
        { label: 'Стандарты', value: 'ГОСТ, EN 10217, EN 10255' },
        { label: 'Применение', value: 'ВГП, Несущие строительные стойки' },
      ]
    },
    {
      id: 'sheets',
      code: '04',
      category: 'sheets',
      title: 'Листовой прокат',
      subtitle: 'Г/К, Х/К, Оцинкованный и Рифлёный лист',
      desc: 'Гладкий, оцинкованный и рифленый листовой металл в листах и рулонах для производства, штамповки и фасадных элементов.',
      tag: 'ГОСТ 19903-2015 / 19904',
      image: sheetsImg,
      specs: [
        { label: 'Толщина листовая', value: 'от 0.5 мм до 50.0 мм' },
        { label: 'Габариты раскроя', value: '1000х2000, 1250х2500, 1500х6000 мм' },
        { label: 'Вид поверхности', value: 'Гладкий, Чечевица, Оцинк' },
        { label: 'Обработка', value: 'Гильотинная & Плазменная резка' },
      ]
    },
    {
      id: 'beams',
      code: '05',
      category: 'shaped',
      title: 'Двутавровая балка (Н-профиль)',
      subtitle: 'Профиль 10Б1 — 30Б1 / К1 / К2',
      desc: 'Горячекатаный фасонный прокат Н-образного сечения для высоких несущих нагрузок, межэтажных перекрытий и мостовых ферм.',
      tag: 'ГОСТ 8239-89 / СТО АСЧМ',
      image: beamsImg,
      specs: [
        { label: 'Профильные серии', value: 'Балка Б1, Б2, К1, К2' },
        { label: 'Высота профиля', value: 'от 100 мм до 300+ мм' },
        { label: 'Длина хлыстов', value: 'Мерные 12.0 м / Спецраскрой' },
        { label: 'Марка стали', value: 'Ст3сп / 09Г2С' },
      ]
    },
    {
      id: 'channels',
      code: '06',
      category: 'shaped',
      title: 'Швеллер и Уголок стальной',
      subtitle: 'П-образный и равнополочный прокат',
      desc: 'Фасонные элементы для армирования стен, создания станин техники, прогонов и сопряжения балочных конструкций.',
      tag: 'ГОСТ 8240-97 / ГОСТ 8509',
      image: beamsImg,
      specs: [
        { label: 'Швеллер серии', value: '№ 5U, 6.5U, 8U, 10U — 30U' },
        { label: 'Уголок равнополочный', value: '25х25, 40х40, 50х50 — 125х125' },
        { label: 'Толщина полки', value: 'от 3.0 мм до 12.0 мм' },
        { label: 'Сервис', value: 'Точный торец на лентопиле' },
      ]
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="section-v4" id="catalog">
        <div className="container">
          <div className="section-header-v4">
            <span className="section-tag-v4">Складской запас в наличии</span>
            <h2>Каталог стального металлопроката</h2>
            <p>
              450+ товарных позиций в постоянной готовности на базах в Кишинёве, Оргееве и Сынжере. 
              Каждая партия отгружается с прямым заводским сертификатом качества.
            </p>

            {/* Display Mode & Navigation Header Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginTop: '24px' }}>
              <div style={{ display: 'inline-flex', background: '#CBD5E1', padding: '4px', borderRadius: 'var(--radius-full)', border: '1px solid #94A3B8' }}>
                <button 
                  onClick={() => setDisplayMode('cards')}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    background: displayMode === 'cards' ? 'var(--brand-green)' : 'transparent',
                    color: displayMode === 'cards' ? '#FFFFFF' : '#475569',
                    fontSize: '13px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <LayoutGrid size={15} /> Горизонтальный Моушн-Трек
                </button>
                <button 
                  onClick={() => setDisplayMode('table')}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    background: displayMode === 'table' ? 'var(--brand-green)' : 'transparent',
                    color: displayMode === 'table' ? '#FFFFFF' : '#475569',
                    fontSize: '13px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Table size={15} /> Инженерная спецификация
                </button>
              </div>

              {/* Horizontal Scroll Steel Arrow Buttons */}
              {displayMode === 'cards' && (
                <div style={{ display: 'flex', gap: '8px' }}>
                  <motion.button 
                    onClick={scrollLeft}
                    className="btn-v4 btn-v4-steel"
                    style={{ padding: '10px 14px', borderRadius: 'var(--radius-full)' }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    aria-label="Scroll left"
                  >
                    <ChevronLeft size={20} />
                  </motion.button>
                  <motion.button 
                    onClick={scrollRight}
                    className="btn-v4 btn-v4-emerald"
                    style={{ padding: '10px 14px', borderRadius: 'var(--radius-full)' }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    aria-label="Scroll right"
                  >
                    <ChevronRight size={20} />
                  </motion.button>
                </div>
              )}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
            {[
              { id: 'all', label: 'Все позиции (450+)' },
              { id: 'armatura', label: 'Арматура' },
              { id: 'pipes', label: 'Трубы' },
              { id: 'sheets', label: 'Листы' },
              { id: 'shaped', label: 'Балка & Швеллер' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid #CBD5E1',
                  background: activeTab === tab.id ? 'var(--brand-green)' : '#FFFFFF',
                  color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-dark)',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === tab.id ? '0 4px 14px rgba(6,78,59,0.25)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* DISPLAY MODE 1: HORIZONTAL MOTION CAROUSEL TRACK */}
          {displayMode === 'cards' ? (
            <div>
              <div className="horizontal-scroll-container" ref={trackRef}>
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((prod) => (
                    <motion.div
                      key={prod.id}
                      layout
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="metal-plate-heavy"
                    >
                      {/* BUNDLED METAL PRODUCT PHOTO */}
                      <div className="metal-photo-frame-v4">
                        <img src={prod.image} alt={prod.title} />
                        <span className="metal-photo-tag-v4">{prod.tag}</span>
                      </div>

                      <div className="metal-plate-body-v4">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: '800', color: 'var(--brand-green)', textTransform: 'uppercase' }}>
                            ПОЗИЦИЯ #{prod.code}
                          </span>
                        </div>

                        <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '4px' }}>
                          {prod.title}
                        </h3>
                        <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--brand-green)', marginBottom: '12px' }}>
                          {prod.subtitle}
                        </p>

                        <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '16px' }}>
                          {prod.desc}
                        </p>

                        <div className="steel-spec-table-v4">
                          {prod.specs.map((sp, idx) => (
                            <div key={idx} className="steel-spec-row-v4">
                              <span>{sp.label}:</span>
                              <strong>{sp.value}</strong>
                            </div>
                          ))}
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '2px solid #E2E8F0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                          <motion.button 
                            onClick={() => setIsCalcOpen(true)}
                            className="btn-v4 btn-v4-steel" 
                            style={{ padding: '10px', fontSize: '12px' }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Calculator size={14} /> Расчёт массы
                          </motion.button>
                          <motion.a 
                            href="viber://chat?number=%2B37368471530" 
                            className="btn-v4 btn-v4-viber" 
                            style={{ padding: '10px', fontSize: '12px' }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <MessageSquare size={14} /> Viber
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Scroll Track Help Hint */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '12px', fontSize: '13px', color: 'var(--text-muted)', fontWeight: '600' }}>
                <ChevronLeft size={16} /> Прокручивайте каталог по горизонтали <ChevronRight size={16} />
              </div>
            </div>
          ) : (
            /* DISPLAY MODE 2: ENGINEERING DATA TABLE */
            <div style={{ background: '#FFFFFF', border: '2px solid #CBD5E1', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-plate)' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ background: '#0F172A', color: '#FFFFFF', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
                      <th style={{ padding: '16px 20px' }}>№</th>
                      <th style={{ padding: '16px 20px' }}>Наименование металлопроката</th>
                      <th style={{ padding: '16px 20px' }}>Доступные сечения / Диаметры</th>
                      <th style={{ padding: '16px 20px' }}>Стандарт ГОСТ / EN</th>
                      <th style={{ padding: '16px 20px' }}>Марки стали</th>
                      <th style={{ padding: '16px 20px', textAlign: 'right' }}>Связь</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((prod, idx) => (
                      <tr key={prod.id} style={{ borderBottom: '1px solid #E2E8F0', background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                        <td style={{ padding: '16px 20px', fontWeight: '800', color: 'var(--brand-green)', fontFamily: 'var(--font-mono)' }}>{prod.code}</td>
                        <td style={{ padding: '16px 20px' }}>
                          <strong style={{ display: 'block', color: 'var(--text-dark)', fontSize: '15px' }}>{prod.title}</strong>
                          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{prod.subtitle}</span>
                        </td>
                        <td style={{ padding: '16px 20px', fontWeight: '700', color: 'var(--text-dark)', fontFamily: 'var(--font-mono)' }}>
                          {prod.specs[1]?.value || 'По запросу'}
                        </td>
                        <td style={{ padding: '16px 20px' }}>
                          <span style={{ background: 'var(--brand-green-light)', color: 'var(--brand-green)', padding: '2px 8px', borderRadius: 'var(--radius-sm)', fontWeight: '700', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                            {prod.tag}
                          </span>
                        </td>
                        <td style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>
                          {prod.specs[0]?.value || 'Ст3сп / А500С'}
                        </td>
                        <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                          <a href="tel:+37368471530" className="btn-v4 btn-v4-emerald" style={{ padding: '6px 14px', fontSize: '12px' }}>
                            <Phone size={13} /> Звонок
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Interactive Calculator Banner */}
          <div style={{ marginTop: '56px', background: '#0F172A', color: '#FFFFFF', border: '2px solid #334155', borderRadius: 'var(--radius-lg)', padding: '36px 44px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', boxShadow: '0 20px 48px rgba(15,23,42,0.2)' }}>
            <div>
              <h4 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '6px', color: '#FFFFFF' }}>Требуется быстрый расчёт массы партий?</h4>
              <p style={{ fontSize: '15px', color: '#94A3B8' }}>Рассчитайте масса-длину по справочным ГОСТам в пару кликов и запросите точную накладную.</p>
            </div>
            <motion.button 
              onClick={() => setIsCalcOpen(true)} 
              className="btn-v4 btn-v4-amber" 
              style={{ padding: '14px 28px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Calculator size={18} /> Открыть Калькулятор Металла <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Modal Spec Calculator */}
      {isCalcOpen && <SpecCalculator onClose={() => setIsCalcOpen(false)} />}
    </>
  );
}
