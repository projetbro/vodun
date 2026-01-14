import { Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Name */}
          <div>
            <p className="font-display font-semibold text-lg mb-2">
              Hounnongan SOGNANNOU Yaho Justin
            </p>
            <p className="text-sm text-background/70 font-body">
              Accompagnement spirituel traditionnel
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <a
              href="tel:+22500000000"
              className="inline-flex items-center gap-2 text-background hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-body">+225 00 00 00 00</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-sm text-background/70 font-body">
              © {currentYear} Tous droits réservés
            </p>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-xs text-background/50 font-body">
            Ce site est destiné à la présentation des services d'accompagnement spirituel traditionnel. 
            Aucune promesse de guérison n'est faite. Consultez un professionnel de santé pour tout problème médical.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
