import React, { useState } from 'react';
import { Phone, MessageSquare, Table, LayoutGrid, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState('all');
  const [displayMode, setDisplayMode] = useState('cards'); // 'cards' or 'table'

  const products = [
    {
      id: 'armatura',
      code: '01',
      category: 'armatura',
      title: 'Арматура А500С / А400',
      subtitle: 'Гладкая и периодического профиля (Ø 8 – 32 мм)',
      desc: 'Высокопрочная стальная арматура для монолитного строительства, фундаментов, ЖБИ изделий и несущих каркасов.',
      tag: 'ГОСТ 34028 / А500С',
      specs: [
        { label: 'Марка стали', value: 'А500С / А400 / 35ГС' },
        { label: 'Диаметры в наличии', value: '8, 10, 12, 14, 16, 18, 20, 22, 25, 28, 32 мм' },
        { label: 'Длина прутков', value: 'Мерная 11.7 м / Немерная' },
        { label: 'Назначение', value: 'Монолитные каркасы, армопояса' },
      ]
    },
    {
      id: 'pipes_round',
      code: '02',
      category: 'pipes',
      title: 'Круглая стальная труба',
      subtitle: 'Водогазопроводная и электросварная',
      desc: 'Стальные трубы различных диаметров и толщины стенки для инженерных сетей, металлоконструкций и гидросистем.',
      tag: 'ГОСТ 3262-75 / ГОСТ 10704-91',
      specs: [
        { label: 'Диаметры наружные', value: 'от 15 мм до 219+ мм (1/2" — 8")' },
        { label: 'Толщина стенки', value: 'от 2.0 мм до 8.0 мм' },
        { label: 'Стандарты', value: 'ГОСТ, EN 10217, EN 10255' },
        { label: 'Назначение', value: 'ВГП, Несущие строительные стойки' },
      ]
    },
    {
      id: 'pipes_prof',
      code: '03',
      category: 'pipes',
      title: 'Профильная труба',
      subtitle: 'Квадратное и прямоугольное сечение',
      desc: 'Профильный прокат с точной геометрией сечения для навесов, заборов, ангаров, легких ферм и строительных лесов.',
      tag: 'ГОСТ 8639-82 / ГОСТ 8645-68',
      specs: [
        { label: 'Сечения квадратные', value: '15х15, 20х20, 40х40, 60х60, 80х80, 100х100 мм' },
        { label: 'Прямоугольные', value: '40х20, 50х25, 60х40, 80х40, 100х50 мм' },
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
      tag: 'ГОСТ 19903-2015 / ГОСТ 19904-90',
      specs: [
        { label: 'Толщина листовая', value: 'от 0.5 мм до 50.0 мм' },
        { label: 'Габариты раскроя', value: '1000х2000, 1250х2500, 1500х6000 мм' },
        { label: 'Виды поверхности', value: 'Гладкий, Рифленый (Чечевица/Ромб), Оцинк' },
        { label: 'Сервис', value: 'Высокоточная резка гильотиной / плазмой' },
      ]
    },
    {
      id: 'beams',
      code: '05',
      category: 'shaped',
      title: 'Двутавровая балка (Н-образная)',
      subtitle: 'Профиль 10Б1 — 30Б1 / К1 / К2',
      desc: 'Горячекатаный фасонный прокат Н-образного сечения для высоких несущих нагрузок, межэтажных перекрытий и колонн.',
      tag: 'ГОСТ 8239-89 / СТО АСЧМ 20-93',
      specs: [
        { label: 'Профильные серии', value: 'Балка Б1, Б2, К1, К2' },
        { label: 'Высота профиля', value: 'от 100 мм до 300+ мм' },
        { label: 'Стандартная длина', value: 'Мерные 12.0 м / Нестандарт под заказ' },
        { label: 'Марка стали', value: 'Ст3сп / 09Г2С' },
      ]
    },
    {
      id: 'channels',
      code: '06',
      category: 'shaped',
      title: 'Швеллер и Уголок стальной',
      subtitle: 'П-образный и равнополочный / неравнополочный',
      desc: 'Фасонные элементы для армирования стен, создания станин техники, прогонов и сопряжения балочных конструкций.',
      tag: 'ГОСТ 8240-97 / ГОСТ 8509-93',
      specs: [
        { label: 'Швеллер серий', value: '№ 5U, 6.5U, 8U, 10U, 12U, 14U — 30U' },
        { label: 'Уголок равнополочный', value: '25х25, 32х32, 40х40, 50х50 — 125х125 мм' },
        { label: 'Толщина полки', value: 'от 3.0 мм до 12.0 мм' },
        { label: 'Обработка', value: 'Резка в размер на лентопильных станках' },
      ]
    },
    {
      id: 'wire_rod',
      code: '07',
      category: 'wire',
      title: 'Проволока и Катанка',
      subtitle: 'Вязальная, общепромышленная и катанка в бухтах',
      desc: 'Стальная катанка и термически обработанная вязальная проволока для увязки арматурных каркасов и производства изделий.',
      tag: 'ГОСТ 30136-95 / ГОСТ 3282-74',
      specs: [
        { label: 'Катанка диаметром', value: 'Ø 5.5 мм, 6.5 мм, 8.0 мм' },
        { label: 'Проволока вязальная', value: 'Ø 1.2 мм, 1.4 мм, 2.0 мм, 3.0 мм' },
        { label: 'Форма поставки', value: 'Бухты 100-500 кг / Прутки' },
        { label: 'Свойства', value: 'Высокая пластичность, мягкий отжиг' },
      ]
    },
    {
      id: 'mesh',
      code: '08',
      category: 'wire',
      title: 'Сетка кладочная и Рабица',
      subtitle: 'Сварная армирующая сетка в картах и рулонах',
      desc: 'Сварная стальная сетка для армирования стяжек пола, кладки кирпича и газоблоков, а также плетёная сетка-рабица.',
      tag: 'ГОСТ 23279-2012 / ГОСТ 5336-80',
      specs: [
        { label: 'Размер ячейки', value: '50х50, 100х100, 150х150, 200х200 мм' },
        { label: 'Диаметр проволоки', value: 'Ø 3.0 мм, 4.0 мм, 5.0 мм (ВР-1)' },
        { label: 'Формат карт', value: '0.5х2.0 м, 1.0х2.0 м, 2.0х3.0 м' },
        { label: 'Назначение', value: 'Кладочные работы, стяжка, ограждения' },
      ]
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section className="section" id="catalog">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Складской ассортимент</span>
          <h2>Каталог продуктовых групп металлопроката</h2>
          <p>
            450+ товарных позиций в наличии на базах и логистическом хабе в Молдове. 
            Каждая партия сопровождена сертификатами завода-изготовителя.
          </p>

          {/* Display Mode Toggle (Cards vs Table) */}
          <div style={{ display: 'inline-flex', background: '#E8F0EC', padding: '4px', borderRadius: 'var(--radius-full)', marginTop: '20px' }}>
            <button 
              onClick={() => setDisplayMode('cards')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: displayMode === 'cards' ? '#134E3C' : 'transparent',
                color: displayMode === 'cards' ? '#FFFFFF' : '#4B6358',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <LayoutGrid size={15} /> Студийные карточки
            </button>
            <button 
              onClick={() => setDisplayMode('table')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: displayMode === 'table' ? '#134E3C' : 'transparent',
                color: displayMode === 'table' ? '#FFFFFF' : '#4B6358',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Table size={15} /> Инженерная таблица
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="catalog-tabs">
          <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>Все позиции (450+)</button>
          <button className={`tab-btn ${activeTab === 'armatura' ? 'active' : ''}`} onClick={() => setActiveTab('armatura')}>Арматура</button>
          <button className={`tab-btn ${activeTab === 'pipes' ? 'active' : ''}`} onClick={() => setActiveTab('pipes')}>Трубы</button>
          <button className={`tab-btn ${activeTab === 'sheets' ? 'active' : ''}`} onClick={() => setActiveTab('sheets')}>Листовой прокат</button>
          <button className={`tab-btn ${activeTab === 'shaped' ? 'active' : ''}`} onClick={() => setActiveTab('shaped')}>Балка & Швеллер</button>
          <button className={`tab-btn ${activeTab === 'wire' ? 'active' : ''}`} onClick={() => setActiveTab('wire')}>Сетка & Проволока</button>
        </div>

        {/* MODE 1: EXECUTIVE IMAGE-FREE CARDS */}
        {displayMode === 'cards' ? (
          <div className="catalog-grid">
            {filteredProducts.map((prod) => (
              <div key={prod.id} className="product-card-text">
                <div className="product-card-text-header">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.08em', color: '#A3D9C9', textTransform: 'uppercase' }}>
                      Позиция {prod.code}
                    </span>
                    <span style={{ background: 'rgba(255,255,255,0.12)', color: '#FFFFFF', padding: '3px 10px', borderRadius: 'var(--radius-sm)', fontSize: '11px', fontWeight: '800' }}>
                      {prod.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#FFFFFF', lineHeight: '1.2' }}>{prod.title}</h3>
                  <p style={{ fontSize: '12px', fontWeight: '700', color: '#4ADE80', marginTop: '4px' }}>{prod.subtitle}</p>
                </div>

                <div className="product-card-text-body">
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '18px' }}>
                    {prod.desc}
                  </p>

                  <div className="product-specs">
                    {prod.specs.map((sp, idx) => (
                      <div key={idx} className="product-spec-row">
                        <span>{sp.label}:</span>
                        <strong>{sp.value}</strong>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-green)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <a href="tel:+37368471530" className="btn btn-brand" style={{ padding: '10px', fontSize: '12px' }}>
                      <Phone size={14} /> Позвонить
                    </a>
                    <a href="viber://chat?number=%2B37368471530" className="btn btn-viber" style={{ padding: '10px', fontSize: '12px' }}>
                      <MessageSquare size={14} /> Viber
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* MODE 2: EXECUTIVE DATA TABLE */
          <div style={{ background: '#FFFFFF', border: '1px solid var(--border-green)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-dark-green)', color: '#FFFFFF', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <th style={{ padding: '16px 20px' }}>№</th>
                    <th style={{ padding: '16px 20px' }}>Наименование проката</th>
                    <th style={{ padding: '16px 20px' }}>Доступные сечения / Диаметры</th>
                    <th style={{ padding: '16px 20px' }}>Стандарт ГОСТ / EN</th>
                    <th style={{ padding: '16px 20px' }}>Марки стали</th>
                    <th style={{ padding: '16px 20px', textAlign: 'right' }}>Связь</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((prod, idx) => (
                    <tr key={prod.id} style={{ borderBottom: '1px solid var(--border-green)', background: idx % 2 === 0 ? '#FFFFFF' : '#F4F7F5' }}>
                      <td style={{ padding: '16px 20px', fontWeight: '800', color: 'var(--brand-green)' }}>{prod.code}</td>
                      <td style={{ padding: '16px 20px' }}>
                        <strong style={{ display: 'block', color: 'var(--bg-dark-green)', fontSize: '15px' }}>{prod.title}</strong>
                        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{prod.subtitle}</span>
                      </td>
                      <td style={{ padding: '16px 20px', fontWeight: '700', color: 'var(--text-dark)' }}>
                        {prod.specs[1]?.value || 'По запросу'}
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: 'var(--text-muted)' }}>
                        <span style={{ background: 'var(--brand-green-light)', color: 'var(--brand-green)', padding: '2px 8px', borderRadius: 'var(--radius-sm)', fontWeight: '700' }}>
                          {prod.tag}
                        </span>
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>
                        {prod.specs[0]?.value || 'Ст3сп / А500С'}
                      </td>
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: '8px' }}>
                          <a href="tel:+37368471530" className="btn btn-brand" style={{ padding: '6px 12px', fontSize: '12px' }}>
                            <Phone size={13} /> Звонок
                          </a>
                          <a href="viber://chat?number=%2B37368471530" className="btn btn-viber" style={{ padding: '6px 12px', fontSize: '12px' }}>
                            <MessageSquare size={13} /> Viber
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
      </div>
    </section>
  );
}
