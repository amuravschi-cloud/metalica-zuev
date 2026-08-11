import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone } from 'lucide-react';

export default function FloatingBar() {
  return (
    <div className="floating-actions">
      <motion.a 
        href="viber://chat?number=%2B37368471530" 
        className="floating-btn floating-btn-viber"
        title="Viber (+373 68 47-15-30)"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare size={24} />
      </motion.a>

      <motion.a 
        href="tel:+37368471530" 
        className="floating-btn floating-btn-phone"
        title="Звонок (+373 68 47-15-30)"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        style={{ background: 'var(--accent-emerald)', color: '#000000' }}
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}
