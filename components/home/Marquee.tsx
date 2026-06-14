"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const items = [
  "12 Acres of Gardens",
  "Cosy Cottages",
  "Restaurant & Bar",
  "Garden Weddings",
  "Team Building",
  "Picnics & Photoshoots",
  "M-Pesa Accepted",
  "Free Parking",
  "Minutes from Nairobi",
  "Open Daily",
];

export function Marquee() {
  return (
    <section className="border-y border-forest/10 bg-forest py-5 text-cream">
      <div className="mask-fade-x overflow-hidden">
        <motion.div
          className="flex w-max gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-8 text-lg font-medium tracking-wide">
              <span className="font-display italic text-cream/90">{item}</span>
              <Leaf size={16} className="shrink-0 text-gold-light" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
