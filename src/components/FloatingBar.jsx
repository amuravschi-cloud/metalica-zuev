import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

export default function FloatingBar() {
  return (
    <div className="floating-actions">
      <a 
        href="https://wa.me/37368471530" 
        target="_blank" 
        rel="noreferrer"
        className="floating-btn floating-btn-wa"
        title="Написать в WhatsApp (+373 68 47-15-30)"
      >
        <MessageSquare size={24} />
      </a>

      <a 
        href="tel:+37368471530" 
        className="floating-btn floating-btn-phone"
        title="Позвонить в отдел продаж (+373 68 47-15-30)"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
