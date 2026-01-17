import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const whatsappNumber = "22995585061";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Bonjour%20Maître%20Spirituel%20SODRÉGBÉ,%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20consultation.`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Maître Spirituel SODRÉGBÉ" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>
      
      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
          {/* Subtitle */}
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-body font-medium">
            Maître Spirituel SODRÉGBÉ
          </p>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold leading-tight text-foreground">
            Accompagnement spirituel et{" "}
            <span className="text-gradient">traditions ancestrales</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground font-body font-normal max-w-2xl mx-auto leading-relaxed">
            Le Maître Spirituel SODRÉGBÉ accompagne les personnes confrontées à des difficultés spirituelles, dans le respect des traditions, de la discrétion et des valeurs humaines.
          </p>
          
          {/* CTA */}
          <div className="pt-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                Demander une consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-4 text-sm text-muted-foreground font-body">
            <span>✓ Confidentialité garantie</span>
            <span>✓ 20+ ans d'expérience</span>
            <span>✓ Consultation à distance possible</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
