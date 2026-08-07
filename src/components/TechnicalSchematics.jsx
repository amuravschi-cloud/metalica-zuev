import React from 'react';

export function RebarSchematic() {
  return (
    <svg viewBox="0 0 400 220" width="100%" height="100%" style={{ background: '#F8FAFC' }}>
      {/* Grid background */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="400" height="220" fill="url(#grid)" />

      {/* Main Rebar Rod */}
      <rect x="40" y="85" width="320" height="50" rx="4" fill="#E2E8F0" stroke="#0F4C81" strokeWidth="2.5" />
      
      {/* Periodic Ribs */}
      {[70, 110, 150, 190, 230, 270, 310].map((x, i) => (
        <path key={i} d={`M ${x} 85 Q ${x + 12} 110 ${x} 135`} fill="none" stroke="#0F4C81" strokeWidth="3" strokeLinecap="round" />
      ))}

      {/* Longitudinal Rib */}
      <line x1="40" y1="110" x2="360" y2="110" stroke="#1E6091" strokeWidth="2" strokeDasharray="4,4" />

      {/* Dimension Line Height */}
      <line x1="20" y1="85" x2="20" y2="135" stroke="#D97706" strokeWidth="1.5" />
      <line x1="14" y1="85" x2="26" y2="85" stroke="#D97706" strokeWidth="1.5" />
      <line x1="14" y1="135" x2="26" y2="135" stroke="#D97706" strokeWidth="1.5" />
      <text x="12" y="114" fill="#D97706" fontSize="11" fontWeight="700" textAnchor="end">Ø 8-32</text>

      {/* Rib Pitch Dimension */}
      <line x1="150" y1="155" x2="190" y2="155" stroke="#0F4C81" strokeWidth="1.5" />
      <line x1="150" y1="148" x2="150" y2="162" stroke="#0F4C81" strokeWidth="1.5" />
      <line x1="190" y1="148" x2="190" y2="162" stroke="#0F4C81" strokeWidth="1.5" />
      <text x="170" y="172" fill="#0F4C81" fontSize="11" fontWeight="700" textAnchor="middle">Шаг рёбер t</text>

      {/* Stamp label */}
      <rect x="250" y="25" width="120" height="28" rx="4" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1" />
      <text x="310" y="43" fill="#1E40AF" fontSize="11" fontWeight="800" textAnchor="middle">ГОСТ 34028 / А500С</text>
    </svg>
  );
}

export function PipeSchematic() {
  return (
    <svg viewBox="0 0 400 220" width="100%" height="100%" style={{ background: '#F8FAFC' }}>
      <rect width="400" height="220" fill="url(#grid)" />

      {/* Outer Tube Circle */}
      <circle cx="150" cy="110" r="65" fill="#E2E8F0" stroke="#0F4C81" strokeWidth="2.5" />
      {/* Inner Hole Circle */}
      <circle cx="150" cy="110" r="48" fill="#F8FAFC" stroke="#0F4C81" strokeWidth="2" />

      {/* Axis Lines */}
      <line x1="70" y1="110" x2="230" y2="110" stroke="#94A3B8" strokeWidth="1" strokeDasharray="6,4" />
      <line x1="150" y1="30" x2="150" y2="190" stroke="#94A3B8" strokeWidth="1" strokeDasharray="6,4" />

      {/* Wall Thickness Dimension */}
      <line x1="198" y1="110" x2="215" y2="110" stroke="#D97706" strokeWidth="2" />
      <text x="225" y="114" fill="#D97706" fontSize="12" fontWeight="800">s (стенка)</text>

      {/* Profile Square Preview */}
      <rect x="280" y="60" width="90" height="90" rx="6" fill="#EFF6FF" stroke="#0F4C81" strokeWidth="2" />
      <rect x="294" y="74" width="62" height="62" rx="3" fill="#F8FAFC" stroke="#0F4C81" strokeWidth="1.5" />
      <text x="325" y="172" fill="#0F4C81" fontSize="11" fontWeight="700" textAnchor="middle">Профиль A х B</text>
    </svg>
  );
}

export function SheetSchematic() {
  return (
    <svg viewBox="0 0 400 220" width="100%" height="100%" style={{ background: '#F8FAFC' }}>
      <rect width="400" height="220" fill="url(#grid)" />

      {/* Isometric Sheet Stack */}
      {[60, 80, 100, 120].map((y, idx) => (
        <g key={idx}>
          <polygon points={`60,${y} 280,${y} 340,${y - 25} 120,${y - 25}`} fill={idx === 0 ? '#CBD5E1' : '#E2E8F0'} stroke="#0F4C81" strokeWidth="1.5" />
        </g>
      ))}

      {/* Dimension Arrow for Sheet Thickness */}
      <line x1="45" y1="60" x2="45" y2="120" stroke="#D97706" strokeWidth="2" />
      <text x="38" y="94" fill="#D97706" fontSize="12" fontWeight="800" textAnchor="end">h (пачка)</text>

      {/* Spec Badge */}
      <rect x="180" y="150" width="180" height="34" rx="6" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="1" />
      <text x="270" y="171" fill="#0F4C81" fontSize="11" fontWeight="700" textAnchor="middle">Г/К · Х/К · Оцинкованный лист</text>
    </svg>
  );
}

export function BeamSchematic() {
  return (
    <svg viewBox="0 0 400 220" width="100%" height="100%" style={{ background: '#F8FAFC' }}>
      <rect width="400" height="220" fill="url(#grid)" />

      {/* I-Beam Cross Section */}
      <path d="M 120 40 L 260 40 L 260 65 L 200 65 L 200 155 L 260 155 L 260 180 L 120 180 L 120 155 L 180 155 L 180 65 L 120 65 Z" fill="#CBD5E1" stroke="#0F4C81" strokeWidth="2.5" />

      {/* Dimensions */}
      {/* Height H */}
      <line x1="90" y1="40" x2="90" y2="180" stroke="#D97706" strokeWidth="1.5" />
      <line x1="82" y1="40" x2="98" y2="40" stroke="#D97706" strokeWidth="1.5" />
      <line x1="82" y1="180" x2="98" y2="180" stroke="#D97706" strokeWidth="1.5" />
      <text x="75" y="114" fill="#D97706" fontSize="12" fontWeight="800" textAnchor="end">H (высота)</text>

      {/* Width B */}
      <line x1="120" y1="20" x2="260" y2="20" stroke="#0F4C81" strokeWidth="1.5" />
      <text x="190" y="14" fill="#0F4C81" fontSize="11" fontWeight="700" textAnchor="middle">B (полка)</text>

      {/* Label */}
      <rect x="285" y="95" width="100" height="30" rx="4" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1" />
      <text x="335" y="114" fill="#1E40AF" fontSize="11" fontWeight="800" textAnchor="middle">Двутавр / Швеллер</text>
    </svg>
  );
}
