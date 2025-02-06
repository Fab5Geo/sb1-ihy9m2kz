import React from 'react';

const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #1E293B 1px, transparent 1px),
            linear-gradient(to bottom, #1E293B 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, #F39C35 0.5px, transparent 0.5px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 80px 80px',
          opacity: 0.15,
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg, transparent 45%, #1E293B 45%, #1E293B 55%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, #1E293B 45%, #1E293B 55%, transparent 55%)
          `,
          backgroundSize: '120px 120px',
          opacity: 0.1,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-transparent to-[#0F172A]/80" />
    </div>
  );
};

export default GridBackground;