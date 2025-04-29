
import React from 'react';
import { cn } from '@/lib/utils';

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  className?: string;
};

const FeatureCard = ({ title, description, icon, imageUrl, className }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-2xl border backdrop-blur-sm p-6 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] group",
        imageUrl 
          ? "text-white border-white/10" 
          : "bg-white/10 text-white border-white/20",
        className
      )}
      style={{
        background: imageUrl 
          ? `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%), url(${imageUrl}) no-repeat center center/cover` 
          : ""
      }}
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-royal-purple/10 to-royal-gold/10 transition-opacity duration-500"></div>
      
      {/* Card content */}
      <div className="relative z-10">
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-xl font-bold mb-2 group-hover:text-royal-gold transition-colors">{title}</h3>
        <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">{description}</p>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tr from-transparent to-royal-gold/10 rounded-full -mr-8 -mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default FeatureCard;
