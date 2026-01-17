import { Shield, Heart, Eye } from "lucide-react";
import portraitImage from "@/assets/presentation-portrait.jpg";

const PresentationSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Respect des traditions",
      description: "Un savoir ancestral transmis de génération en génération.",
    },
    {
      icon: Heart,
      title: "Écoute et humanité",
      description: "Chaque situation est unique et mérite une attention particulière.",
    },
    {
      icon: Eye,
      title: "Discrétion totale",
      description: "Vos confidences restent strictement entre nous.",
    },
  ];

  return (
    <section id="presentation" className="section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={portraitImage} 
                  alt="Maître Spirituel SODRÉGBÉ" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content column */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.15em] uppercase text-primary font-medium">
                Présentation
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight">
                Maître Spirituel SODRÉGBÉ
              </h2>
              <div className="divider-subtle !mx-0" />
            </div>
            
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Je suis <strong className="text-foreground">Maître Spirituel SODRÉGBÉ (SOGNANNOU Justin)</strong>. Ce titre, transmis selon les rites de nos ancêtres, représente un engagement profond envers l'accompagnement spirituel des personnes en difficulté.
              </p>
              <p>
                Ma pratique repose sur le respect absolu des traditions vodoun, une écoute sincère de chaque situation, et une approche personnalisée. Je ne fais aucune promesse irréaliste — mon rôle est d'accompagner, d'éclairer et de proposer des solutions adaptées à chaque personne.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
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
      </div>
    </section>
  );
};

export default PresentationSection;
