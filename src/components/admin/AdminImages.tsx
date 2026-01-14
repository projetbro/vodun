import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, ImageIcon, RefreshCw } from "lucide-react";
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
      name: "Image Hero",
      section: "Section d'accueil",
      currentUrl: "/src/assets/hero-background.jpg",
    },
    {
      id: "presentation",
      name: "Photo de présentation",
      section: "Section Présentation",
      currentUrl: "/src/assets/presentation-portrait.jpg",
    },
  ]);

  const [uploadingId, setUploadingId] = useState<string | null>(null);

  const handleFileChange = (imageId: string, file: File | null) => {
    if (!file) return;

    setUploadingId(imageId);

    // Simulation d'upload (frontend only)
    setTimeout(() => {
      const fakeUrl = URL.createObjectURL(file);
      setImages(images.map(img => 
        img.id === imageId ? { ...img, currentUrl: fakeUrl } : img
      ));
      setUploadingId(null);
      toast({ 
        title: "Image mise à jour", 
        description: `L'image "${images.find(i => i.id === imageId)?.name}" a été remplacée.` 
      });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display font-semibold">Images du site</h2>
        <p className="text-muted-foreground font-body">
          Modifiez les images principales affichées sur le site
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {images.map((image) => (
          <Card key={image.id}>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-display font-semibold text-lg">{image.name}</h3>
                  <p className="text-sm text-muted-foreground font-body">{image.section}</p>
                </div>

                {/* Preview */}
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
                    <ImageIcon className="w-12 h-12 text-muted-foreground" />
                  )}
                </div>

                {/* Upload */}
                <div className="space-y-2">
                  <Label htmlFor={`upload-${image.id}`} className="sr-only">
                    Téléverser une nouvelle image
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id={`upload-${image.id}`}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileChange(image.id, e.target.files?.[0] || null)}
                    />
                    <Button
                      variant="outline"
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
                          Remplacer l'image
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Formats acceptés : JPG, PNG, WebP
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-dashed">
        <CardContent className="p-8 text-center">
          <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-display font-semibold mb-2">Ajouter une nouvelle image</h3>
          <p className="text-sm text-muted-foreground font-body mb-4">
            Pour ajouter de nouvelles sections d'images, contactez l'administrateur technique.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminImages;
