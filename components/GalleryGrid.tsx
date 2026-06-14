"use client";

import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery, galleryCategories, type GalleryItem } from "@/lib/data";

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items: GalleryItem[] = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  const close = () => setLightbox(null);
  const next = () => setLightbox((i) => (i === null ? i : (i + 1) % items.length));
  const prev = () => setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length));

  return (
    <div>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-2.5">
        {galleryCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              filter === c ? "bg-forest text-cream shadow-soft" : "bg-white text-forest-900/70 ring-1 ring-forest/10 hover:ring-gold"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <LayoutGroup>
        <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          <AnimatePresence>
            {items.map((item, i) => (
              <motion.button
                layout
                key={item.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-soft"
              >
                <SmartImage
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={i % 3 === 0 ? 1000 : 600}
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-forest-900/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm font-medium text-cream">{item.category}</span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-900/95 p-4"
            onClick={close}
          >
            <button onClick={close} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close">
              <X size={22} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-8" aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-8" aria-label="Next">
              <ChevronRight size={24} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <SmartImage src={items[lightbox].src} alt={items[lightbox].alt} fill sizes="90vw" className="object-contain" priority />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
