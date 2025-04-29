
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-royal-purple to-royal-dark p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white/80 mb-8">Oops! This page doesn't exist</p>
        <Button asChild className="bg-white text-royal-purple hover:bg-white/90">
          <Link to="/" className="flex items-center gap-2">
            <Home size={18} /> Return to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
