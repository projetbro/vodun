import { Compass, Users, Flame } from "lucide-react";
import consultationBg from "@/assets/consultation-bg.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Compass,
      title: "Consultation spirituelle",
      description: "Une consultation approfondie pour comprendre votre situation et identifier les causes de vos difficultés. Cette étape est essentielle avant tout accompagnement.",
      hasBackground: true,
    },
    {
      icon: Users,
      title: "Accompagnement des difficultés",
      description: "Un suivi personnalisé pour vous aider à traverser les périodes difficiles : problèmes familiaux, blocages, situations inexpliquées. Chaque cas est unique.",
      hasBackground: false,
    },
    {
      icon: Flame,
      title: "Rituels traditionnels",
      description: "Lorsque la situation le nécessite, je peux procéder à des rituels traditionnels adaptés. Ces pratiques sont réalisées dans le strict respect des traditions ancestrales.",
      hasBackground: false,
    },
  ];

  return (
    <section id="services" className="section-spacing bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm tracking-[0.15em] uppercase text-primary font-medium mb-4">
            Services & Accompagnement
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight mb-4">
            Ce que je propose
          </h2>
          <div className="divider-subtle" />
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-elevated p-8 text-center transition-all duration-300 hover:shadow-elevated group relative overflow-hidden"
            >
              {/* Background image for Consultation card */}
              {service.hasBackground && (
                <div 
                  className="absolute inset-0 bg-cover bg-center blur-sm opacity-10"
                  style={{ backgroundImage: `url(${consultationBg})` }}
                />
              )}
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 transition-colors duration-300 group-hover:bg-primary/20">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-12 max-w-xl mx-auto font-body">
          Chaque accompagnement est adapté à votre situation personnelle. Je ne propose jamais de solution générique — votre cas est unique et mérite une attention particulière.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
