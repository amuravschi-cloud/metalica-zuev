import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle2, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ManagerModal({ isOpen, onClose, initialTitle }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({ particleCount: 90, spread: 60, origin: { y: 0.5 } });
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Добрый день! Мое имя: ${name || 'Клиент'}. Телефон: ${phone || 'Указан в WhatsApp'}. Запрос: ${initialTitle || 'Расчёт спецификации'}. Доп. детали: ${comment || 'Проверьте наличие'}`;
    const url = `https://wa.me/37368471530?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <CheckCircle2 size={54} color="#16A34A" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-dark)' }}>
              Заявка принята в обработку!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.5' }}>
              Дежурный менеджер Metalica Zuev уже проверяет остатки на базах. Звонок поступит в течение 7 минут.
            </p>
            <button 
              className="btn btn-navy" 
              style={{ marginTop: '24px', width: '100%' }}
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            >
              Закрыть окно
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--brand-navy)', letterSpacing: '0.05em' }}>
                Прямая связь с дежурным менеджером
              </span>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '4px' }}>
                {initialTitle || 'Запросить точный расчёт со скидкой'}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Без публикаций цен на сайте. Сформируем наилучшее оптовое предложение под ваш объём.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Ваше имя:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Как к вам обращаться" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Контактный телефон:</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  placeholder="+373 __ ___ ___" 
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Уточнения к заявке / Объем (необязательно):</label>
                <textarea 
                  className="form-textarea" 
                  rows="3"
                  placeholder="Например: Арматура 12мм — 3 тонны, Резка по 6 метров..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-navy" style={{ width: '100%', padding: '14px', fontSize: '15px' }}>
                <Send size={16} /> Отправить дежурному менеджеру
              </button>
            </form>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Предпочитаете мессенджер?</span>
              <button 
                onClick={handleWhatsApp}
                style={{ background: 'none', border: 'none', color: '#16A34A', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <MessageSquare size={16} /> Написать в WhatsApp ↗
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
