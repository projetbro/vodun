import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Kouadio A.",
      location: "Abidjan, Côte d'Ivoire",
      text: "J'étais sceptique au début, mais l'accompagnement de Hounnongan Yaho Justin a été d'une grande aide. Son approche respectueuse et son écoute m'ont permis de retrouver la paix. Je recommande vivement.",
      rating: 5,
    },
    {
      name: "Fatou M.",
      location: "Cotonou, Bénin",
      text: "Après des mois de difficultés, j'ai contacté Hounnongan Yaho Justin. Sa discrétion et son professionnalisme m'ont rassurée. Les solutions proposées étaient adaptées à ma situation personnelle.",
      rating: 5,
    },
    {
      name: "Ibrahim D.",
      location: "Lomé, Togo",
      text: "Un homme de confiance qui respecte vraiment les traditions. Pas de promesses exagérées, juste un accompagnement sincère et efficace. Ma famille et moi lui sommes reconnaissants.",
      rating: 5,
    },
    {
      name: "Aïcha K.",
      location: "Ouagadougou, Burkina Faso",
      text: "La consultation à distance s'est très bien passée. Hounnongan Yaho Justin a pris le temps de m'écouter et de comprendre ma situation avant de me proposer un accompagnement personnalisé.",
      rating: 5,
    },
  ];

  return (
    <section id="temoignages" className="section-spacing">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <p className="text-sm tracking-[0.15em] uppercase text-primary font-medium">
            Témoignages
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight">
            Ce que disent les personnes accompagnées
          </h2>
          <div className="divider-subtle" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Découvrez les expériences de personnes qui ont fait confiance à Hounnongan SOGNANNOU Yaho Justin pour leur accompagnement spirituel.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elevated p-6 lg:p-8 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground font-body leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground font-body italic">
            * Les prénoms ont été modifiés pour préserver la confidentialité des personnes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
