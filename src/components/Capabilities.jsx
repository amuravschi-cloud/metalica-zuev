import React from 'react';
import { Scissors, Layers, Wrench, Truck, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

export default function Capabilities() {
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
      desc: 'Все металлобазы оборудованы heavy-duty козловыми и мостовыми кранами для безопасной и оперативной отгрузки длинномеров.'
    },
    {
      icon: <Truck size={26} />,
      title: 'Доставка по всей Молдове',
      desc: 'Собственный логистический автопарк длинномеров (12м) и шаланд. Быстрая доставка прямо на вашу строительную площадку.'
    }
  ];

  return (
    <section className="section-industrial" id="capabilities" style={{ background: '#F1F5F9' }}>
      <div className="container">
        <div className="section-header-industrial">
          <span className="section-tag-industrial">Сервис & Логистика</span>
          <h2>Не просто отгружаем. Готовим металл к работе.</h2>
          <p>Обеспечиваем полный цикл складской подготовки: от резки в размер до быстрой отгрузки козловыми кранами.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
          {capabilitiesList.map((cap, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '32px 24px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '54px', height: '54px', background: 'var(--brand-green-light)', color: 'var(--brand-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                {cap.icon}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px', color: 'var(--text-dark)' }}>{cap.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
