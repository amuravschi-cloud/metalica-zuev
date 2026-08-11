import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, X, Send, CheckCircle2, Scissors, Truck, Sparkles, MessageSquare, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SpecCalculator({ onClose }) {
  const [category, setCategory] = useState('armatura');
  const [diameterIndex, setDiameterIndex] = useState(2); // 12mm default
  const [meters, setMeters] = useState(100);
  const [needCutting, setNeedCutting] = useState(true);
  const [needDelivery, setNeedDelivery] = useState(true);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const categories = {
    armatura: {
      name: 'Арматура А500С',
      items: [
        { size: '8 мм', weightPerMeter: 0.395 },
        { size: '10 мм', weightPerMeter: 0.617 },
        { size: '12 мм', weightPerMeter: 0.888 },
        { size: '14 мм', weightPerMeter: 1.21 },
        { size: '16 мм', weightPerMeter: 1.58 },
        { size: '20 мм', weightPerMeter: 2.47 },
        { size: '25 мм', weightPerMeter: 3.85 },
      ]
    },
    pipe_prof: {
      name: 'Труба профильная',
      items: [
        { size: '20х20х2.0 мм', weightPerMeter: 1.08 },
        { size: '40х20х2.0 мм', weightPerMeter: 1.70 },
        { size: '40х40х2.0 мм', weightPerMeter: 2.33 },
        { size: '60х40х2.0 мм', weightPerMeter: 2.96 },
        { size: '80х80х3.0 мм', weightPerMeter: 7.07 },
        { size: '100х100х4.0 мм', weightPerMeter: 11.73 },
      ]
    },
    sheet: {
      name: 'Листовой прокат',
      items: [
        { size: 'Лист 1.5 мм (1250x2500)', weightPerMeter: 36.7 },
        { size: 'Лист 2.0 мм (1250x2500)', weightPerMeter: 49.0 },
        { size: 'Лист 3.0 мм (1500x6000)', weightPerMeter: 212.0 },
        { size: 'Лист 5.0 мм (1500x6000)', weightPerMeter: 353.0 },
        { size: 'Лист 10.0 мм (1500x6000)', weightPerMeter: 706.0 },
      ]
    }
  };

  const currentCategory = categories[category];
  const selectedItem = currentCategory.items[diameterIndex] || currentCategory.items[0];
  const totalWeightKg = (selectedItem.weightPerMeter * meters).toFixed(1);
  const totalTons = (totalWeightKg / 1000).toFixed(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setSubmitted(true);
  };

  const handleViberSend = () => {
    const msg = `Запрос спецификации Metalica Zuev:\n- ${currentCategory.name} (${selectedItem.size})\n- Объём: ${meters} м / ${totalWeightKg} кг (${totalTons} тн)\n- Резка: ${needCutting ? 'Да' : 'Нет'}\n- Доставка: ${needDelivery ? 'Да' : 'Нет'}\nТелефон: ${phone || 'Указан в мессенджере'}`;
    window.open(`viber://chat?number=%2B37368471530&text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="modal-content-glass"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {onClose && (
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <Sparkles size={20} color="#10B981" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-emerald)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Metal Weight Engine v3.0
          </span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: '#FFFFFF', marginBottom: '24px' }}>
          Расчёт массы и спеццены
        </h2>

        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {Object.keys(categories).map(catKey => (
            <button
              key={catKey}
              onClick={() => {
                setCategory(catKey);
                setDiameterIndex(0);
              }}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                background: category === catKey ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: category === catKey ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {categories[catKey].name}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              Выберите типоразмер:
            </label>
            <select
              value={diameterIndex}
              onChange={(e) => setDiameterIndex(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                color: '#FFFFFF',
                fontSize: '14px',
                outline: 'none'
              }}
            >
              {currentCategory.items.map((item, idx) => (
                <option key={idx} value={idx} style={{ background: '#0D1A14', color: '#FFFFFF' }}>
                  {item.size} ({item.weightPerMeter} кг/м)
                </option>
              ))}
            </select>

            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-secondary)' }}>
                <span>Длина / Количество (м):</span>
                <strong style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>{meters} м</strong>
              </div>
              <input 
                type="range"
                min="10"
                max="2000"
                step="10"
                value={meters}
                onChange={(e) => setMeters(Number(e.target.value))}
                className="calc-range-slider"
              />
            </div>
          </div>

          {/* Live Weight Box */}
          <div style={{ background: 'rgba(16, 185, 129, 0.06)', border: '1px solid var(--border-emerald)', borderRadius: 'var(--radius-md)', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              РАССЧИТАННАЯ МАССА
            </span>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '42px', fontWeight: '800', color: 'var(--text-emerald)', margin: '6px 0' }}>
              {totalWeightKg} <span style={{ fontSize: '20px' }}>кг</span>
            </div>
            <span style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: '700' }}>
              ≈ {totalTons} тонн
            </span>
          </div>
        </div>

        {/* Options */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-primary)', cursor: 'pointer' }}>
            <input type="checkbox" checked={needCutting} onChange={(e) => setNeedCutting(e.target.checked)} />
            <Scissors size={14} color="#10B981" /> Резка в размер
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-primary)', cursor: 'pointer' }}>
            <input type="checkbox" checked={needDelivery} onChange={(e) => setNeedDelivery(e.target.checked)} />
            <Truck size={14} color="#10B981" /> Доставка краном
          </label>
        </div>

        {/* Form Submission */}
        {submitted ? (
          <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--accent-emerald)', padding: '20px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <CheckCircle2 size={32} color="#10B981" style={{ margin: '0 auto 8px auto' }} />
            <h4 style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '800' }}>Расчёт принят в обработку!</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '4px' }}>Менеджер базы свяжется с вами с итоговой накладной.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px' }}>
            <input 
              type="tel"
              placeholder="+373 __ ___ ___"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                flex: 1,
                padding: '14px 18px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                color: '#FFFFFF',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            <button type="submit" className="btn-editorial btn-emerald" style={{ padding: '14px 24px' }}>
              <Send size={16} /> Запросить КП
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
