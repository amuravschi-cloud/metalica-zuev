import React from 'react';
import { Scissors, Truck, Layers, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Capabilities({ onOpenModal }) {
  const capabilitiesList = [
    {
      icon: <Scissors size={26} />,
      title: 'Высокоточная резка в размер',
      desc: 'Газовая, лентопильная и плазменная резка по вашей спецификации и чертежам. Готовые отрезки сразу под монтаж.'
    },
    {
      icon: <Layers size={26} />,
      title: 'Комплектация по ведомости VOR',
      desc: 'Соберём сборную партию из различных категорий (арматура + труба + швеллер) на одной машине с точностью до килограмма.'
    },
    {
      icon: <Wrench size={26} />,
      title: 'Козловые краны и погрузка',
      desc: 'Все 3 металлобазы оборудованы heavy-duty козловыми и мостовыми кранами для безопасной и оперативной отгрузки длинномеров.'
    },
    {
      icon: <Truck size={26} />,
      title: 'Доставка по всей Молдове',
      desc: 'Собственный логистический автопарк длинномеров (12м) и шаланд. Быстрая доставка прямо на вашу строительную площадку.'
    }
  ];

  return (
    <section className="section" id="capabilities" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Сервис & Логистика</span>
          <h2>Не просто отгружаем. Готовим металл к работе.</h2>
          <p>
            Закрепляем персонального менеджера за каждой заявкой — от проверки ведомости до приемки товара на объекте.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilitiesList.map((cap, idx) => (
            <div key={idx} className="capability-card">
              <div className="capability-icon">{cap.icon}</div>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '50px', background: '#F8FAFC', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--brand-navy)', letterSpacing: '0.05em' }}>
              Гарантия надежности
            </span>
            <h3 style={{ fontSize: '26px', fontWeight: '800', margin: '8px 0 14px 0', color: 'var(--text-dark)' }}>
              Почему крупные застройщики выбирают Metalica Zuev?
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)' }}>
                <CheckCircle2 size={18} color="#16A34A" /> 100% сертификация металлопроката заводскими паспортами
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)' }}>
                <CheckCircle2 size={18} color="#16A34A" /> Хранение арматуры и листов без контакта с влажной землей
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)' }}>
                <CheckCircle2 size={18} color="#16A34A" /> Точное весовое взвешивание при выезде через автомобильные весы
              </div>
            </div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <h4 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--brand-navy)', marginBottom: '8px' }}>
              Обсудить комплексную поставку
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Загрузите вашу ведомость или спецификацию в удобном формате. Менеджер выйдет на связь за 7 минут.
            </p>
            <button 
              className="btn btn-navy"
              style={{ width: '100%' }}
              onClick={() => onOpenModal('Комплексная поставка по ведомости')}
            >
              Связаться с дежурным менеджером
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
