import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const whatsappNumber = "22901955850961";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Bonjour%20Hounnongan%20Yaho%20Justin,%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20consultation.`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hounnongan SOGNANNOU Yaho Justin" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
          {/* Subtitle */}
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-body font-medium">
            Hounnongan SOGNANNOU Yaho Justin
          </p>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold leading-tight text-foreground">
            Accompagnement spirituel et{" "}
            <span className="text-gradient">solutions traditionnelles</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground font-body font-normal max-w-2xl mx-auto leading-relaxed">
            Hounnongan SOGNANNOU Yaho Justin accompagne les personnes confrontées à des difficultés spirituelles, dans le respect des traditions, de la discrétion et des valeurs humaines.
          </p>
          
          {/* CTA */}
          <div className="pt-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default HeroSection;
