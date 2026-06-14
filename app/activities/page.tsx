import type { Metadata } from "next";
import { SmartImage } from "@/components/ui/SmartImage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { activities, photos } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Activities & Events",
  description:
    "Picnics, photoshoots, team building and garden events at Ankara Resort, Ongata Rongai. Twelve acres of green for families, couples and corporate groups.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        title="Activities & Events"
        subtitle="From lazy garden picnics to full-scale weddings and corporate retreats."
        image={photos.sign}
        crumbs={[{ label: "Activities" }]}
      />

      <section className="container-x space-y-10 py-16 sm:py-24">
        {activities.map((a, i) => (
          <Reveal key={a.slug}>
            <div className={`grid items-center gap-8 overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-forest/5 lg:grid-cols-2 ${i % 2 ? "" : ""}`}>
              <div className={`relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[340px] ${i % 2 ? "lg:order-2" : ""}`}>
                <SmartImage src={a.image} alt={a.name} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">{a.price}</p>
                <h2 className="mt-2 font-display text-3xl text-forest">{a.name}</h2>
                <p className="mt-3 leading-relaxed text-forest-900/70">{a.description}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-forest-900/70">
                  {a.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {h}
                    </li>
                  ))}
                </ul>
                <Link href={`/activities/${a.slug}`} className="btn-ghost mt-7">
                  Plan this <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
