import React, { useState } from 'react';
import { Calculator, MessageSquare, Send, CheckCircle2, AlertCircle, Scissors, Truck, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SpecCalculator({ onOpenModal }) {
  const [category, setCategory] = useState('armatura');
  const [diameter, setDiameter] = useState('12мм');
  const [quantity, setQuantity] = useState('5 тонн');
  const [needCutting, setNeedCutting] = useState(true);
  const [needDelivery, setNeedDelivery] = useState(true);
  const [contactPhone, setContactPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const productOptions = {
    armatura: {
      name: 'Арматура А500С / А400 (Гладкая / Периодическая)',
      sizes: ['8 мм', '10 мм', '12 мм', '14 мм', '16 мм', '18 мм', '20-32 мм'],
    },
    pipe_profile: {
      name: 'Труба профильная (Квадратная / Прямоугольная)',
      sizes: ['20х20 мм', '40х20 мм', '40х40 мм', '60х40 мм', '80х80 мм', '100х100 мм+'],
    },
    pipe_round: {
      name: 'Труба круглая (ВГП / Электросварная)',
      sizes: ['Ø 15-25 мм (1/2"-1")', 'Ø 32-50 мм', 'Ø 76-108 мм', 'Ø 133-219 мм+'],
    },
    sheet: {
      name: 'Листовой прокат (Г/К, Х/К, Оцинкованный)',
      sizes: ['0.5 - 1.5 мм (Х/К / Оцинк)', '2.0 - 4.0 мм (Г/К)', '5.0 - 10.0 мм', '12.0 - 50.0 мм (Плита)'],
    },
    beam: {
      name: 'Двутавровая балка / Швеллер / Уголок',
      sizes: ['Швеллер № 8-14', 'Швеллер № 16-30', 'Балка двутавр 10B1-20B1', 'Уголок 25х25 - 100х100'],
    }
  };

  const handleWhatsAppSend = () => {
    const text = `Добрый день! Прошу рассчитать стоимость и наличие металлопроката:\n- Категория: ${productOptions[category].name}\n- Размер/Диаметр: ${diameter}\n- Объём: ${quantity}\n- Резка в размер: ${needCutting ? 'Да' : 'Нет'}\n- Доставка по Молдове: ${needDelivery ? 'Да' : 'Нет'}\nКонтактный телефон: ${contactPhone || 'Указан в WhatsApp'}`;
    const url = `https://wa.me/37368471530?text=${encodeURIComponent(text)}`;
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    window.open(url, '_blank');
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setSubmitted(true);
  };

  return (
    <section className="section" id="calculator" style={{ background: '#F1F5F9' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Интерактивный расчёт</span>
          <h2>Конструктор спецификации и заявка менеджеру</h2>
          <p>
            Сформируйте список необходимых позиций за пару кликов. Дежурный менеджер проверит фактическое наличие на металлобазах и подготовит точный расчёт со спецскидкой.
          </p>
        </div>

        <div className="calc-card">
          <div className="no-price-banner">
            <AlertCircle size={22} color="#D97706" style={{ flexShrink: 0 }} />
            <div className="no-price-banner-text">
              <h4>Цены формируются индивидуально под спецификацию</h4>
              <p>
                Стоимость металлопроката зависит от точного объёма партии, условий нарезки и плеча доставки. 
                Мы не публикуем статические цены, чтобы гарантировать лучшую оптовую стоимость в день запроса.
              </p>
            </div>
          </div>

          <div className="calc-grid">
            <div className="calc-left">
              <div className="form-group">
                <label>1. Выберите категорию металлопроката:</label>
                <select 
                  className="form-select" 
                  value={category} 
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setDiameter(productOptions[e.target.value].sizes[0]);
                  }}
                >
                  <option value="armatura">Арматура (А500С / А400)</option>
                  <option value="pipe_profile">Труба профильная (Квадратная / Прямоугольная)</option>
                  <option value="pipe_round">Труба круглая (ВГП / Электросварная)</option>
                  <option value="sheet">Листовой прокат (Г/К, Х/К, Оцинк)</option>
                  <option value="beam">Двутавр, Швеллер, Уголок</option>
                </select>
              </div>

              <div className="form-group">
                <label>2. Укажите размер или диаметр:</label>
                <select 
                  className="form-select" 
                  value={diameter} 
                  onChange={(e) => setDiameter(e.target.value)}
                >
                  {productOptions[category].sizes.map((sz, idx) => (
                    <option key={idx} value={sz}>{sz}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>3. Ориентировочный объём / Тоннаж / Метраж:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Например: 5 тонн, 250 метров, 12 листов..." 
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>4. Дополнительные услуги металлообработки:</label>
                <div className="checkbox-group">
                  <div 
                    className={`checkbox-card ${needCutting ? 'active' : ''}`}
                    onClick={() => setNeedCutting(!needCutting)}
                  >
                    <Scissors size={16} /> Резка в размер по чертежам
                  </div>
                  <div 
                    className={`checkbox-card ${needDelivery ? 'active' : ''}`}
                    onClick={() => setNeedDelivery(!needDelivery)}
                  >
                    <Truck size={16} /> Доставка по Молдове
                  </div>
                </div>
              </div>
            </div>

            <div className="calc-right" style={{ background: '#F8FAFC', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px', color: 'var(--brand-navy)' }}>
                  Итоговая спецификация к расчёту:
                </h3>

                <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginBottom: '20px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
                    {productOptions[category].name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    • Размер/Марка: <strong>{diameter}</strong><br />
                    • Запрашиваемый объём: <strong>{quantity}</strong><br />
                    • Услуги: <strong>{[needCutting && 'Резка в размер', needDelivery && 'Доставка'].filter(Boolean).join(', ') || 'Без доп. услуг'}</strong>
                  </div>
                </div>

                {submitted ? (
                  <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', padding: '20px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                    <CheckCircle2 size={36} color="#16A34A" style={{ margin: '0 auto 10px auto' }} />
                    <h4 style={{ color: '#166534', fontSize: '16px', fontWeight: '700' }}>Заявка успешно отправлена!</h4>
                    <p style={{ color: '#15803D', fontSize: '13px', marginTop: '6px' }}>Дежурный менеджер свяжется с вами в течение 7 минут с точным расчётом.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitForm}>
                    <div className="form-group">
                      <label>Ваш телефон для связи:</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        placeholder="+373 __ ___ ___" 
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="btn btn-navy" style={{ width: '100%', marginBottom: '12px' }}>
                      <Send size={16} /> Отправить дежурному менеджеру
                    </button>
                  </form>
                )}
              </div>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '10px', textAlign: 'center' }}>
                  Или отправьте сформированную заявку прямо в мессенджер:
                </p>
                <button 
                  onClick={handleWhatsAppSend} 
                  className="btn btn-whatsapp" 
                  style={{ width: '100%', fontSize: '13px' }}
                >
                  <MessageSquare size={16} /> Отправить спецификацию в WhatsApp ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
