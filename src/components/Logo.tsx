
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center py-10 animate-float">
      <div className="relative">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white glossy-text animate-pulse-glow">
          Sambow
        </h1>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent"></div>
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-royal-gold/30 blur-md"></div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-royal-gold/20 blur-md"></div>
      </div>
    </div>
  );
};

export default Logo;
