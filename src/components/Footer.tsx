
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full mt-auto py-6 px-4 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/70 text-sm mb-4 md:mb-0">
          © 2025 Sambow. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <Link to="/terms" className="text-white/70 hover:text-white text-sm transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
