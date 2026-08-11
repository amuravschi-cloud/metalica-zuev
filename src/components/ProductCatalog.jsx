import React, { useState } from 'react';
import { Phone, MessageSquare, Table, LayoutGrid, Calculator, ShieldCheck, Sparkles } from 'lucide-react';
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
      desc: 'Высокопрочная стальная арматура для монолитного строительства, фундаментов, ЖБИ изделий и несущих пространственных каркасов.',
      tag: 'ГОСТ 34028 / А500С',
      image: './images/rebar.png',
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
      tag: 'ГОСТ 8639-82 / 8645-68',
      image: './images/pipes.png',
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
      tag: 'ГОСТ 3262-75 / 10704-91',
      image: './images/pipes.png',
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
      image: './images/sheets.png',
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
      image: './images/beams.png',
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
      image: './images/beams.png',
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
      <section className="section-industrial" id="catalog" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header-industrial">
            <span className="section-tag-industrial">Складской запас в наличии</span>
            <h2>Каталог стального металлопроката</h2>
            <p>
              450+ товарных позиций в постоянной готовности на базах в Кишинёве, Оргееве и Сынжере. 
              Каждая партия отгружается с прямым заводским сертификатом качества.
            </p>

            {/* Display Mode Toggle */}
            <div style={{ display: 'inline-flex', background: '#E2E8F0', padding: '4px', borderRadius: 'var(--radius-full)', marginTop: '20px' }}>
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
                  gap: '8px'
                }}
              >
                <LayoutGrid size={15} /> Фото-карточки проката
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
                  gap: '8px'
                }}
              >
                <Table size={15} /> Инженерная спецификация
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
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
                  border: '1px solid var(--border-light)',
                  background: activeTab === tab.id ? 'var(--brand-green)' : '#FFFFFF',
                  color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-dark)',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === tab.id ? '0 4px 12px rgba(6,78,59,0.2)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* DISPLAY MODE 1: CARDS WITH REAL STEEL PHOTOS */}
          {displayMode === 'cards' ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
              {filteredProducts.map((prod) => (
                <div key={prod.id} className="product-card-photo">
                  {/* REAL METAL PRODUCT PHOTO */}
                  <div className="product-photo-container">
                    <img src={prod.image} alt={prod.title} />
                    <span className="product-photo-tag">{prod.tag}</span>
                  </div>

                  <div className="product-photo-body">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: '800', color: 'var(--brand-green)', textTransform: 'uppercase' }}>
                        ПОЗИЦИЯ #{prod.code}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '4px' }}>
                      {prod.title}
                    </h3>
                    <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--brand-green)', marginBottom: '10px' }}>
                      {prod.subtitle}
                    </p>

                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '16px' }}>
                      {prod.desc}
                    </p>

                    <div className="product-specs-table-mini">
                      {prod.specs.map((sp, idx) => (
                        <div key={idx} className="product-spec-row-mini">
                          <span>{sp.label}:</span>
                          <strong>{sp.value}</strong>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <button onClick={() => setIsCalcOpen(true)} className="btn-industrial btn-outline-steel" style={{ padding: '10px', fontSize: '12px' }}>
                        <Calculator size={14} /> Расчёт массы
                      </button>
                      <a href="viber://chat?number=%2B37368471530" className="btn-industrial btn-viber-industrial" style={{ padding: '10px', fontSize: '12px' }}>
                        <MessageSquare size={14} /> Viber
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* DISPLAY MODE 2: ENGINEERING DATA TABLE */
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ background: '#0F172A', color: '#FFFFFF', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
                      <th style={{ padding: '16px 20px' }}>№</th>
                      <th style={{ padding: '16px 20px' }}>Наименование металлопроката</th>
                      <th style={{ padding: '16px 20px' }}>Доступные сечения / Диаметры</th>
                      <th style={{ padding: '16px 20px' }}>Стандарт ГОСТ / EN</th>
                      <th style={{ padding: '16px 20px' }}>Марка стали</th>
                      <th style={{ padding: '16px 20px', textAlign: 'right' }}>Связь</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((prod, idx) => (
                      <tr key={prod.id} style={{ borderBottom: '1px solid var(--border-subtle)', background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
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
                          <div style={{ display: 'inline-flex', gap: '8px' }}>
                            <a href="tel:+37368471530" className="btn-industrial btn-brand-green" style={{ padding: '6px 14px', fontSize: '12px' }}>
                              <Phone size={13} /> Звонок
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Interactive Calculator Banner */}
          <div style={{ marginTop: '56px', background: '#0F172A', color: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '36px 44px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h4 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '6px' }}>Требуется быстрый расчёт массы партий?</h4>
              <p style={{ fontSize: '15px', color: '#94A3B8' }}>Рассчитайте масса-длину по справочным ГОСТам в пару кликов и запросите точную накладную.</p>
            </div>
            <button onClick={() => setIsCalcOpen(true)} className="btn-industrial btn-amber" style={{ padding: '14px 28px' }}>
              <Calculator size={18} /> Открыть Калькулятор Металла
            </button>
          </div>
        </div>
      </section>

      {/* Modal Spec Calculator */}
      {isCalcOpen && <SpecCalculator onClose={() => setIsCalcOpen(false)} />}
    </>
  );
}
