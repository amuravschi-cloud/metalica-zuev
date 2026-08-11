import React, { useState } from 'react';
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
      name: 'Арматура А500С / А400',
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="calc-modal-industrial" onClick={(e) => e.stopPropagation()}>
        {onClose && (
          <button className="modal-close-btn" onClick={onClose} style={{ background: '#F1F5F9', color: '#0F172A' }}>
            <X size={20} />
          </button>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <Calculator size={22} color="var(--brand-green)" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--brand-green)', fontWeight: '700', textTransform: 'uppercase' }}>
            ГОСТ Справочник Веса Проката
          </span>
        </div>

        <h2 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '24px' }}>
          Расчёт массы и спеццены партий
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
                padding: '8px 18px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                background: category === catKey ? 'var(--brand-green)' : '#F8FAFC',
                color: category === catKey ? '#FFFFFF' : 'var(--text-dark)',
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
            <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: '600' }}>
              Выберите типоразмер:
            </label>
            <select
              value={diameterIndex}
              onChange={(e) => setDiameterIndex(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#F8FAFC',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-dark)',
                fontSize: '14px',
                fontWeight: '700',
                outline: 'none'
              }}
            >
              {currentCategory.items.map((item, idx) => (
                <option key={idx} value={idx}>
                  {item.size} ({item.weightPerMeter} кг/м)
                </option>
              ))}
            </select>

            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span>Длина / Метраж:</span>
                <strong style={{ color: 'var(--brand-green)', fontFamily: 'var(--font-mono)' }}>{meters} м</strong>
              </div>
              <input 
                type="range"
                min="10"
                max="2000"
                step="10"
                value={meters}
                onChange={(e) => setMeters(Number(e.target.value))}
                className="calc-range-slider"
                style={{ accentColor: 'var(--brand-green)' }}
              />
            </div>
          </div>

          {/* Live Weight Result Box */}
          <div style={{ background: 'var(--brand-green-light)', border: '1px solid var(--border-green)', borderRadius: 'var(--radius-md)', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--brand-green)', textTransform: 'uppercase', fontWeight: '800' }}>
              РАССЧИТАННАЯ МАССА ПАРТИИ
            </span>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '42px', fontWeight: '800', color: 'var(--brand-green)', margin: '6px 0' }}>
              {totalWeightKg} <span style={{ fontSize: '20px' }}>кг</span>
            </div>
            <span style={{ fontSize: '15px', color: 'var(--text-dark)', fontWeight: '800' }}>
              ≈ {totalTons} тонн
            </span>
          </div>
        </div>

        {/* Form Submission */}
        {submitted ? (
          <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', padding: '20px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <CheckCircle2 size={32} color="#16A34A" style={{ margin: '0 auto 8px auto' }} />
            <h4 style={{ color: '#166534', fontSize: '16px', fontWeight: '800' }}>Расчёт отправлен менеджеру базы!</h4>
            <p style={{ color: '#15803D', fontSize: '13px', marginTop: '4px' }}>Специалист свяжется с вами с итоговой накладной.</p>
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
                background: '#F8FAFC',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-dark)',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            <button type="submit" className="btn-industrial btn-brand-green" style={{ padding: '14px 28px' }}>
              <Send size={16} /> Запросить КП
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
