import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { src: gallery1, alt: "Autel traditionnel vodoun" },
    { src: gallery2, alt: "Éléments rituels sacrés" },
    { src: gallery3, alt: "Maître SODRÉGBÉ en cérémonie" },
    { src: gallery4, alt: "Pratiques traditionnelles" },
    { src: gallery5, alt: "Cérémonie au bord de la mer" },
  ];

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="galerie" className="section-spacing bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm tracking-[0.15em] uppercase text-primary font-medium mb-4">
            En images
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight mb-4">
            Galerie
          </h2>
          <div className="divider-subtle" />
        </div>

        {/* Gallery Grid - 1 colonne mobile, 2 colonnes tablette/PC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group relative shadow-soft hover:shadow-elevated transition-all duration-300"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto font-body">
          Découvrez l'authenticité de nos pratiques ancestrales à travers ces images.
        </p>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {selectedIndex !== null && (
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
