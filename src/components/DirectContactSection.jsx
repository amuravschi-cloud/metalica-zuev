import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function DirectContactSection() {
  return (
    <section className="section-metal" id="contact">
      <div className="container">
        <motion.div 
          className="metal-plate-card"
          style={{ padding: '64px 48px', textAlign: 'center', background: 'var(--metal-titanium-bg)' }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow-metal" style={{ margin: '0 auto 16px auto' }}>
            <ShieldCheck size={14} color="#34D399" /> Отдел продаж металлопроката
          </div>

          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#FFFFFF', marginBottom: '18px' }}>
            Готовы рассчитать спецификацию вашего объекта за 15 минут
          </h2>
          
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto 36px auto', lineHeight: '1.6' }}>
            Отправьте список нужных позиций (арматура, труба, двутавр). Дежурный менеджер металлобазы проверит фактические остатки на складе и подготовит точную накладную со спецскидкой.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <motion.a 
              href="tel:+37368471530" 
              className="btn-metal btn-metal-emerald" 
              style={{ padding: '16px 36px', fontSize: '15px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Phone size={18} /> Звонок: +373 68 47-15-30
            </motion.a>

            <motion.a 
              href="viber://chat?number=%2B37368471530" 
              className="btn-metal btn-metal-viber" 
              style={{ padding: '16px 32px', fontSize: '15px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <MessageSquare size={18} /> Написать в Viber <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
