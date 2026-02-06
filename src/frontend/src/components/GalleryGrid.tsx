import { type ReactNode } from 'react';

interface GalleryGridProps {
  children: ReactNode;
  title: string;
}

export function GalleryGrid({ children, title }: GalleryGridProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
}

interface GalleryImageProps {
  src: string;
  alt: string;
}

export function GalleryImage({ src, alt }: GalleryImageProps) {
  return (
    <div className="aspect-video overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all group">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
  );
}
