import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function DirectContactSection() {
  return (
    <section className="section-editorial" id="contact">
      <div className="container">
        <motion.div 
          className="direct-action-editorial"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow" style={{ margin: '0 auto 16px auto' }}>
            <ShieldCheck size={14} color="#10B981" /> Отдел продаж и оптовых поставок
          </div>

          <h2>Готовы рассчитать ваш объект за 15 минут?</h2>
          
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto 36px auto', lineHeight: '1.6' }}>
            Направьте спецификацию или список требуемых позиций. Дежурный инженер Metalica Zuev проверит резерв на базах и предоставит выгодную накладную.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <motion.a 
              href="tel:+37368471530" 
              className="btn-editorial btn-emerald" 
              style={{ padding: '16px 36px', fontSize: '15px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Phone size={18} /> Звонок: +373 68 47-15-30
            </motion.a>

            <motion.a 
              href="viber://chat?number=%2B37368471530" 
              className="btn-editorial btn-viber" 
              style={{ padding: '16px 32px', fontSize: '15px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <MessageSquare size={18} /> Отправить заявку в Viber <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
