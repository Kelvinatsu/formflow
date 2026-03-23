import React from 'react';
import { LayoutGrid } from 'lucide-react';

const Logo = ({ size = 24, fontSize = '1.25rem', color = '#0f172a' }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: color, fontWeight: '800', letterSpacing: '-0.03em', fontSize: fontSize }}>
      <div style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', color: '#ffffff', padding: '6px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)' }}>
        <LayoutGrid size={size} strokeWidth={2.5} />
      </div>
      FormFlow
    </div>
  );
};

export default Logo;
