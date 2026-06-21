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

/**
 * Infinite feature strip. Uses a pure-CSS keyframe animation (not a JS-driven
 * transform) and gradient edge-fades instead of a CSS mask — both far more
 * GPU-stable on mobile, which avoids compositing/"static" artifacts.
 */
export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-forest/10 bg-forest py-5 text-cream">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap [transform:translateZ(0)] [backface-visibility:hidden]">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-lg font-medium tracking-wide">
            <span className="font-display italic text-cream/90">{item}</span>
            <Leaf size={16} className="shrink-0 text-gold-light" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-forest to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-forest to-transparent" />
    </section>
  );
}
