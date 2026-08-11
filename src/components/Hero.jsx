import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, ArrowUpRight, Wrench, Truck } from 'lucide-react';

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
      <section className="hero-industrial-v4" id="top">
        <div className="container">
          <motion.div 
            className="hero-grid-v4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <motion.div variants={itemVariants} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(6, 78, 59, 0.5)', border: '1px solid rgba(52, 211, 153, 0.4)', color: '#6EE7B7', padding: '6px 18px', borderRadius: 'var(--radius-full)', fontSize: '13px', fontWeight: '700', marginBottom: '24px' }}>
                <ShieldCheck size={16} color="#34D399" /> Прямой импорт стального металлопроката по всей Молдове
              </motion.div>

              <motion.h1 variants={itemVariants}>
                Строительный металл <br />
                <em>заводского качества</em> <br />
                с отгрузкой кранами.
              </motion.h1>

              <motion.p variants={itemVariants} style={{ fontSize: '19px', lineHeight: '1.65', color: '#CBD5E1', marginBottom: '40px' }}>
                Крупнейший складской запас в стране: 450+ позиций чёрного проката в наличии на 3-х действующих металлобазах и логистическом хабе. 
                Прямые отгрузки, резка в точный размер и экспресс-доставка.
              </motion.p>

              <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '52px' }}>
                <motion.a 
                  href="tel:+37368471530" 
                  className="btn-v4 btn-v4-emerald"
                  style={{ padding: '16px 36px', fontSize: '16px' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Phone size={20} /> Позвонить отделу продаж
                </motion.a>

                <motion.a 
                  href="viber://chat?number=%2B37368471530" 
                  className="btn-v4 btn-v4-viber"
                  style={{ padding: '16px 28px', fontSize: '16px' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageSquare size={20} /> Viber Консультация <ArrowUpRight size={16} />
                </motion.a>
              </motion.div>

              <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', paddingTop: '28px', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '38px', fontWeight: '800', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>30+ лет</strong>
                  <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '600', marginTop: '4px', display: 'block' }}>опыта поставок в РМ</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '38px', fontWeight: '800', color: '#34D399', fontFamily: 'var(--font-mono)' }}>450+</strong>
                  <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '600', marginTop: '4px', display: 'block' }}>позиций в наличии</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '38px', fontWeight: '800', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>3+1</strong>
                  <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '600', marginTop: '4px', display: 'block' }}>металлобазы + хаб</span>
                </div>
              </motion.div>
            </div>

            {/* Right Riveted Metal Showcase Card */}
            <motion.div variants={itemVariants}>
              <div className="metal-plate-heavy" style={{ color: 'var(--text-dark)' }}>
                <div className="metal-plate-head-riveted" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#FFFFFF' }}>Metalica Zuev SRL</h3>
                    <p style={{ fontSize: '12px', color: '#4ADE80', fontWeight: '700', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                      ОФИЦИАЛЬНЫЙ ПОСТАВЩИК С 1995 ГОДА
                    </p>
                  </div>
                  <Wrench size={26} color="#34D399" />
                </div>

                <div className="metal-plate-body-v4">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                    {[
                      'Самый крупный складской запас в Молдове',
                      '100% сертификация ГОСТ / EN 10025',
                      'Погрузка heavy-duty козловыми кранами 15т',
                      'Высокоточная плазменная и лентопильная резка'
                    ].map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--text-dark)', fontWeight: '700' }}>
                        <CheckCircle2 size={18} color="#059669" /> {feat}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', paddingTop: '16px', borderTop: '2px solid #CBD5E1' }}>
                    <a href="tel:+37368471530" className="btn-v4 btn-v4-emerald" style={{ padding: '12px', fontSize: '13px' }}>
                      <Phone size={14} /> +373 68 47-15-30
                    </a>
                    <a href="viber://chat?number=%2B37368471530" className="btn-v4 btn-v4-viber" style={{ padding: '12px', fontSize: '13px' }}>
                      <MessageSquare size={14} /> Viber Direct
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industrial Ticker */}
      <div style={{ background: '#0B131F', color: '#FFFFFF', padding: '16px 0', borderBottom: '2px solid var(--brand-green)', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div className="ticker-track">
          {[
            'АРМАТУРА А500С / А400 (Ø 8-32мм)',
            'ТРУБА ПРОФИЛЬНАЯ КВАДРАТНАЯ И ПРМЯОУГОЛЬНАЯ',
            'ЛИСТОВОЙ ПРОКАТ Г/К, Х/К, ОЦИНКОВАННЫЙ',
            'ДВУТАВРОВАЯ БАЛКА Б1 / Б2 / К1',
            'ШВЕЛЛЕР № 5U - 30U И УГОЛОК ГОСТ',
            'СЕТКА ВР-1 И ВЯЗАЛЬНАЯ ПРОВОЛОКА',
            'АРМАТУРА А500С / А400 (Ø 8-32мм)',
            'ТРУБА ПРОФИЛЬНАЯ КВАДРАТНАЯ И ПРМЯОУГОЛЬНАЯ',
            'ЛИСТОВОЙ ПРОКАТ Г/К, Х/К, ОЦИНКОВАННЫЙ',
            'ДВУТАВРОВАЯ БАЛКА Б1 / Б2 / К1',
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '13px', fontWeight: '800', fontFamily: 'var(--font-mono)', color: '#CBD5E1', paddingRight: '36px' }}>
              {item} <span style={{ color: '#34D399' }}>◆</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
