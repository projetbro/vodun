import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Publication {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
}

const AdminPublications = () => {
  const { toast } = useToast();
  const [publications, setPublications] = useState<Publication[]>([
    {
      id: "1",
      title: "Consultation spirituelle réussie",
      content: "Un client est venu me consulter pour des blocages dans sa vie professionnelle. Après une séance d'écoute et un rituel adapté, il a retrouvé la paix intérieure.",
      imageUrl: "/placeholder.svg",
      date: "2024-01-15",
    },
    {
      id: "2",
      title: "Nouvelle approche de guérison",
      content: "Je continue d'approfondir mes connaissances traditionnelles pour mieux accompagner mes consultants dans leur parcours spirituel.",
      imageUrl: "/placeholder.svg",
      date: "2024-01-10",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPublication, setEditingPublication] = useState<Publication | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });

  const handleOpenDialog = (publication?: Publication) => {
    if (publication) {
      setEditingPublication(publication);
      setFormData({
        title: publication.title,
        content: publication.content,
        imageUrl: publication.imageUrl,
      });
    } else {
      setEditingPublication(null);
      setFormData({ title: "", content: "", imageUrl: "" });
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPublication) {
      setPublications(publications.map(p => 
        p.id === editingPublication.id 
          ? { ...p, ...formData }
          : p
      ));
      toast({ title: "Publication modifiée", description: "La publication a été mise à jour." });
    } else {
      const newPublication: Publication = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toISOString().split('T')[0],
      };
      setPublications([newPublication, ...publications]);
      toast({ title: "Publication créée", description: "La nouvelle publication a été ajoutée." });
    }
    
    setIsDialogOpen(false);
    setFormData({ title: "", content: "", imageUrl: "" });
  };

  const handleDelete = (id: string) => {
    setPublications(publications.filter(p => p.id !== id));
    toast({ title: "Publication supprimée", description: "La publication a été supprimée." });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-semibold">Publications</h2>
          <p className="text-muted-foreground font-body">Gérez vos actualités et messages</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog()} className="gap-2">
              <Plus className="w-4 h-4" />
              Nouvelle publication
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-display">
                {editingPublication ? "Modifier la publication" : "Nouvelle publication"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titre</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Titre de la publication"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Contenu</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Contenu de la publication..."
                  rows={4}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">URL de l'image</Label>
                <Input
                  id="image"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://exemple.com/image.jpg"
                />
              </div>
              <div className="flex gap-3 justify-end pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Annuler
                </Button>
                <Button type="submit">
                  {editingPublication ? "Enregistrer" : "Publier"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {publications.map((publication) => (
          <Card key={publication.id}>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {publication.imageUrl && publication.imageUrl !== "/placeholder.svg" ? (
                    <img 
                      src={publication.imageUrl} 
                      alt={publication.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImageIcon className="w-8 h-8 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-semibold text-lg">{publication.title}</h3>
                      <p className="text-sm text-muted-foreground font-body mb-2">{publication.date}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleOpenDialog(publication)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDelete(publication.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 font-body line-clamp-2">
                    {publication.content}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {publications.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground font-body">Aucune publication pour le moment</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminPublications;
