
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full mt-auto py-8 px-4 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-white/70 text-sm">
            © 2025 Sambow. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-8">
          <Link to="/terms" className="relative text-white/70 hover:text-white text-sm transition-colors group">
            Terms of Service
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-royal-gold group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/privacy" className="relative text-white/70 hover:text-white text-sm transition-colors group">
            Privacy Policy
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-royal-gold group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
