import React, { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      id: 'armatura',
      category: 'armatura',
      title: 'Арматура А500С / А400',
      subtitle: 'Гладкая и периодического профиля (Ø 8 - 32 мм)',
      desc: 'Высокопрочная стальная арматура для монолитного строительства, фундаментов, ЖБИ изделий и несущих каркасов.',
      photo: './images/rebar.png',
      tag: 'ГОСТ 34028 / А500С',
      specs: [
        { label: 'Марка стали', value: 'А500С / А400 / 35ГС' },
        { label: 'Диаметры', value: '8, 10, 12, 14, 16–32 мм' },
        { label: 'Длина', value: 'Мерная 11.7м / Немерная' },
      ]
    },
    {
      id: 'pipes_round',
      category: 'pipes',
      title: 'Круглая труба',
      subtitle: 'Водогазопроводная и электросварная',
      desc: 'Стальные трубы различных диаметров и толщины стенки для инженерных сетей, металлоконструкций и гидросистем.',
      photo: './images/pipes.png',
      tag: 'ГОСТ и EN стандарты',
      specs: [
        { label: 'Диаметры', value: 'от 15 мм до 219+ мм' },
        { label: 'Толщина стенки', value: 'от 2.0 мм до 8.0 мм' },
        { label: 'Назначение', value: 'ВГП, Несущие каркасы' },
      ]
    },
    {
      id: 'pipes_prof',
      category: 'pipes',
      title: 'Профильная труба',
      subtitle: 'Квадратная и прямоугольная стальная',
      desc: 'Профильный прокат с точной геометрией сечения для навесов, заборов, ангаров и строительных лесов.',
      photo: './images/pipes.png',
      tag: 'Высокая прочность',
      specs: [
        { label: 'Сечения', value: '15х15 мм — 120х120 мм' },
        { label: 'Толщина', value: '1.5 мм — 6.0 мм' },
        { label: 'Стандарты', value: 'ГОСТ 8639-82, 8645-68' },
      ]
    },
    {
      id: 'sheets',
      category: 'sheets',
      title: 'Листовой прокат',
      subtitle: 'Г/К, Х/К и Оцинкованный лист',
      desc: 'Гладкий, оцинкованный и рифленый листовой металл для производства, штамповки и фасадных элементов.',
      photo: './images/sheets.png',
      tag: 'Точный раскрой',
      specs: [
        { label: 'Толщины', value: 'от 0.5 мм до 50 мм' },
        { label: 'Раскрой', value: '1000х2000, 1250х2500, 1500х6000' },
        { label: 'Обработка', value: 'Резка гильотиной / плазмой' },
      ]
    },
    {
      id: 'beams',
      category: 'shaped',
      title: 'Двутавровая балка',
      subtitle: 'Профиль 10Б1 — 30Б1 (Н-образный)',
      desc: 'Горячекатаный фасонный прокат Н-образного сечения для высоких нагрузок и межэтажных перекрытий.',
      photo: './images/beams.png',
      tag: 'Максимальные нагрузки',
      specs: [
        { label: 'Профиль', value: 'Б1, Б2, К1, К2' },
        { label: 'Высота', value: 'от 100 мм до 300+ мм' },
        { label: 'Длина', value: 'До 12.0 м' },
      ]
    },
    {
      id: 'channels',
      category: 'shaped',
      title: 'Швеллер и Уголок',
      subtitle: 'П-образный и равнополочный профиль',
      desc: 'Фасонные элементы для армирования стен, создания рамы техники и сопряжения балочных конструкций.',
      photo: './images/beams.png',
      tag: 'ГОСТ сертификация',
      specs: [
        { label: 'Швеллер', value: '№ 5U, 8U, 10U — 30U' },
        { label: 'Уголок', value: '25х25 мм — 125х125 мм' },
        { label: 'Марка стали', value: 'Ст3сп / 09Г2С' },
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
            450+ позиций в наличии на металлобазах и логистическом хабе в Молдове. Каждая партия сопровождена сертификатами завода-изготовителя.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="catalog-tabs">
          <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>Все позиции (450+)</button>
          <button className={`tab-btn ${activeTab === 'armatura' ? 'active' : ''}`} onClick={() => setActiveTab('armatura')}>Арматура</button>
          <button className={`tab-btn ${activeTab === 'pipes' ? 'active' : ''}`} onClick={() => setActiveTab('pipes')}>Трубы</button>
          <button className={`tab-btn ${activeTab === 'sheets' ? 'active' : ''}`} onClick={() => setActiveTab('sheets')}>Листовой прокат</button>
          <button className={`tab-btn ${activeTab === 'shaped' ? 'active' : ''}`} onClick={() => setActiveTab('shaped')}>Балка, Швеллер & Уголок</button>
        </div>

        {/* Product Cards Grid */}
        <div className="catalog-grid">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={prod.photo} alt={prod.title} loading="lazy" />
                <span className="product-tag">{prod.tag}</span>
              </div>

              <div className="product-body">
                <h3 className="product-title">{prod.title}</h3>
                <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--brand-green)', marginBottom: '8px' }}>{prod.subtitle}</p>
                <p className="product-desc">{prod.desc}</p>

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
      </div>
    </section>
  );
}
