
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-432f7b1e2a2d?q=80&w=2069')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Create Unforgettable <span className="text-white">Events</span>
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in">
          From intimate gatherings to grand celebrations, we bring your vision to life with our comprehensive event management services across India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-white hover:bg-white/90 text-black"
            onClick={() => document.getElementById('services')?.scrollIntoView()}
          >
            Explore Services
          </Button>
          <Button 
            size="lg" 
            className="bg-white hover:bg-white/90 text-black"
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
