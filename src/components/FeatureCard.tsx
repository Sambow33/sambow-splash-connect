
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
        "relative overflow-hidden rounded-2xl border border-white/20 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group",
        imageUrl ? "text-white" : "bg-white/10 text-white",
        className
      )}
      style={{
        background: imageUrl ? `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%), url(${imageUrl}) no-repeat center center/cover` : ""
      }}
    >
      {icon && <div className="mb-4 text-royal-purple">{icon}</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">{description}</p>
    </div>
  );
};

export default FeatureCard;
