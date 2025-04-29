
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-purple to-royal-dark p-4">
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 my-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </Button>
        
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <div className="prose prose-sm max-w-none text-gray-700">
          <p className="mb-4">
            Last Updated: April 29, 2025
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Sambow. These Terms of Service govern your use of our platform and services. 
            By accessing or using Sambow, you agree to be bound by these Terms.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">2. Using Our Services</h2>
          <p className="mb-4">
            You must follow any policies made available to you within the Services. You may use our 
            Services only as permitted by law. We may suspend or stop providing our Services to you 
            if you do not comply with our terms or policies or if we are investigating suspected misconduct.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">3. Content Policy</h2>
          <p className="mb-4">
            All content must comply with our Community Guidelines. We reserve the right to remove 
            content that violates our policies or applicable laws.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">4. Privacy and Copyright Protection</h2>
          <p className="mb-4">
            Our privacy policies explain how we treat your personal data and protect your privacy when 
            you use our Services. By using our Services, you agree that Sambow can use such data in 
            accordance with our privacy policies.
          </p>
          
          <p className="mt-8 text-sm text-gray-500">
            This is a placeholder for the Terms of Service document. The complete legal document 
            would be provided upon official launch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
