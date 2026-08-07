import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

export default function FloatingBar() {
  return (
    <div className="floating-actions">
      <a 
        href="viber://chat?number=%2B37368471530" 
        className="floating-btn floating-btn-viber"
        title="Написать в Viber (+373 68 47-15-30)"
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
