import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
          Find Your Perfect Co-Founder Match
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with talented technical co-founders or find exciting startup opportunities. 
          Build something amazing together.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild className="animate-float">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/browse">Browse Profiles</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};