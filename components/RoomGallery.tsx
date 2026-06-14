"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SmartImage } from "@/components/ui/SmartImage";

export function RoomGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <SmartImage src={images[active]} alt={`${name} — photo ${active + 1}`} fill priority sizes="(max-width:1024px) 100vw, 60vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setActive(i)}
            className={`relative aspect-[4/3] overflow-hidden rounded-xl ring-2 transition ${
              active === i ? "ring-gold" : "ring-transparent opacity-70 hover:opacity-100"
            }`}
            aria-label={`View photo ${i + 1}`}
          >
            <SmartImage src={img} alt="" fill sizes="20vw" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
