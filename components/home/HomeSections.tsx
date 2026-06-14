"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Tent, Camera, Users, Flower2, Check, Utensils } from "lucide-react";
import { rooms, activities, stats, reviews, dining, site, photos } from "@/lib/data";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading } from "@/components/SectionHeading";
import { RoomCard } from "@/components/RoomCard";
import { ReviewCard } from "@/components/ReviewCard";
import { Stars } from "@/components/ui/Stars";

const activityIcons: Record<string, React.ReactNode> = {
  picnic: <Tent size={26} />,
  photoshoot: <Camera size={26} />,
  "team-building": <Users size={26} />,
  "garden-events": <Flower2 size={26} />,
};

/* ---------------- Stats ---------------- */
export function StatsBar() {
  return (
    <section className="relative z-10 -mt-16 px-5">
      <Stagger className="container-x grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-forest/10 shadow-card lg:grid-cols-4">
        {stats.map((s) => (
          <Reveal key={s.label} as="div" className="bg-cream p-6 text-center sm:p-8">
            <p className="font-display text-3xl font-semibold text-forest sm:text-4xl">
              <Counter value={s.value} suffix={s.suffix} decimals={(s as { decimals?: number }).decimals ?? 0} />
            </p>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-forest-900/55">{s.label}</p>
          </Reveal>
        ))}
      </Stagger>
    </section>
  );
}

/* ---------------- Rooms preview ---------------- */
export function RoomsPreview() {
  return (
    <section className="container-x py-20 sm:py-28">
      <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
        <SectionHeading
          align="left"
          eyebrow="Stay With Us"
          title="Cottages & rooms made for resting"
          intro="Three distinct stays, each opening onto the gardens. Whatever the occasion, you'll wake to birdsong and green as far as you can see."
        />
        <Reveal>
          <Link href="/rooms" className="btn-ghost shrink-0">All rooms <ArrowRight size={16} /></Link>
        </Reveal>
      </div>

      <Stagger className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room, i) => (
          <RoomCard key={room.slug} room={room} index={i} />
        ))}
      </Stagger>
    </section>
  );
}

/* ---------------- Activities strip ---------------- */
export function ActivitiesStrip() {
  return (
    <section className="bg-forest py-20 text-cream sm:py-28">
      <div className="container-x">
        <SectionHeading
          light
          eyebrow="Things To Do"
          title="More than a place to sleep"
          intro="Twelve acres of green to play, celebrate and unwind. From lazy picnics to full-scale weddings, the grounds are yours."
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a) => (
            <Reveal key={a.slug} as="div">
              <Link
                href={`/activities/${a.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 transition-all hover:-translate-y-1 hover:border-gold/40 hover:bg-white/10"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-gold-light transition-colors group-hover:bg-gold group-hover:text-forest">
                  {activityIcons[a.slug]}
                </span>
                <h3 className="mt-5 font-display text-xl text-cream">{a.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/65">{a.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light">
                  Discover <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- About teaser ---------------- */
export function AboutTeaser() {
  const points = ["12 acres of manicured gardens", "30 minutes from Nairobi CBD", "Family-owned, warmly run"];
  return (
    <section className="container-x grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
      <Reveal>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card">
            <Image
              src={photos.waterfall}
              alt="The on-site waterfall at Ankara Resort"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -bottom-6 -right-2 w-44 rounded-2xl bg-white p-5 shadow-card sm:-right-6"
          >
            <Stars rating={site.rating} />
            <p className="mt-2 font-display text-2xl text-forest">{site.rating} / 5</p>
            <p className="text-xs text-forest-900/55">Loved by {site.reviewCount}+ guests</p>
          </motion.div>
        </div>
      </Reveal>

      <div>
        <SectionHeading
          align="left"
          eyebrow="Our Story"
          title="A green sanctuary, minutes from the city"
        />
        <Reveal delay={1}>
          <p className="mt-5 text-base leading-relaxed text-forest-900/70">
            Ankara Resort began with a simple idea: that you shouldn't have to drive for
            hours to breathe clean air and slow down. Tucked along Merisho Road in Ongata
            Rongai, our gardens, cottages and club house have become a favourite escape for
            Nairobi families, couples and companies alike.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm font-medium text-forest-900/80">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-forest/10 text-forest"><Check size={14} /></span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={3}>
          <Link href="/about" className="btn-ghost mt-8">Learn more about us <ArrowRight size={16} /></Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Dining highlight ---------------- */
export function DiningHighlight() {
  return (
    <section className="relative overflow-hidden bg-sand py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <SectionHeading align="left" eyebrow="Restaurant & Bar" title="Fresh plates, golden sundowners" />
          <Reveal delay={1}>
            <p className="mt-5 text-base leading-relaxed text-forest-900/70">{dining.intro}</p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest/5 px-4 py-2 text-sm font-medium text-forest">
              <Utensils size={15} className="text-gold" /> {dining.hours}
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Link href="/dining" className="btn-forest mt-8">See the menu <ArrowRight size={16} /></Link>
          </Reveal>
        </div>

        <Reveal className="order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            {dining.menu.slice(0, 4).map((item, i) => (
              <div
                key={item.name}
                className={`relative aspect-square overflow-hidden rounded-3xl shadow-soft ${i % 2 ? "translate-y-6" : ""}`}
              >
                <Image src={item.image} alt={item.name} fill sizes="25vw" className="object-cover transition-transform duration-700 hover:scale-110" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */
export function ReviewsSection() {
  return (
    <section className="container-x py-20 sm:py-28">
      <SectionHeading
        eyebrow="Guest Love"
        title="Kind words from our guests"
        intro={`Rated ${site.rating}/5 across Google, Facebook and TripAdvisor by ${site.reviewCount}+ visitors.`}
      />
      <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.slice(0, 6).map((r) => (
          <Reveal key={r.name} as="div" className="h-full">
            <ReviewCard review={r} />
          </Reveal>
        ))}
      </Stagger>
      <Reveal>
        <div className="mt-10 text-center">
          <Link href="/reviews" className="btn-ghost">Read all reviews <ArrowRight size={16} /></Link>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
export function FinalCTA() {
  return (
    <section className="container-x pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12 sm:py-24">
          <Image
            src={photos.sign}
            alt="Evening at Ankara Resort"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest-900/75" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl text-cream text-balance sm:text-5xl">
              Your nature escape is waiting
            </h2>
            <p className="mx-auto mt-4 max-w-md text-cream/80">
              Reserve your cottage today, or send us a quick message — we'll help you plan
              the perfect stay or event.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/book" className="btn-primary">Book Your Stay</Link>
              <a href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
