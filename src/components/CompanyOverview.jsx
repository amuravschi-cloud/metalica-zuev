import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Truck, Phone, MessageSquare, Compass } from 'lucide-react';

export default function CompanyOverview() {
  return (
    <section className="section-v4" id="company" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '52px', alignItems: 'center' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-tag-v4">О компании Metalica Zuev</span>
            <h2 style={{ fontSize: '42px', fontWeight: '800', margin: '14px 0 20px 0', color: 'var(--text-dark)', lineHeight: '1.1' }}>
              30 лет фундаментальной надёжности в Республике Молдова
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
              <strong style={{ color: 'var(--text-dark)' }}>Metalica Zuev SRL</strong> — крупнейший поставщик чёрного металлопроката. С 1995 года мы снабжаем ключевые строительные и промышленные объекты страны металлом высших марок.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>
              Прямое сотрудничество с мировыми металлургическими комбинатами гарантирует честную толщину стенок, строгое соблюдение ГОСТ / EN 10025 и рекордный ассортимент из 450+ позиций.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <motion.a 
                href="tel:+37368471530" 
                className="btn-v4 btn-v4-emerald"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={16} /> Связаться с отделом продаж
              </motion.a>
              <motion.a 
                href="viber://chat?number=%2B37368471530" 
                className="btn-v4 btn-v4-viber"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageSquare size={16} /> Viber ↗
              </motion.a>
            </div>
          </div>

          {/* REAL INDUSTRIAL STEEL BEAMS DEPOT PHOTO */}
          <motion.div 
            className="metal-plate-heavy"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="metal-plate-head-riveted">
              <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '800' }}>Открытый склад фасонного проката</h4>
              <p style={{ fontSize: '12px', color: '#4ADE80', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                ДВУТАВРЫ, ШВЕЛЛЕРЫ, УГОЛКИ НА СТЕЛЛАЖАХ
              </p>
            </div>
            <div style={{ height: '340px', overflow: 'hidden' }}>
              <img 
                src="./images/steel_beams_depot.jpg" 
                alt="Steel Beams Depot" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
