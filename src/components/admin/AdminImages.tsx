import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, ImageIcon, RefreshCw, Trash2, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SiteImage {
  id: string;
  name: string;
  section: string;
  currentUrl: string;
}

const AdminImages = () => {
  const { toast } = useToast();
  const [images, setImages] = useState<SiteImage[]>([
    {
      id: "hero",
      name: "Image Hero (Fond)",
      section: "Section d'accueil",
      currentUrl: "/src/assets/hero-background.jpg",
    },
    {
      id: "presentation",
      name: "Photo de présentation",
      section: "Section Présentation",
      currentUrl: "/src/assets/presentation-portrait.jpg",
    },
    {
      id: "consultation-bg",
      name: "Fond Consultation",
      section: "Carte Consultation spirituelle",
      currentUrl: "/src/assets/consultation-bg.jpg",
    },
    {
      id: "gallery-1",
      name: "Galerie - Image 1",
      section: "Section Galerie",
      currentUrl: "/src/assets/gallery-1.jpg",
    },
    {
      id: "gallery-2",
      name: "Galerie - Image 2",
      section: "Section Galerie",
      currentUrl: "/src/assets/gallery-2.jpg",
    },
    {
      id: "gallery-3",
      name: "Galerie - Image 3",
      section: "Section Galerie",
      currentUrl: "/src/assets/gallery-3.jpg",
    },
    {
      id: "gallery-4",
      name: "Galerie - Image 4",
      section: "Section Galerie",
      currentUrl: "/src/assets/gallery-4.jpg",
    },
    {
      id: "gallery-5",
      name: "Galerie - Image 5",
      section: "Section Galerie",
      currentUrl: "/src/assets/gallery-5.jpg",
    },
  ]);

  const [uploadingId, setUploadingId] = useState<string | null>(null);

  const handleFileChange = (imageId: string, file: File | null) => {
    if (!file) return;

    setUploadingId(imageId);

    // Simulation d'upload (frontend only - nécessite backend pour persistance)
    setTimeout(() => {
      const fakeUrl = URL.createObjectURL(file);
      setImages(images.map(img => 
        img.id === imageId ? { ...img, currentUrl: fakeUrl } : img
      ));
      setUploadingId(null);
      toast({ 
        title: "Image mise à jour", 
        description: `L'image "${images.find(i => i.id === imageId)?.name}" a été remplacée. Note: Connectez un backend pour sauvegarder.` 
      });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display font-semibold">Images du site</h2>
        <p className="text-muted-foreground font-body">
          Gérez toutes les images affichées sur le site (hero, présentation, galerie)
        </p>
      </div>

      {/* Section principale */}
      <div className="space-y-4">
        <h3 className="font-display font-semibold text-lg border-b pb-2">Images principales</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.filter(img => !img.id.startsWith("gallery")).map((image) => (
            <Card key={image.id}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-display font-semibold text-sm">{image.name}</h4>
                    <p className="text-xs text-muted-foreground font-body">{image.section}</p>
                  </div>

                  <div className="aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                    {image.currentUrl ? (
                      <img
                        src={image.currentUrl}
                        alt={image.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <ImageIcon className="w-8 h-8 text-muted-foreground" />
                    )}
                  </div>

                  <div>
                    <Input
                      id={`upload-${image.id}`}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileChange(image.id, e.target.files?.[0] || null)}
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2"
                      onClick={() => document.getElementById(`upload-${image.id}`)?.click()}
                      disabled={uploadingId === image.id}
                    >
                      {uploadingId === image.id ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Téléversement...
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4" />
                          Remplacer
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Section Galerie */}
      <div className="space-y-4">
        <h3 className="font-display font-semibold text-lg border-b pb-2">Galerie photos</h3>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {images.filter(img => img.id.startsWith("gallery")).map((image) => (
            <Card key={image.id}>
              <CardContent className="p-3">
                <div className="space-y-2">
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                    {image.currentUrl ? (
                      <img
                        src={image.currentUrl}
                        alt={image.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground text-center font-body">{image.name.replace("Galerie - ", "")}</p>

                  <div>
                    <Input
                      id={`upload-${image.id}`}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileChange(image.id, e.target.files?.[0] || null)}
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-1 text-xs"
                      onClick={() => document.getElementById(`upload-${image.id}`)?.click()}
                      disabled={uploadingId === image.id}
                    >
                      {uploadingId === image.id ? (
                        <RefreshCw className="w-3 h-3 animate-spin" />
                      ) : (
                        <>
                          <Upload className="w-3 h-3" />
                          Modifier
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Note */}
      <Card className="border-dashed bg-muted/30">
        <CardContent className="p-6 text-center">
          <p className="text-sm text-muted-foreground font-body">
            <strong>Note :</strong> Pour que les modifications soient persistantes, un backend (base de données) doit être connecté. 
            Actuellement, les changements sont temporaires et seront perdus au rechargement.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminImages;
