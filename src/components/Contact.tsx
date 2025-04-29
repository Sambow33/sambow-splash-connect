
import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-12 px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Get In Touch</h2>
      
      <div className="space-y-4">
        <a 
          href="https://wa.me/96170555995" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 transition-all duration-300"
        >
          <div className="bg-green-500 p-2 rounded-lg">
            <MessageSquare className="text-white" size={24} />
          </div>
          <div>
            <p className="text-white font-medium">WhatsApp</p>
            <p className="text-white/70 text-sm">+961 70 555 995</p>
          </div>
        </a>
        
        <a 
          href="mailto:Hazzakcom@gmail.com" 
          className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 transition-all duration-300"
        >
          <div className="bg-royal-purple p-2 rounded-lg">
            <Mail className="text-white" size={24} />
          </div>
          <div>
            <p className="text-white font-medium">Email Support</p>
            <p className="text-white/70 text-sm">Hazzakcom@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
