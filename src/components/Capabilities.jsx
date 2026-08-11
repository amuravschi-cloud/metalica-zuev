import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Layers, Wrench, Truck, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Capabilities() {
  const capabilitiesList = [
    {
      icon: Scissors,
      title: 'Высокоточная резка в размер',
      desc: 'Газовая, лентопильная и плазменная резка по вашей спецификации и чертежам. Готовые отрезки сразу под монтаж.'
    },
    {
      icon: Layers,
      title: 'Комплектация по ведомости VOR',
      desc: 'Соберём сборную партию из различных категорий (арматура + труба + швеллер) на одной машине с точностью до килограмма.'
    },
    {
      icon: Wrench,
      title: 'Козловые краны 15т и погрузка',
      desc: 'Все металлобазы оборудованы heavy-duty козловыми и мостовыми кранами для безопасной и оперативной отгрузки длинномеров.'
    },
    {
      icon: Truck,
      title: 'Доставка по всей Молдове',
      desc: 'Собственный логистический автопарк длинномеров (12м) и шаланд. Быстрая доставка прямо на вашу строительную площадку.'
    }
  ];

  return (
    <section className="section-v4" id="capabilities" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <div className="section-header-v4">
          <span className="section-tag-v4">Сервис & Логистика</span>
          <h2>Не просто отгружаем. Готовим металл к работе.</h2>
          <p>Обеспечиваем полный цикл складской подготовки: от резки в размер до быстрой отгрузки козловыми кранами.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
          {capabilitiesList.map((cap, idx) => (
            <motion.div 
              key={idx} 
              className="metal-plate-heavy"
              style={{ padding: '32px 26px' }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ width: '56px', height: '56px', background: 'var(--brand-green-light)', border: '1px solid var(--border-green)', color: 'var(--brand-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <cap.icon size={26} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px', color: 'var(--text-dark)' }}>{cap.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
