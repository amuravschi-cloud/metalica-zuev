import React from 'react';
import { Award, ShieldCheck, Truck, Phone, MessageSquare } from 'lucide-react';

export default function CompanyOverview() {
  return (
    <section className="section" id="company">
      <div className="container">
        <div className="company-card">
          <div>
            <span className="section-tag">О компании Metalica Zuev</span>
            <h3>Надёжный поставщик металлопроката с 1995 года</h3>
            <p>
              <strong>Metalica Zuev SRL</strong> — один из крупнейших и опытнейших поставщиков чёрного металлопроката в Республике Молдова. Более 30 лет мы обеспечиваем коммерческое, промышленное и частное строительство надежными материалами прямо с заводов-изготовителей.
            </p>

            <p>
              Мы соединяем самый широкий складской ассортимент в стране (450+ товарных позиций в наличии) с собственным парком кранов, оборудования для резки и специализированной доставки.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '30px' }}>
              <a href="tel:+37368471530" className="btn btn-brand">
                <Phone size={16} /> Связаться с отделом продаж
              </a>
              <a href="viber://chat?number=%2B37368471530" className="btn btn-viber">
                <MessageSquare size={16} /> Написать в Viber ↗
              </a>
            </div>
          </div>

          <div style={{ background: '#F4F7F5', border: '1px solid var(--border-green)', borderRadius: 'var(--radius-md)', padding: '32px' }}>
            <h4 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--bg-dark-green)', marginBottom: '20px' }}>
              Наши ключевые стандарты:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <ShieldCheck size={22} color="var(--brand-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14px', color: 'var(--bg-dark-green)', display: 'block' }}>100% сертификация качества</strong>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Каждая партия металла сопровождена заводскими паспортами и сертификатами соответствия.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Award size={22} color="var(--brand-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14px', color: 'var(--bg-dark-green)', display: 'block' }}>Самый большой склад в наличии</strong>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>450+ позиций проката всегда доступны на наших металлобазах в Кишиневе и Оргееве.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Truck size={22} color="var(--brand-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14px', color: 'var(--bg-dark-green)', display: 'block' }}>Оперативная доставка по Молдове</strong>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Собственный автопарк длинномеров и крановая погрузка на всех базах.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
