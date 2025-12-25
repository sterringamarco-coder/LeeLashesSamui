import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="LeeLashes beauty salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="inline-block px-4 py-2 bg-blush rounded-full text-sm font-medium text-foreground mb-6">
            ✨ Premium Beauty Services in Koh Samui
          </span>
        </div>
        
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          LeeLashes
        </h1>
        
        <p 
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in drop-shadow-sm"
          style={{ animationDelay: "0.6s" }}
        >
          Expert eyelash extensions, beauty waxing & nail services. 
          Where artistry meets precision for your perfect look.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <Button variant="whatsapp" size="xl" asChild>
            <a 
              href="https://wa.me/66897992274" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Book via WhatsApp
            </a>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="#services">View Services</a>
          </Button>
        </div>

        <div 
          className="mt-16 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <a 
            href="#about" 
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
};
