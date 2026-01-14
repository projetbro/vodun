import { Shield, Heart, Eye } from "lucide-react";

const PresentationSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Respect des traditions",
      description: "Un accompagnement ancré dans les pratiques ancestrales transmises de génération en génération.",
    },
    {
      icon: Heart,
      title: "Écoute et humanité",
      description: "Chaque personne est unique. L'écoute attentive est au cœur de ma démarche.",
    },
    {
      icon: Eye,
      title: "Discrétion totale",
      description: "Vos échanges et votre situation restent strictement confidentiels.",
    },
  ];

  return (
    <section id="presentation" className="section-spacing bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.15em] uppercase text-primary font-medium">
                Présentation
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight">
                Hounnongan SOGNANNOU Yaho Justin
              </h2>
              <div className="divider-subtle !mx-0" />
            </div>
            
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Je suis SOGNANNOU Justin, connu sous le titre traditionnel de <strong className="text-foreground">Hounnongan SOGNANNOU Yaho Justin</strong>. Ce titre, transmis selon les rites de nos ancêtres, représente un engagement profond envers l'accompagnement spirituel des personnes en difficulté.
              </p>
              <p>
                Ma pratique repose sur le respect absolu des traditions vodoun, une écoute sincère de chaque situation, et une approche personnalisée. Je ne fais aucune promesse irréaliste — mon rôle est d'accompagner, d'éclairer et de proposer des solutions adaptées à chaque personne.
              </p>
            </div>
          </div>
          
          {/* Values cards */}
          <div className="space-y-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-elevated p-6 flex items-start gap-4 transition-all duration-300 hover:shadow-elevated"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
