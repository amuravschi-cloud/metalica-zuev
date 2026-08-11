import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, ArrowUpRight, Compass, Wrench } from 'lucide-react';

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
      <section className="hero-metal-photo" id="top">
        <div className="container">
          <motion.div 
            className="hero-grid-metal"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-content-metal">
              <motion.div variants={itemVariants} className="section-eyebrow-metal">
                <ShieldCheck size={14} color="#34D399" /> Прямой импорт стального проката по всей Молдове
              </motion.div>

              <motion.h1 variants={itemVariants}>
                Металлопрокат <br />
                <span className="highlight-steel">заводского</span> <br />
                качества.
              </motion.h1>

              <motion.p variants={itemVariants} className="hero-lead-metal">
                Самый большой складской резерв в Молдове: 450+ номенклатурных позиций проката на 3-х действующих металлобазах и центральном хабе. 
                Прямые отгрузки, резка в точный размер и экспресс-доставка.
              </motion.p>

              <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '56px' }}>
                <motion.a 
                  href="tel:+37368471530" 
                  className="btn-metal btn-metal-emerald"
                  style={{ padding: '16px 36px', fontSize: '15px' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Phone size={18} /> Звонок отделу продаж
                </motion.a>

                <motion.a 
                  href="viber://chat?number=%2B37368471530" 
                  className="btn-metal btn-metal-viber"
                  style={{ padding: '16px 28px', fontSize: '15px' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageSquare size={18} /> Viber Консультация <ArrowUpRight size={16} />
                </motion.a>
              </motion.div>

              <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', paddingTop: '32px', borderTop: '1px solid var(--border-chrome)' }}>
                <div className="steel-badge" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '16px 20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', fontWeight: '800', color: '#FFFFFF', lineHeight: '1' }}>30+ лет</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>Лидерства в РМ</span>
                </div>
                <div className="steel-badge" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '16px 20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', fontWeight: '800', color: 'var(--text-emerald)', lineHeight: '1' }}>450+</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>Позиций в наличии</span>
                </div>
                <div className="steel-badge" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '16px 20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', fontWeight: '800', color: '#FFFFFF', lineHeight: '1' }}>3+1</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>Базы + Хаб</span>
                </div>
              </motion.div>
            </div>

            {/* Right Metallic Plate Card */}
            <motion.div variants={itemVariants}>
              <motion.div 
                className="metal-plate-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
              >
                <div className="metal-rivet-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: '#FFFFFF' }}>Metalica Zuev SRL</h3>
                    <p style={{ fontSize: '12px', color: 'var(--text-emerald)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                      ЭТАЛОН ПОСТАВОК С 1995 ГОДА
                    </p>
                  </div>
                  <Wrench size={26} color="#34D399" />
                </div>

                <div className="metal-plate-body">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    {[
                      'Крупнейший складской запас металла в Республике Молдова',
                      '100% заводская сертификация ГОСТ / EN 10025',
                      'Heavy-Duty погрузка козловыми кранами 15т',
                      'Высокоточная плазменная и лентопильная резка'
                    ].map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--text-primary)', fontWeight: '600' }}>
                        <CheckCircle2 size={16} color="#34D399" /> {feat}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', paddingTop: '20px', borderTop: '1px solid var(--border-chrome)' }}>
                    <a href="tel:+37368471530" className="btn-metal btn-metal-emerald" style={{ padding: '12px', fontSize: '13px' }}>
                      <Phone size={14} /> +373 68 47-15-30
                    </a>
                    <a href="viber://chat?number=%2B37368471530" className="btn-metal btn-metal-viber" style={{ padding: '12px', fontSize: '13px' }}>
                      <MessageSquare size={14} /> Viber Direct
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Steel Ticker Strip */}
      <div style={{ background: '#070C12', borderY: '1px solid var(--border-chrome)', padding: '16px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div className="ticker-track">
          {[
            'АРМАТУРА А500С / А400 (Ø 8-32мм)',
            'ТРУБА ПРОФИЛЬНАЯ И КРУГЛАЯ',
            'ЛИСТОВОЙ ПРОКАТ Г/К И Х/К',
            'ДВУТАВРОВАЯ БАЛКА Б1 / Б2 / К1',
            'ШВЕЛЛЕР № 5U - 30U И УГОЛОК ГОСТ',
            'СЕТКА ВР-1 И ВЯЗАЛЬНАЯ ПРОВОЛОКА',
            'АРМАТУРА А500С / А400 (Ø 8-32мм)',
            'ТРУБА ПРОФИЛЬНАЯ И КРУГЛАЯ',
            'ЛИСТОВОЙ ПРОКАТ Г/К И Х/К',
            'ДВУТАВРОВАЯ БАЛКА Б1 / Б2 / К1',
          ].map((item, index) => (
            <div key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '13px', fontWeight: '800', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', paddingRight: '40px' }}>
              {item} <span style={{ color: 'var(--text-emerald)' }}>◆</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
