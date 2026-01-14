import { Check } from "lucide-react";

const TrustSection = () => {
  const reasons = [
    "Approche sérieuse et respectueuse des traditions",
    "Écoute attentive et sans jugement",
    "Confidentialité totale garantie",
    "Pas de promesses irréalistes",
    "Accompagnement personnalisé à chaque situation",
    "Respect de votre temps et de votre personne",
  ];

  return (
    <section id="confiance" className="section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border border-primary/10" />
              <div className="absolute inset-8 rounded-full border border-primary/20" />
              <div className="absolute inset-16 rounded-full border border-primary/30" />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-display font-bold text-gradient mb-2">15+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-body">
                    Années d'expérience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.15em] uppercase text-primary font-medium">
                Pourquoi me faire confiance
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight">
                Un engagement envers vous
              </h2>
              <div className="divider-subtle !mx-0" />
            </div>

            <p className="text-muted-foreground font-body leading-relaxed">
              Mon travail repose sur des valeurs fondamentales : l'honnêteté, le respect et l'humanité. Je m'engage à vous accompagner avec sérieux, sans jamais exploiter votre vulnérabilité.
            </p>

            {/* Trust points */}
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground font-body">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
