import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, ArrowUpRight, Compass } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <section className="hero-editorial" id="top">
        <div className="container">
          <motion.div 
            className="hero-grid-editorial"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-content-editorial">
              <motion.div variants={itemVariants} className="section-eyebrow">
                <ShieldCheck size={14} color="#10B981" /> Прямой заводской импорт · Республиканский масштаб
              </motion.div>

              <motion.h1 variants={itemVariants}>
                Металлопрокат <br />
                <span className="gradient-text">бескомпромиссного</span> <br />
                качества.
              </motion.h1>

              <motion.p variants={itemVariants} className="hero-lead-editorial">
                Самый большой складской резерв в Молдове: 450+ номенклатурных позиций проката на 3-х действующих металлобазах и центральном хабе. 
                Прямые отгрузки, плазменная & лентопильная резка и экспресс-доставка.
              </motion.p>

              <motion.div variants={itemVariants} className="hero-actions-editorial">
                <motion.a 
                  href="tel:+37368471530" 
                  className="btn-editorial btn-emerald"
                  style={{ padding: '16px 36px', fontSize: '15px' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Phone size={18} /> Связаться с отделом продаж
                </motion.a>

                <motion.a 
                  href="viber://chat?number=%2B37368471530" 
                  className="btn-editorial btn-viber"
                  style={{ padding: '16px 28px', fontSize: '15px' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageSquare size={18} /> Viber Консультация <ArrowUpRight size={16} />
                </motion.a>
              </motion.div>

              <motion.div variants={itemVariants} className="hero-stats-grid">
                <div className="stat-box">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Лет лидерства в РМ</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">450+</div>
                  <div className="stat-label">Позиций в наличии</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">3+1</div>
                  <div className="stat-label">Базы + Лог-хаб</div>
                </div>
              </motion.div>
            </div>

            {/* Right Editorial Showcase Box */}
            <motion.div variants={itemVariants}>
              <motion.div 
                className="hero-glass-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: '#FFFFFF' }}>Metalica Zuev SRL</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>ЭТАЛОН ПОСТАВОК С 1995 ГОДА</p>
                  </div>
                  <Compass size={28} color="#10B981" />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                  {[
                    'Крупнейший складской запас в Республике Молдова',
                    '100% заводская сертификация ГОСТ / EN 10025',
                    'Heavy-Duty погрузка козловыми кранами',
                    'Высокоточная резка в точный размер заказчика'
                  ].map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--text-primary)' }}>
                      <CheckCircle2 size={16} color="#10B981" /> {feat}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                  <a href="tel:+37368471530" className="btn-editorial btn-outline-glass" style={{ padding: '12px', fontSize: '13px' }}>
                    <Phone size={14} /> +373 68 47-15-30
                  </a>
                  <a href="viber://chat?number=%2B37368471530" className="btn-editorial btn-viber" style={{ padding: '12px', fontSize: '13px' }}>
                    <MessageSquare size={14} /> Viber Direct
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Motion Ticker Strip */}
      <div className="ticker-container" aria-label="Номенклатура проката">
        <div className="ticker-track">
          {[
            'АРМАТУРА А500С / А400',
            'ТРУБА ПРОФИЛЬНАЯ И КРУГЛАЯ',
            'ЛИСТОВОЙ ПРОКАТ Г/К И Х/К',
            'ДВУТАВРОВАЯ БАЛКА Б1 / Ш1',
            'ШВЕЛЛЕР И УГОЛОК ГОСТ',
            'СЕТКА СВАРНАЯ И КАТАНКА',
            'РЕЗКА В РАЗМЕР И КРАНЫ',
            'АРМАТУРА А500С / А400',
            'ТРУБА ПРОФИЛЬНАЯ И КРУГЛАЯ',
            'ЛИСТОВОЙ ПРОКАТ Г/К И Х/К',
            'ДВУТАВРОВАЯ БАЛКА Б1 / Ш1',
            'ШВЕЛЛЕР И УГОЛОК ГОСТ',
          ].map((item, index) => (
            <div className="ticker-item" key={index}>
              {item} <span className="highlight">◆</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
