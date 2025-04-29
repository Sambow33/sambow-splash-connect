
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AppLanding = () => {
  const { toast } = useToast();
  
  React.useEffect(() => {
    toast({
      title: "Welcome to Sambow App",
      description: "The full app experience is coming soon!",
    });
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
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
      </div>

      <div className="w-full max-w-md p-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Coming Soon</h1>
        <p className="text-white/80 mb-8">
          Our mobile app is currently in development. Be among the first to experience the future of multilingual social streaming!
        </p>
        
        <div className="space-y-4">
          <Button 
            className="w-full bg-white hover:bg-white/90 text-royal-purple font-semibold py-6"
            onClick={() => toast({
              title: "Early Access Request",
              description: "Your interest has been recorded! We'll notify you when early access becomes available.",
            })}
          >
            Request Early Access
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="mr-2" size={16} /> 
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppLanding;
