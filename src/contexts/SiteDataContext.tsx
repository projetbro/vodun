import { createContext, useContext, useState, ReactNode } from "react";

// Types
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface SiteConfig {
  phoneNumber: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappMessage: string;
}

interface SiteDataContextType {
  galleryImages: GalleryImage[];
  setGalleryImages: (images: GalleryImage[]) => void;
  config: SiteConfig;
  setConfig: (config: SiteConfig) => void;
  getWhatsAppLink: () => string;
  getPhoneLink: () => string;
}

const defaultConfig: SiteConfig = {
  phoneNumber: "+22901955850 61",
  phoneDisplay: "+229 01 95 58 50 61",
  whatsappNumber: "22901955850 61",
  whatsappMessage: "Bonjour Maître Spirituel SODRÉGBÉ, je souhaite prendre rendez-vous pour une consultation.",
};

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error("useSiteData must be used within a SiteDataProvider");
  }
  return context;
};

interface SiteDataProviderProps {
  children: ReactNode;
}

export const SiteDataProvider = ({ children }: SiteDataProviderProps) => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([
    { id: "gallery-1", src: "/src/assets/gallery-1.jpg", alt: "Autel traditionnel vodoun" },
    { id: "gallery-2", src: "/src/assets/gallery-2.jpg", alt: "Éléments rituels sacrés" },
    { id: "gallery-3", src: "/src/assets/gallery-3.jpg", alt: "Maître SODRÉGBÉ en cérémonie" },
    { id: "gallery-4", src: "/src/assets/gallery-4.jpg", alt: "Pratiques traditionnelles" },
    { id: "gallery-5", src: "/src/assets/gallery-5.jpg", alt: "Cérémonie au bord de la mer" },
  ]);

  const [config, setConfig] = useState<SiteConfig>(defaultConfig);

  const getWhatsAppLink = () => {
    const cleanNumber = config.whatsappNumber.replace(/\s/g, "");
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(config.whatsappMessage)}`;
  };

  const getPhoneLink = () => {
    const cleanNumber = config.phoneNumber.replace(/\s/g, "");
    return `tel:${cleanNumber}`;
  };

  return (
    <SiteDataContext.Provider
      value={{
        galleryImages,
        setGalleryImages,
        config,
        setConfig,
        getWhatsAppLink,
        getPhoneLink,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};
