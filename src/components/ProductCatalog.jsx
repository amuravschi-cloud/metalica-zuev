import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Table, LayoutGrid, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import SpecCalculator from './SpecCalculator';

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState('all');
  const [displayMode, setDisplayMode] = useState('cards'); // 'cards' or 'table'
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  const products = [
    {
      id: 'armatura',
      code: '01',
      category: 'armatura',
      title: 'Арматура А500С / А400',
      subtitle: 'Гладкая и периодическая (Ø 8 – 32 мм)',
      desc: 'Высокопрочная стальная арматура для монолитного домостроения, фундаментов, ЖБИ изделий и несущих пространственных каркасов.',
      tag: 'ГОСТ 34028 / А500С',
      specs: [
        { label: 'Марка стали', value: 'А500С / А400 / 35ГС' },
        { label: 'Диаметры в наличии', value: '8, 10, 12, 14, 16, 18, 20-32 мм' },
        { label: 'Длина прутков', value: 'Мерная 11.7 м / Немерная' },
        { label: 'Сервис', value: 'Пакетная увязка, резка в размер' },
      ]
    },
    {
      id: 'pipes_round',
      code: '02',
      category: 'pipes',
      title: 'Круглая стальная труба',
      subtitle: 'Водогазопроводная и электросварная',
      desc: 'Стальные трубы различных диаметров и толщины стенки для инженерных коммуникаций, металлических конструкций и гидросистем.',
      tag: 'ГОСТ 3262-75 / 10704-91',
      specs: [
        { label: 'Диаметры наружные', value: 'от 15 мм до 219+ мм (1/2" — 8")' },
        { label: 'Толщина стенки', value: 'от 2.0 мм до 8.0 мм' },
        { label: 'Стандарты', value: 'ГОСТ, EN 10217, EN 10255' },
        { label: 'Применение', value: 'ВГП, Несущие строительные стойки' },
      ]
    },
    {
      id: 'pipes_prof',
      code: '03',
      category: 'pipes',
      title: 'Профильная труба',
      subtitle: 'Квадратное и прямоугольное сечение',
      desc: 'Профильный прокат с точной геометрией сечения для навесов, заборов, ангаров, легких ферм и строительных лесов.',
      tag: 'ГОСТ 8639-82 / 8645-68',
      specs: [
        { label: 'Сечения квадратные', value: '15х15, 20х20, 40х40, 60х60, 100х100' },
        { label: 'Прямоугольные', value: '40х20, 50х25, 60х40, 80х40, 100х50' },
        { label: 'Толщина стенки', value: 'от 1.5 мм до 6.0 мм' },
        { label: 'Марка стали', value: 'Ст3сп / Ст10 / 09Г2С' },
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

  return (
    <>
      <section className="section-editorial" id="catalog">
        <div className="container">
          <div className="section-header-center">
            <div className="section-eyebrow">
              <ShieldCheck size={14} color="#10B981" /> Номенклатура складского запаса
            </div>
            <h2>Каталог стального проката</h2>
            <p>
              450+ товарных позиций в постоянной готовности на базах в Кишинёве, Бельцах и Комрате. 
              Каждая партия отгружается с прямым заводским сертификатом качества.
            </p>

            {/* Mode Switcher */}
            <div style={{ display: 'inline-flex', background: 'var(--bg-card)', padding: '5px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)', marginTop: '24px' }}>
              <button 
                onClick={() => setDisplayMode('cards')}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  background: displayMode === 'cards' ? 'var(--accent-emerald)' : 'transparent',
                  color: displayMode === 'cards' ? '#000000' : 'var(--text-secondary)',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                <LayoutGrid size={15} /> Карточки
              </button>
              <button 
                onClick={() => setDisplayMode('table')}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  background: displayMode === 'table' ? 'var(--accent-emerald)' : 'transparent',
                  color: displayMode === 'table' ? '#000000' : 'var(--text-secondary)',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                <Table size={15} /> Таблица specs
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="catalog-tabs-editorial">
            {[
              { id: 'all', label: 'Все позиции (450+)' },
              { id: 'armatura', label: 'Арматура' },
              { id: 'pipes', label: 'Трубы' },
              { id: 'sheets', label: 'Листы' },
              { id: 'shaped', label: 'Балка & Швеллер' }
            ].map(tab => (
              <button 
                key={tab.id}
                className={`tab-btn-editorial ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* CARDS DISPLAY WITH FRAMER MOTION */}
          {displayMode === 'cards' ? (
            <motion.div className="catalog-grid-editorial" layout>
              <AnimatePresence>
                {filteredProducts.map((prod) => (
                  <motion.div
                    key={prod.id}
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.4 }}
                    className="product-card-editorial"
                  >
                    <div className="product-header-editorial">
                      <div>
                        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                          POSITION #{prod.code}
                        </span>
                        <h3 className="product-title-editorial">{prod.title}</h3>
                      </div>
                      <span className="product-badge">{prod.tag}</span>
                    </div>

                    <div className="product-body-editorial">
                      <p style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-emerald)', marginBottom: '8px' }}>
                        {prod.subtitle}
                      </p>
                      <p className="product-desc-editorial">{prod.desc}</p>

                      <div className="product-specs-box">
                        {prod.specs.map((sp, idx) => (
                          <div key={idx} className="spec-row">
                            <span className="spec-label">{sp.label}:</span>
                            <span className="spec-value">{sp.value}</span>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: 'auto' }}>
                        <motion.button 
                          onClick={() => setIsCalcOpen(true)}
                          className="btn-editorial btn-outline-glass" 
                          style={{ padding: '10px', fontSize: '12px' }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Sparkles size={14} color="#10B981" /> Расчёт кг
                        </motion.button>
                        <motion.a 
                          href="viber://chat?number=%2B37368471530" 
                          className="btn-editorial btn-viber" 
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
            </motion.div>
          ) : (
            /* TABLE DISPLAY */
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-surface-dark)', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase' }}>
                    <th style={{ padding: '16px 24px' }}>Code</th>
                    <th style={{ padding: '16px 24px' }}>Наименование</th>
                    <th style={{ padding: '16px 24px' }}>Размеры / Сечения</th>
                    <th style={{ padding: '16px 24px' }}>Стандарт</th>
                    <th style={{ padding: '16px 24px', textAlign: 'right' }}>Действие</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((prod) => (
                    <tr key={prod.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '16px 24px', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', fontWeight: '700' }}>#{prod.code}</td>
                      <td style={{ padding: '16px 24px' }}>
                        <strong style={{ display: 'block', color: 'var(--text-primary)' }}>{prod.title}</strong>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{prod.subtitle}</span>
                      </td>
                      <td style={{ padding: '16px 24px', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>
                        {prod.specs[1]?.value || '—'}
                      </td>
                      <td style={{ padding: '16px 24px' }}>
                        <span className="product-badge">{prod.tag}</span>
                      </td>
                      <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                        <a href="tel:+37368471530" className="btn-editorial btn-emerald" style={{ padding: '6px 14px', fontSize: '12px' }}>
                          <Phone size={13} /> Звонок
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Interactive Trigger Banner */}
          <div style={{ marginTop: '56px', background: 'rgba(16, 185, 129, 0.06)', border: '1px solid var(--border-emerald)', borderRadius: 'var(--radius-md)', padding: '32px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: '#FFFFFF', marginBottom: '6px' }}>Требуется нестандартная спецификация?</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Воспользуйтесь интерактивным калькулятором веса и сформируйте запрос прямо дежурному инженеру.</p>
            </div>
            <button onClick={() => setIsCalcOpen(true)} className="btn-editorial btn-emerald" style={{ padding: '14px 28px' }}>
              <Sparkles size={16} /> Открыть Калькулятор Веса <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Modal Spec Calculator */}
      {isCalcOpen && <SpecCalculator onClose={() => setIsCalcOpen(false)} />}
    </>
  );
}
