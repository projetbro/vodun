import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Save, RotateCcw } from "lucide-react";
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
          value: "Hounnongan Yaho Justin" 
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
        { 
          key: "title", 
          label: "Titre", 
          type: "text", 
          value: "Comment je fonctionne" 
        },
        { 
          key: "description", 
          label: "Description", 
          type: "textarea", 
          value: "Une approche simple, respectueuse et personnalisée pour vous accompagner dans votre parcours spirituel." 
        },
        { 
          key: "step1_title", 
          label: "Étape 1 - Titre", 
          type: "text", 
          value: "Prise de contact" 
        },
        { 
          key: "step1_desc", 
          label: "Étape 1 - Description", 
          type: "textarea", 
          value: "Vous me contactez par téléphone ou WhatsApp. Je prends le temps de vous écouter et de comprendre votre situation en toute confidentialité." 
        },
        { 
          key: "step2_title", 
          label: "Étape 2 - Titre", 
          type: "text", 
          value: "Consultation" 
        },
        { 
          key: "step2_desc", 
          label: "Étape 2 - Description", 
          type: "textarea", 
          value: "Lors de notre rencontre, j'analyse votre situation avec les méthodes traditionnelles. Je vous explique clairement ce que je perçois et les solutions possibles." 
        },
        { 
          key: "step3_title", 
          label: "Étape 3 - Titre", 
          type: "text", 
          value: "Accompagnement" 
        },
        { 
          key: "step3_desc", 
          label: "Étape 3 - Description", 
          type: "textarea", 
          value: "Si un rituel est nécessaire, je vous accompagne à chaque étape. Vous êtes informé de tout le processus, sans mystère inutile." 
        },
      ],
    },
    {
      id: "services",
      name: "Section Services",
      fields: [
        { 
          key: "title", 
          label: "Titre", 
          type: "text", 
          value: "Services & Accompagnement" 
        },
        { 
          key: "description", 
          label: "Description", 
          type: "textarea", 
          value: "Je propose différentes formes d'accompagnement, adaptées à chaque situation personnelle." 
        },
        { 
          key: "service1_title", 
          label: "Service 1 - Titre", 
          type: "text", 
          value: "Consultation spirituelle" 
        },
        { 
          key: "service1_desc", 
          label: "Service 1 - Description", 
          type: "textarea", 
          value: "Analyse approfondie de votre situation à travers les méthodes traditionnelles pour identifier les causes de vos difficultés." 
        },
        { 
          key: "service2_title", 
          label: "Service 2 - Titre", 
          type: "text", 
          value: "Accompagnement des difficultés" 
        },
        { 
          key: "service2_desc", 
          label: "Service 2 - Description", 
          type: "textarea", 
          value: "Soutien personnalisé pour surmonter les obstacles spirituels qui bloquent votre épanouissement personnel ou professionnel." 
        },
        { 
          key: "service3_title", 
          label: "Service 3 - Titre", 
          type: "text", 
          value: "Rituels traditionnels" 
        },
        { 
          key: "service3_desc", 
          label: "Service 3 - Description", 
          type: "textarea", 
          value: "Cérémonies adaptées à votre situation, réalisées dans le respect strict des traditions ancestrales vodoun." 
        },
      ],
    },
  ]);

  const [originalSections] = useState(sections);

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
      description: `Les modifications de la section ont été sauvegardées.` 
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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display font-semibold">Textes du site</h2>
        <p className="text-muted-foreground font-body">
          Modifiez les textes des différentes sections du site
        </p>
      </div>

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
    </div>
  );
};

export default AdminTexts;
