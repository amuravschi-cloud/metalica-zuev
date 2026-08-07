import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

export default function FloatingBar({ onOpenModal }) {
  return (
    <div className="floating-actions">
      <a 
        href="https://wa.me/37368471530?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D1%82%D1%8C%20%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B5%20%D0%B8%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82%D0%B0." 
        target="_blank" 
        rel="noreferrer"
        className="floating-btn floating-btn-wa"
        title="Написать в WhatsApp"
      >
        <MessageSquare size={24} />
      </a>

      <a 
        href="tel:+37322471530" 
        className="floating-btn floating-btn-phone"
        title="Позвонить в отдел продаж"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
