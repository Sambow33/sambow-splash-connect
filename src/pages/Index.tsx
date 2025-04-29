
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Logo from '@/components/Logo';
import FeatureCard from '@/components/FeatureCard';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe, DollarSign, Video, Shield } from 'lucide-react';

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background with Premium Gradient */}
      <div 
        className="absolute inset-0 -z-10 bg-animate"
        style={{
          background: 'linear-gradient(-45deg, #8B5CF6, #6D28D9, #4C1D95, #7C3AED, #8B5CF6)',
          backgroundSize: '400% 400%'
        }}
      >
        {/* Premium decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-royal-gold/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-royal-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-royal-gold/5 rounded-full filter blur-2xl"></div>
      </div>

      {/* Language Switcher */}
      <LanguageSwitcher />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 relative z-10">
        {/* Hero Section */}
        <section className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[50vh] mb-12">
          {/* Logo */}
          <Logo />

          {/* Main Headline */}
          <h2 className="text-2xl md:text-3xl font-medium text-white/90 text-center mb-8 animate-bounce-slight">
            Stream. Connect. Earn.
          </h2>

          {/* CTA Button */}
          <Button 
            className="bg-white hover:bg-white/90 text-royal-purple font-semibold text-lg px-8 py-6 rounded-full button-glow mb-12 transform transition-all duration-300 hover:scale-105 group"
            asChild
          >
            <Link to="/app">
              Launch App <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
            </Link>
          </Button>

          {/* About Card */}
          <Card className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-md border-white/20 text-white mb-16 overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield size={20} className="mr-2 text-royal-gold" /> About Sambow
              </h3>
              <p className="text-white/80 leading-relaxed">
                Sambow is a premium social streaming platform designed for content creators who demand excellence. 
                Our platform combines high-quality streaming technology with innovative social features and lucrative 
                earning opportunities, all wrapped in an elegant, user-friendly interface.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-5xl mx-auto px-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Video size={24} className="mr-2 text-royal-gold" /> Experience Premium Social Streaming
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="High-Quality Streaming" 
              description="Crystal clear video streaming optimized for all network conditions with advanced compression technology."
              imageUrl="./assets/streaming.jpg" 
            />
            <FeatureCard 
              title="Multilingual Support" 
              description="Connect with audiences worldwide with our comprehensive language support and real-time translation features."
              icon={<Globe size={32} className="text-royal-gold" />} 
            />
            <FeatureCard 
              title="Earn While Streaming" 
              description="Transform your passion into profit with our innovative monetization system, including virtual gifts and premium subscriptions."
              icon={<DollarSign size={32} className="text-royal-gold" />} 
            />
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
