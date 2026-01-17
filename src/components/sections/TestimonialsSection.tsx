import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aminata D.",
      location: "Cotonou, Bénin",
      text: "Après avoir obtenu mon diplôme, je n'arrivais pas à trouver un emploi malgré tous mes efforts. Ma situation ne bougeait pas. Grâce à l'accompagnement du Maître Spirituel SODRÉGBÉ, une solution a été trouvée et j'ai commencé à avancer progressivement dans ma vie professionnelle.",
      rating: 5,
    },
    {
      name: "Adjoua M.",
      location: "Abidjan, Côte d'Ivoire",
      text: "Dans mon couple, je faisais face à des difficultés pour avoir un enfant. Cette situation créait des tensions dans mon foyer. Après être venue consulter le Maître Spirituel SODRÉGBÉ, j'ai trouvé satisfaction. Aujourd'hui, j'arrive à enfanter sans problème.",
      rating: 5,
    },
    {
      name: "Kodjo T.",
      location: "Lomé, Togo",
      text: "J'avais perdu ma virilité après une mauvaise rencontre. Je n'arrivais plus à avoir d'érection. Après être venu me faire consulter auprès du Maître Spirituel SODRÉGBÉ, une solution m'a été apportée. Aujourd'hui, ma situation va bien.",
      rating: 5,
    },
    {
      name: "Fatimata O.",
      location: "Ouagadougou, Burkina Faso",
      text: "J'étais une grande commerçante et j'ai perdu subitement ma clientèle, d'un seul coup. Après plusieurs recherches sans solution, j'ai finalement eu recours aux services du Maître Spirituel SODRÉGBÉ. Grâce à son accompagnement, j'ai recommencé à vendre comme jamais.",
      rating: 5,
    },
    {
      name: "Mamadou S.",
      location: "Dakar, Sénégal",
      text: "À cause de certains blocages spirituels et des mauvais regards, mes deux enfants n'arrivaient pas à avancer dans leurs études et redoublaient régulièrement. Avec l'intervention du Maître Spirituel SODRÉGBÉ, ils ont pu décrocher des bourses d'études en Amérique.",
      rating: 5,
    },
    {
      name: "Ibrahima K.",
      location: "Paris, France",
      text: "Après la mort de mon père, je faisais face à un conflit domanial. Après consultation et accompagnement, la justice a finalement tranché en ma faveur. Tout cela grâce à l'accompagnement du Maître Spirituel SODRÉGBÉ.",
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
