import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Truck, Layers, Wrench, CheckCircle2, Phone, MessageSquare, ShieldCheck } from 'lucide-react';

export default function Capabilities() {
  const capabilitiesList = [
    {
      icon: Scissors,
      title: 'Высокоточная резка в размер',
      desc: 'Лентопильная, плазменная и гильотинная резка точно по вашим чертежам. Готовые отрезки сразу готовы к монтажу.'
    },
    {
      icon: Layers,
      title: 'Сборные ведомости (VOR)',
      desc: 'Комплектуем сборные партии из 10+ наименований (арматура + труба + листы + балки) в один длинномер.'
    },
    {
      icon: Wrench,
      title: 'Heavy-Duty Козловые Краны',
      desc: 'Все базы оснащены мостовыми кранами для безотказной и безопасной погрузки любых объёмов и длинномеров.'
    },
    {
      icon: Truck,
      title: 'Экспресс-Доставка по РМ',
      desc: 'Собственный парк длинномеров (12м) и спецтехники. Доставляем прямо на строительный объект.'
    }
  ];

  return (
    <section className="section-editorial" id="capabilities" style={{ background: 'var(--bg-surface-dark)' }}>
      <div className="container">
        <div className="section-header-center">
          <div className="section-eyebrow">
            <ShieldCheck size={14} color="#10B981" /> Сервис & Сертифицированная Логистика
          </div>
          <h2>Подготовка и отгрузка металла</h2>
          <p>Полный цикл складской обработки и контроль качества каждой партии.</p>
        </div>

        <div className="catalog-grid-editorial">
          {capabilitiesList.map((cap, idx) => (
            <motion.div 
              key={idx} 
              className="product-card-editorial"
              style={{ padding: '32px' }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', width: '52px', height: '52px', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', marginBottom: '20px' }}>
                <cap.icon size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: '#FFFFFF', marginBottom: '10px' }}>{cap.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
