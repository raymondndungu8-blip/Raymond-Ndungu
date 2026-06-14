"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { SmartImage } from "@/components/ui/SmartImage";
import { useRef } from "react";
import { ChevronDown, MapPin, Star } from "lucide-react";
import { site, photos } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <SmartImage
          src={photos.sign}
          alt="The gardens and outdoor dining at Ankara Resort"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/35 to-forest-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/50 to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="container-x relative flex h-full flex-col justify-center pt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-sm"
        >
          <MapPin size={13} className="text-gold-light" /> Ongata Rongai · Kajiado County, Kenya
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-[2.6rem] font-semibold leading-[1.05] text-white text-balance sm:text-6xl lg:text-7xl"
        >
          Your Nature Escape,{" "}
          <span className="italic text-gold-light">Just Outside</span> Nairobi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          Cottages, gardens and unhurried hospitality on twelve green acres — the
          premier nature retreat for families, couples and celebrations near the city.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link href="/book" className="btn-primary">Book Your Stay</Link>
          <Link href="/rooms" className="btn-outline">Explore the Resort</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex items-center gap-3 text-sm text-white/85"
        >
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="fill-gold text-gold" />
            ))}
          </div>
          <span>
            <strong className="font-semibold text-white">{site.rating}/5</strong> from{" "}
            {site.reviewCount}+ guest reviews
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}
