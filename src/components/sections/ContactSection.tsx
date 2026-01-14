import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Lock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    
    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm tracking-[0.15em] uppercase text-primary font-medium">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight">
              Me contacter
            </h2>
            <div className="divider-subtle" />
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="tel:+22500000000"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-body font-medium">+225 00 00 00 00</span>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground font-body">
                  Votre nom
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Entrez votre nom"
                  required
                  className="font-body"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground font-body">
                  Téléphone / WhatsApp
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+225 00 00 00 00"
                  required
                  className="font-body"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground font-body">
                Votre message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez brièvement votre situation..."
                rows={5}
                required
                className="font-body resize-none"
              />
            </div>

            {/* Privacy notice */}
            <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
              <Lock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground font-body">
                Vos informations sont strictement confidentielles. Elles ne seront jamais partagées avec des tiers.
              </p>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Envoi en cours..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
