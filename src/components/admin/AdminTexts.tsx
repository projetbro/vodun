import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Save, RotateCcw, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SectionText {
  id: string;
  name: string;
  fields: {
    key: string;
    label: string;
    type: "text" | "textarea";
    value: string;
  }[];
}

const AdminTexts = () => {
  const { toast } = useToast();
  
  // Configuration des contacts
  const [contactConfig, setContactConfig] = useState({
    phoneNumber: "+229 01 95 58 50 61",
    whatsappNumber: "229 01 95 58 50 61",
    whatsappMessage: "Bonjour Maître Spirituel SODRÉGBÉ, je souhaite prendre rendez-vous pour une consultation.",
  });

  const [sections, setSections] = useState<SectionText[]>([
    {
      id: "presentation",
      name: "Section Présentation",
      fields: [
        { 
          key: "title", 
          label: "Titre", 
          type: "text", 
          value: "Une approche fondée sur le respect des traditions" 
        },
        { 
          key: "subtitle", 
          label: "Sous-titre", 
          type: "text", 
          value: "Maître Spirituel SODRÉGBÉ" 
        },
        { 
          key: "description", 
          label: "Description", 
          type: "textarea", 
          value: "Issu d'une lignée de gardiens des traditions vodoun, je mets mon savoir ancestral au service de ceux qui cherchent des solutions à leurs difficultés spirituelles. Mon approche est simple : écouter, comprendre, et accompagner avec respect et discrétion." 
        },
        { 
          key: "quote", 
          label: "Citation", 
          type: "textarea", 
          value: "Chaque personne mérite d'être écoutée avec attention et accompagnée avec dignité, dans le respect total de sa vie privée." 
        },
      ],
    },
    {
      id: "process",
      name: "Section Fonctionnement",
      fields: [
        { key: "title", label: "Titre", type: "text", value: "Comment je fonctionne" },
        { key: "description", label: "Description", type: "textarea", value: "Une approche simple, respectueuse et personnalisée pour vous accompagner dans votre parcours spirituel." },
        { key: "step1_title", label: "Étape 1 - Titre", type: "text", value: "Prise de contact" },
        { key: "step1_desc", label: "Étape 1 - Description", type: "textarea", value: "Vous me contactez par téléphone ou WhatsApp. Je prends le temps de vous écouter et de comprendre votre situation en toute confidentialité." },
        { key: "step2_title", label: "Étape 2 - Titre", type: "text", value: "Consultation" },
        { key: "step2_desc", label: "Étape 2 - Description", type: "textarea", value: "Lors de notre rencontre, j'analyse votre situation avec les méthodes traditionnelles. Je vous explique clairement ce que je perçois et les solutions possibles." },
        { key: "step3_title", label: "Étape 3 - Titre", type: "text", value: "Accompagnement" },
        { key: "step3_desc", label: "Étape 3 - Description", type: "textarea", value: "Si un rituel est nécessaire, je vous accompagne à chaque étape. Vous êtes informé de tout le processus, sans mystère inutile." },
      ],
    },
    {
      id: "services",
      name: "Section Services",
      fields: [
        { key: "title", label: "Titre", type: "text", value: "Services & Accompagnement" },
        { key: "description", label: "Description", type: "textarea", value: "Je propose différentes formes d'accompagnement, adaptées à chaque situation personnelle." },
        { key: "service1_title", label: "Service 1 - Titre", type: "text", value: "Consultation spirituelle" },
        { key: "service1_desc", label: "Service 1 - Description", type: "textarea", value: "Analyse approfondie de votre situation à travers les méthodes traditionnelles pour identifier les causes de vos difficultés." },
        { key: "service2_title", label: "Service 2 - Titre", type: "text", value: "Accompagnement des difficultés" },
        { key: "service2_desc", label: "Service 2 - Description", type: "textarea", value: "Soutien personnalisé pour surmonter les obstacles spirituels qui bloquent votre épanouissement personnel ou professionnel." },
        { key: "service3_title", label: "Service 3 - Titre", type: "text", value: "Rituels traditionnels" },
        { key: "service3_desc", label: "Service 3 - Description", type: "textarea", value: "Cérémonies adaptées à votre situation, réalisées dans le respect strict des traditions ancestrales vodoun." },
      ],
    },
  ]);

  const [originalSections] = useState(sections);
  const [originalContactConfig] = useState(contactConfig);

  const handleFieldChange = (sectionId: string, fieldKey: string, newValue: string) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          fields: section.fields.map(field => 
            field.key === fieldKey ? { ...field, value: newValue } : field
          ),
        };
      }
      return section;
    }));
  };

  const handleSaveSection = (sectionId: string) => {
    toast({ 
      title: "Section enregistrée", 
      description: `Les modifications ont été sauvegardées. Note: Connectez un backend pour persister.` 
    });
  };

  const handleResetSection = (sectionId: string) => {
    const original = originalSections.find(s => s.id === sectionId);
    if (original) {
      setSections(sections.map(s => s.id === sectionId ? original : s));
      toast({ 
        title: "Section réinitialisée", 
        description: "Les valeurs d'origine ont été restaurées." 
      });
    }
  };

  const handleSaveContact = () => {
    toast({ 
      title: "Contacts enregistrés", 
      description: "Les informations de contact ont été mises à jour. Note: Connectez un backend pour persister." 
    });
  };

  const handleResetContact = () => {
    setContactConfig(originalContactConfig);
    toast({ 
      title: "Contacts réinitialisés", 
      description: "Les valeurs d'origine ont été restaurées." 
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display font-semibold">Textes & Configuration</h2>
        <p className="text-muted-foreground font-body">
          Modifiez les textes et les informations de contact du site
        </p>
      </div>

      {/* Contact Configuration */}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-primary/10">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg">Informations de contact</h3>
              <p className="text-sm text-muted-foreground">Numéro de téléphone et WhatsApp affichés sur le site</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Numéro de téléphone (affiché)</Label>
              <Input
                id="phoneNumber"
                value={contactConfig.phoneNumber}
                onChange={(e) => setContactConfig({...contactConfig, phoneNumber: e.target.value})}
                placeholder="+229 XX XX XX XX"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsappNumber">Numéro WhatsApp (sans +)</Label>
              <Input
                id="whatsappNumber"
                value={contactConfig.whatsappNumber}
                onChange={(e) => setContactConfig({...contactConfig, whatsappNumber: e.target.value})}
                placeholder="229 XX XX XX XX"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="whatsappMessage">Message WhatsApp pré-rempli</Label>
              <Textarea
                id="whatsappMessage"
                value={contactConfig.whatsappMessage}
                onChange={(e) => setContactConfig({...contactConfig, whatsappMessage: e.target.value})}
                rows={2}
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6 pt-4 border-t">
            <Button onClick={handleSaveContact} className="gap-2">
              <Save className="w-4 h-4" />
              Enregistrer
            </Button>
            <Button variant="outline" onClick={handleResetContact} className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Réinitialiser
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sections texts */}
      <Accordion type="single" collapsible className="space-y-4">
        {sections.map((section) => (
          <AccordionItem key={section.id} value={section.id} className="border rounded-lg bg-background">
            <AccordionTrigger className="px-6 hover:no-underline">
              <span className="font-display font-semibold">{section.name}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-4">
                {section.fields.map((field) => (
                  <div key={field.key} className="space-y-2">
                    <Label htmlFor={`${section.id}-${field.key}`}>{field.label}</Label>
                    {field.type === "textarea" ? (
                      <Textarea
                        id={`${section.id}-${field.key}`}
                        value={field.value}
                        onChange={(e) => handleFieldChange(section.id, field.key, e.target.value)}
                        rows={3}
                      />
                    ) : (
                      <Input
                        id={`${section.id}-${field.key}`}
                        value={field.value}
                        onChange={(e) => handleFieldChange(section.id, field.key, e.target.value)}
                      />
                    )}
                  </div>
                ))}
                
                <div className="flex gap-3 pt-4 border-t">
                  <Button onClick={() => handleSaveSection(section.id)} className="gap-2">
                    <Save className="w-4 h-4" />
                    Enregistrer
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleResetSection(section.id)}
                    className="gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Réinitialiser
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Note */}
      <Card className="border-dashed bg-muted/30">
        <CardContent className="p-6 text-center">
          <p className="text-sm text-muted-foreground font-body">
            <strong>Note :</strong> Pour que les modifications soient persistantes, un backend (base de données) doit être connecté.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminTexts;
