"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SmartImage } from "@/components/ui/SmartImage";
import { useEffect, useState, type MouseEvent } from "react";
import { ArrowRight, Users, Maximize } from "lucide-react";
import type { Room } from "@/lib/data";

export function RoomCard({ room, index = 0 }: { room: Room; index?: number }) {
  // Mouse-tracked 3D tilt — desktop pointers only (skipped on touch).
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 200, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 200, damping: 18 });

  function onMove(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.article
      onMouseMove={canHover ? onMove : undefined}
      onMouseLeave={canHover ? onLeave : undefined}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      variants={{
        hidden: { opacity: 0, y: canHover ? 30 : 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } },
      }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-forest/5 [transform-style:preserve-3d]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          src={room.image}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {room.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow">
            Most Loved
          </span>
        )}
        <div className="absolute bottom-4 right-4 rounded-full bg-cream/95 px-3.5 py-1.5 text-sm font-semibold text-forest shadow backdrop-blur">
          KES {room.price.toLocaleString()}
          <span className="text-xs font-normal text-forest/60"> / night</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-gold">{room.tagline}</p>
        <h3 className="mt-2 font-display text-2xl text-forest">{room.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-forest-900/60">{room.description}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-forest-900/70">
          <span className="flex items-center gap-1.5"><Users size={14} className="text-gold" />{room.capacity}</span>
          <span className="flex items-center gap-1.5"><Maximize size={14} className="text-gold" />{room.size}</span>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-forest/10 pt-5">
          <Link href={`/rooms/${room.slug}`} className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
            View details
            <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-1" />
          </Link>
          <Link href={`/book?room=${room.slug}`} className="btn-primary !px-5 !py-2.5 text-xs">Book</Link>
        </div>
      </div>
    </motion.article>
  );
}
