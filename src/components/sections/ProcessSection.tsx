import { MessageCircle, Search, Sparkles, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Prise de contact",
      description: "Vous me contactez par téléphone ou WhatsApp. Cette première étape est simple et sans engagement.",
    },
    {
      icon: Search,
      number: "02",
      title: "Écoute et compréhension",
      description: "Je prends le temps d'écouter votre situation avec attention et respect, sans jugement.",
    },
    {
      icon: Sparkles,
      number: "03",
      title: "Consultation spirituelle",
      description: "Selon votre situation, je procède à une consultation pour identifier les causes et les solutions possibles.",
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Accompagnement adapté",
      description: "Je vous propose un accompagnement personnalisé, avec des rituels traditionnels si nécessaire.",
    },
  ];

  return (
    <section id="fonctionnement" className="section-spacing">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm tracking-[0.15em] uppercase text-primary font-medium mb-4">
            Comment je fonctionne
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight mb-4">
            Une approche claire et respectueuse
          </h2>
          <div className="divider-subtle" />
          <p className="mt-6 text-muted-foreground font-body">
            Mon approche est simple, transparente et centrée sur votre bien-être. Pas de mystère inutile, pas de promesses exagérées.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border z-0" />
              )}
              
              <div className="relative z-10 text-center">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark text-primary-foreground font-display text-lg font-semibold mb-4 transition-transform duration-300 group-hover:scale-110">
                  {step.number}
                </div>
                
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
