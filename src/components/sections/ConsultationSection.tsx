import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/22901955850961?text=Bonjour%20Hounnongan%20Yaho%20Justin,%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20consultation.";

const ConsultationSection = () => {
  const options = [
    {
      icon: MapPin,
      title: "Consultation sur place",
      description: "Rencontrez-moi directement pour une consultation en personne.",
    },
    {
      icon: MessageCircle,
      title: "Consultation à distance",
      description: "Échangez avec moi par téléphone ou WhatsApp, où que vous soyez.",
    },
  ];

  return (
    <section id="consultation" className="section-spacing bg-secondary/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className="space-y-4 mb-12">
            <p className="text-sm tracking-[0.15em] uppercase text-primary font-medium">
              Consultation
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight">
              Prendre rendez-vous
            </h2>
            <div className="divider-subtle" />
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              La première étape est simple : contactez-moi pour discuter de votre situation. Cet échange initial est sans engagement.
            </p>
          </div>

          {/* Options */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {options.map((option, index) => (
              <div
                key={index}
                className="card-elevated p-6 text-center transition-all duration-300 hover:shadow-elevated"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                <Phone className="w-5 h-5 mr-2" />
                Demander une consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground font-body">
              Disponible du lundi au samedi • Réponse sous 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
