import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden rounded-[50px] mt-[-50px]">
      {/* Background Gradient & Blur */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[50px]">
        <div 
          className="absolute inset-0 rounded-[50px]"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #3d2b6d 50%, #1a1a1a 100%)',
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-[50px]" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}; 