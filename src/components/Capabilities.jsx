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
      title: 'Козловые краны и погрузка',
      desc: 'Все металлобазы оборудованы heavy-duty козловыми и мостовыми кранами для безопасной и оперативной отгрузки длинномеров.'
    },
    {
      icon: Truck,
      title: 'Доставка по всей Молдове',
      desc: 'Собственный логистический автопарк длинномеров (12м) и шаланд. Быстрая доставка прямо на вашу строительную площадку.'
    }
  ];

  return (
    <section className="section-metal" id="capabilities" style={{ background: 'var(--bg-surface-dark)' }}>
      <div className="container">
        <div className="section-header-metal">
          <div className="section-eyebrow-metal">
            <ShieldCheck size={14} color="#34D399" /> Сервис & Логистика
          </div>
          <h2>Подготовка и отгрузка металла</h2>
          <p>Обеспечиваем полный цикл складской подготовки: от резки в размер до быстрой отгрузки козловыми кранами.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
          {capabilitiesList.map((cap, idx) => (
            <motion.div 
              key={idx} 
              className="metal-plate-card"
              style={{ padding: '32px 26px' }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ background: 'rgba(52, 211, 153, 0.12)', border: '1px solid var(--border-emerald)', width: '56px', height: '56px', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34D399', marginBottom: '20px' }}>
                <cap.icon size={26} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px', color: '#FFFFFF' }}>{cap.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
