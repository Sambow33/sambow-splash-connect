
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-purple to-royal-dark p-4">
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 my-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </Button>
        
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="prose prose-sm max-w-none text-gray-700">
          <p className="mb-4">
            Last Updated: April 29, 2025
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information to provide better services to all our users. This includes information 
            you provide to us, data we obtain when you use our services, and information from third-party sources.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">2. How We Use Information</h2>
          <p className="mb-4">
            We use the information we collect to provide, maintain, protect and improve our services, 
            to develop new ones, and to protect Sambow and our users.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">3. Information Sharing</h2>
          <p className="mb-4">
            We do not share personal information with companies, organizations, or individuals outside 
            of Sambow except in specific circumstances outlined in this policy.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">4. Data Security</h2>
          <p className="mb-4">
            We work hard to protect Sambow and our users from unauthorized access to or unauthorized 
            alteration, disclosure, or destruction of information we hold.
          </p>
          
          <p className="mt-8 text-sm text-gray-500">
            This is a placeholder for the Privacy Policy document. The complete legal document 
            would be provided upon official launch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
