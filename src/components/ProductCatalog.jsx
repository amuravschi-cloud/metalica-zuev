import React, { useState } from 'react';
import { Phone, MessageSquare, Shield, Layers, FileText } from 'lucide-react';
import { RebarSchematic, PipeSchematic, SheetSchematic, BeamSchematic } from './TechnicalSchematics';

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('schematic');

  const products = [
    {
      id: 'armatura',
      category: 'armatura',
      title: 'Арматура А500С / А400 (Ø 8 - 32 мм)',
      subtitle: 'Гладкая и периодического профиля для монолита',
      desc: 'Высокопрочная стальная арматура для монолитного строительства, фундаментов, ЖБИ изделий и несущих каркасов.',
      schematic: <RebarSchematic />,
      photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      tag: 'ГОСТ 34028 / А500С',
      rustFree: true,
      specs: [
        { label: 'Марка стали', value: 'А500С / А400 / 35ГС' },
        { label: 'Диаметры', value: '8 мм, 10 мм, 12 мм, 14 мм, 16-32 мм' },
        { label: 'Длина', value: 'Мерная 11.7м / Немерная' },
      ]
    },
    {
      id: 'pipes_round',
      category: 'pipes',
      title: 'Круглая труба (ВГП / Электросварная)',
      subtitle: 'Водогазопроводные и магистральные трубы',
      desc: 'Стальные трубы различных диаметров и толщины стенки для инженерных сетей, металлоконструкций и гидросистем.',
      schematic: <PipeSchematic />,
      photo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      tag: 'ГОСТ и EN стандарты',
      rustFree: true,
      specs: [
        { label: 'Диаметры', value: 'от 15 мм до 219+ мм' },
        { label: 'Толщина стенки', value: 'от 2.0 мм до 8.0 мм' },
        { label: 'Назначение', value: 'ВГП, Несущие конструкции' },
      ]
    },
    {
      id: 'pipes_prof',
      category: 'pipes',
      title: 'Профильная труба (Квадратная / Прямоугольная)',
      subtitle: 'Для быстровозводимых зданий и каркасов',
      desc: 'Профильный прокат с точной геометрией сечения для навесов, заборов, ангаров и строительных лесов.',
      schematic: <PipeSchematic />,
      photo: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      tag: 'Высокая прочность',
      rustFree: true,
      specs: [
        { label: 'Сечения', value: '15х15 мм — 120х120 мм' },
        { label: 'Толщина', value: '1.5 мм — 6.0 мм' },
        { label: 'Стандарты', value: 'ГОСТ 8639-82, ГОСТ 8645-68' },
      ]
    },
    {
      id: 'sheets',
      category: 'sheets',
      title: 'Листовой прокат (Г/К, Х/К, Оцинкованный)',
      subtitle: 'Листы и рулоны промышленного назначения',
      desc: 'Гладкий, оцинкованный и рифленый листовой металл для производства, штамповки и фасадных элементов.',
      schematic: <SheetSchematic />,
      photo: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      tag: 'Точный раскрой',
      rustFree: true,
      specs: [
        { label: 'Толщины', value: 'от 0.5 мм до 50 мм' },
        { label: 'Раскрой', value: '1000х2000, 1250х2500, 1500х6000' },
        { label: 'Обработка', value: 'Резка гильотиной / плазмой' },
      ]
    },
    {
      id: 'beams',
      category: 'shaped',
      title: 'Двутавровая балка (10Б1 — 30Б1)',
      subtitle: 'Несущие двутавры для перекрытий и мостов',
      desc: 'Горячекатаный фасонный прокат Н-образного сечения для высоких нагрузок и межэтажных перекрытий.',
      schematic: <BeamSchematic />,
      photo: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      tag: 'Максимальные нагрузки',
      rustFree: true,
      specs: [
        { label: 'Профиль', value: 'Б1, Б2, К1, К2' },
        { label: 'Высота', value: 'от 100 мм до 300+ мм' },
        { label: 'Длина', value: 'До 12.0 м' },
      ]
    },
    {
      id: 'channels',
      category: 'shaped',
      title: 'Швеллер и Уголок стальной',
      subtitle: 'П-образный и равнополочный профиль',
      desc: 'Фасонные элементы для армирования стен, создания рамы техники и сопряжения балочных конструкций.',
      schematic: <BeamSchematic />,
      photo: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      tag: 'ГОСТ сертификация',
      rustFree: true,
      specs: [
        { label: 'Швеллер', value: '№ 5U, 8U, 10U, 12U, 14U — 30U' },
        { label: 'Уголок', value: '25х25 мм — 125х125 мм' },
        { label: 'Марка', value: 'Ст3сп / 09Г2С' },
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
          <h2>Каталог продуктовых групп проката</h2>
          <p>
            450+ товарных позиций в наличии на базах. Каждая партия сопровождается заводскими сертификатами.
          </p>

          {/* Toggle schematic or photos */}
          <div style={{ display: 'inline-flex', background: '#E8F0EC', padding: '4px', borderRadius: 'var(--radius-full)', marginTop: '20px' }}>
            <button 
              onClick={() => setViewMode('schematic')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: viewMode === 'schematic' ? '#134E3C' : 'transparent',
                color: viewMode === 'schematic' ? '#FFFFFF' : '#4B6358',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <FileText size={14} /> CAD-чертежи
            </button>
            <button 
              onClick={() => setViewMode('photo')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: viewMode === 'photo' ? '#134E3C' : 'transparent',
                color: viewMode === 'photo' ? '#FFFFFF' : '#4B6358',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Layers size={14} /> Фото производства
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="catalog-tabs">
          <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>Все позиции (450+)</button>
          <button className={`tab-btn ${activeTab === 'armatura' ? 'active' : ''}`} onClick={() => setActiveTab('armatura')}>Арматура</button>
          <button className={`tab-btn ${activeTab === 'pipes' ? 'active' : ''}`} onClick={() => setActiveTab('pipes')}>Трубы</button>
          <button className={`tab-btn ${activeTab === 'sheets' ? 'active' : ''}`} onClick={() => setActiveTab('sheets')}>Листовой прокат</button>
          <button className={`tab-btn ${activeTab === 'shaped' ? 'active' : ''}`} onClick={() => setActiveTab('shaped')}>Балка, Швеллер & Уголок</button>
        </div>

        {/* Catalog Grid */}
        <div className="catalog-grid">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="product-card">
              <div className="product-img-wrapper">
                {viewMode === 'schematic' ? prod.schematic : <img src={prod.photo} alt={prod.title} loading="lazy" />}
                <span className="product-tag">{prod.tag}</span>
              </div>

              <div className="product-body">
                <h3 className="product-title">{prod.title}</h3>
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
                  <a href="tel:+37368471530" className="btn btn-brand" style={{ padding: '8px 10px', fontSize: '12px' }}>
                    <Phone size={14} /> Позвонить
                  </a>
                  <a href="https://wa.me/37368471530" target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ padding: '8px 10px', fontSize: '12px' }}>
                    <MessageSquare size={14} /> WhatsApp
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
