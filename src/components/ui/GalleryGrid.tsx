import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryGridProps {
  images: string[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => setSelectedIndex(null);
  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((src, index) => (
          <motion.button
            key={src}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="group relative overflow-hidden rounded-[1.4rem] ring-1 ring-black/5"
            onClick={() => setSelectedIndex(index)}
          >
            <img src={src} alt={`Gallery image ${index + 1}`} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,21,23,0),rgba(17,21,23,0.28))] opacity-80" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111517]/95 p-4"
            onClick={closeLightbox}
          >
            <button className="absolute right-6 top-6 text-white/70 hover:text-white" onClick={closeLightbox}>
              <X size={32} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white md:left-8"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
              }}
            >
              <ChevronLeft size={48} />
            </button>
            <img
              src={selectedImage ?? undefined}
              alt={`Gallery image ${selectedIndex + 1}`}
              className="max-h-[90vh] max-w-full rounded-[1.2rem] object-contain"
              onClick={(event) => event.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white md:right-8"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % images.length);
              }}
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
