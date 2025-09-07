import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react";

interface HeroProps {
  onGetStarted?: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Your hub for{" "}
              <span className="bg-gradient-to-r from-accent-orange to-accent-pink bg-clip-text text-transparent">
                interview experiences
              </span>{" "}
              & placement preparation
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow students, share your interview journeys, and access
              curated preparation resources to ace your dream job interviews.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={onGetStarted}
              className="bg-white text-primary hover:bg-white/90 hover-lift"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover-lift"
            >
              Learn More
            </Button>
          </div>

          {/* Stats Section */}
          <div className="animate-bounce-in grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/80">Interview Experiences</div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-white/80">Active Students</div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-white/80">Companies Covered</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-orange/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-purple/20 rounded-full blur-xl" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent-pink/20 rounded-full blur-xl" />
    </div>
  );
};

export default Hero;