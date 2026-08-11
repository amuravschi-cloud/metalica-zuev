import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Truck, Phone, MessageSquare, Compass } from 'lucide-react';

export default function CompanyOverview() {
  return (
    <section className="section-metal" id="company">
      <div className="container">
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '52px', alignItems: 'center' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-eyebrow-metal">
              <Compass size={14} color="#34D399" /> Наследие & Стандарты Metalica Zuev
            </div>

            <h2 style={{ fontSize: '42px', fontWeight: '800', margin: '14px 0 20px 0', color: '#FFFFFF', lineHeight: '1.1' }}>
              30 лет фундаментальной надёжности в Республике Молдова
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '20px' }}>
              <strong style={{ color: '#FFFFFF' }}>Metalica Zuev SRL</strong> — крупнейший поставщик чёрного металлопроката. С 1995 года мы снабжаем ключевые строительные и промышленные объекты страны металлом высших марок.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '32px' }}>
              Прямое сотрудничество с мировыми металлургическими комбинатами гарантирует честную толщину стенок, строгое соблюдение ГОСТ / EN и рекордный ассортимент из 450+ позиций.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <motion.a 
                href="tel:+37368471530" 
                className="btn-metal btn-metal-emerald"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={16} /> Связаться с отделом продаж
              </motion.a>
              <motion.a 
                href="viber://chat?number=%2B37368471530" 
                className="btn-metal btn-metal-viber"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageSquare size={16} /> Viber ↗
              </motion.a>
            </div>
          </div>

          {/* REAL INDUSTRIAL METAL CUTTING PHOTO FRAME */}
          <motion.div 
            className="metal-plate-card"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="metal-rivet-head">
              <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '800' }}>Металлообработка и Резка в Размер</h4>
              <p style={{ fontSize: '12px', color: 'var(--text-emerald)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                СТАНКИ ЛЕНТОПИЛА И ПЛАЗМЫ
              </p>
            </div>
            <div style={{ height: '340px', overflow: 'hidden' }}>
              <img 
                src="./images/steel_cutting.jpg" 
                alt="Steel Cutting with Sparks" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
