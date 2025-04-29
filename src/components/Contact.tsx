
import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="w-full max-w-lg mx-auto px-4 py-8 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center flex items-center justify-center">
        <Mail className="mr-2 text-royal-gold" size={24} /> Get In Touch
      </h2>
      
      <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
        <CardContent className="p-0">
          <a 
            href="https://wa.me/96170555995" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 transition-all duration-300 border-b border-white/10 hover:bg-white/5"
          >
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-lg">
              <MessageSquare className="text-white" size={20} />
            </div>
            <div>
              <p className="text-white font-medium">WhatsApp</p>
              <p className="text-white/70 text-sm">+961 70 555 995</p>
            </div>
          </a>
          
          <a 
            href="mailto:Hazzakcom@gmail.com" 
            className="flex items-center gap-3 p-5 transition-all duration-300 hover:bg-white/5"
          >
            <div className="bg-gradient-to-br from-royal-purple to-royal-dark p-3 rounded-xl shadow-lg">
              <Mail className="text-white" size={20} />
            </div>
            <div>
              <p className="text-white font-medium">Email Support</p>
              <p className="text-white/70 text-sm">Hazzakcom@gmail.com</p>
            </div>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
