"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "/building.jpg",
    alt: "Hostel Building",
    title: "Sai Chalapathi Hostel Building",
  },
  {
    src: "/room.jpg",
    alt: "Room",
    title: "Comfortable AC Rooms",
  },
  {
    src: "/hall.jpg",
    alt: "Room Hall",
    title: "Spacious Dining Hall",
  },
  {
    src: "/balcony.jpg",
    alt: "Balcony",
    title: "Peaceful Balcony View",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
  };
  
  const goToNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Take a Tour
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Photo Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Explore our well-maintained facilities and comfortable living spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-background font-medium">{image.title}</p>
              </div>
            </button>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl p-0 bg-background/95 backdrop-blur border-border">
            <div className="relative aspect-video">
              {selectedImage !== null && (
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-2 right-2 text-foreground hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-foreground hover:bg-muted"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground hover:bg-muted"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            {selectedImage !== null && (
              <div className="p-4 text-center">
                <p className="font-medium text-foreground">{galleryImages[selectedImage].title}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
