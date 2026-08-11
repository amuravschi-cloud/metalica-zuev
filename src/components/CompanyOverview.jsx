import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Truck, Phone, MessageSquare, Compass, ArrowUpRight } from 'lucide-react';

export default function CompanyOverview() {
  return (
    <section className="section-editorial" id="company">
      <div className="container">
        <motion.div 
          className="bases-grid-editorial"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-eyebrow">
              <Compass size={14} color="#10B981" /> Наследие & Стандарты Metalica Zuev
            </div>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.1' }}>
              30 лет фундаментальной надёжности в Республике Молдова
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '20px' }}>
              <strong style={{ color: '#FFFFFF' }}>Metalica Zuev SRL</strong> — системообразующий поставщик чёрного металлопроката. С 1995 года мы снабжаем ключевые строительные и промышленные объекты страны металлом высших марок.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '32px' }}>
              Прямое сотрудничество с мировыми металлургическими комбинатами гарантирует честную толщину стенок, строгое соблюдение ГОСТ / EN и рекордный ассортимент из 450+ позиций.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <motion.a 
                href="tel:+37368471530" 
                className="btn-editorial btn-emerald"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={16} /> Связаться с отделом продаж
              </motion.a>
              <motion.a 
                href="viber://chat?number=%2B37368471530" 
                className="btn-editorial btn-viber"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageSquare size={16} /> Viber ↗
              </motion.a>
            </div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '36px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: '#FFFFFF' }}>
              Принципы бескомпромиссного качества:
            </h4>

            {[
              {
                icon: ShieldCheck,
                title: '100% Заводская Сертификация',
                desc: 'Каждая партия проката отгружается с прямым паспортом и сертификатом соответствия EN 10025 / ГОСТ.'
              },
              {
                icon: Award,
                title: 'Рекордный Складской Резерв',
                desc: '450+ позиций металлопроката находятся в постоянной готовности на базах в Кишинёве, Бельцах и Комрате.'
              },
              {
                icon: Truck,
                title: 'Собственная Тяжёлая Логистика',
                desc: 'Парк спецтехники, крановая погрузка и выездная доставка в любую точку Молдовы точно в срок.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '10px', borderRadius: 'var(--radius-sm)', color: '#10B981', flexShrink: 0 }}>
                  <item.icon size={22} />
                </div>
                <div>
                  <h5 style={{ fontSize: '16px', fontWeight: '800', color: '#FFFFFF', marginBottom: '4px' }}>{item.title}</h5>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
