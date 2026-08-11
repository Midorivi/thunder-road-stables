import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryGridProps {
  images: string[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeLightbox = () => setSelectedIndex(null);
  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

  useEffect(() => {
    if (selectedIndex === null) {
      return undefined;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeLightbox();
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setSelectedIndex((current) => (current === null ? current : (current - 1 + images.length) % images.length));
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setSelectedIndex((current) => (current === null ? current : (current + 1) % images.length));
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])')
      ).filter((element) => !element.hasAttribute('disabled'));

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, selectedIndex]);

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
            <img src={src} alt={`Thunder Road Stables gallery photo ${index + 1}`} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" />
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
            ref={dialogRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111517]/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
            onClick={closeLightbox}
          >
            <button ref={closeButtonRef} className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full text-white/70 hover:text-white" onClick={closeLightbox} aria-label="Close gallery">
              <X size={32} />
            </button>
            <button
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white/70 hover:text-white md:left-8"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
              }}
            >
              <ChevronLeft size={48} />
            </button>
            <img
              src={selectedImage ?? undefined}
              alt={`Thunder Road Stables gallery photo ${selectedIndex + 1}`}
              className="max-h-[90vh] max-w-full rounded-[1.2rem] object-contain"
              onClick={(event) => event.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white/70 hover:text-white md:right-8"
              aria-label="Next image"
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
