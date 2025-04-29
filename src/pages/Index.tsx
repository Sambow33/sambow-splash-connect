
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Logo from '@/components/Logo';
import FeatureCard from '@/components/FeatureCard';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, DollarSign } from 'lucide-react';

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 -z-10 bg-animate"
        style={{
          background: 'linear-gradient(-45deg, #8B5CF6, #6D28D9, #4C1D95, #7C3AED, #8B5CF6)',
          backgroundSize: '400% 400%'
        }}
      >
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-royal-gold/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-royal-purple/20 rounded-full filter blur-3xl"></div>
      </div>

      {/* Language Switcher */}
      <LanguageSwitcher />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Logo */}
        <Logo />

        {/* Main Headline */}
        <h2 className="text-2xl md:text-3xl font-medium text-white/90 text-center mb-8 animate-bounce-slight">
          Stream. Connect. Earn.
        </h2>

        {/* CTA Button */}
        <Button 
          className="bg-white hover:bg-white/90 text-royal-purple font-semibold text-lg px-8 py-6 rounded-full button-glow mb-16"
          asChild
        >
          <Link to="/app">
            Launch App <ArrowRight className="ml-2" size={18} />
          </Link>
        </Button>

        {/* Features Section */}
        <div className="w-full max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Experience Premium Social Streaming</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="High-Quality Streaming" 
              description="Crystal clear video streaming optimized for all network conditions."
              imageUrl="./assets/streaming.jpg" 
            />
            <FeatureCard 
              title="Multilingual Support" 
              description="Connect with audiences worldwide with our multilingual platform."
              icon={<Globe size={32} />} 
            />
            <FeatureCard 
              title="Earn While Streaming" 
              description="Turn your passion into profit with our rewarding monetization system."
              icon={<DollarSign size={32} />} 
            />
          </div>
        </div>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
