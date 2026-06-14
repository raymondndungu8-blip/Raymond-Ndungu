import type { Metadata } from "next";
import { SmartImage } from "@/components/ui/SmartImage";
import { Utensils, Clock } from "lucide-react";
import { dining, photos } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Restaurant & Bar",
  description:
    "Ankara Resort's garden restaurant & bar — fresh local plates, nyama choma, wood-fired pizza and sundowners. Open daily, Monday to Sunday, for guests and day visitors.",
};

export default function DiningPage() {
  return (
    <>
      <PageHero
        title="Restaurant & Bar"
        subtitle="Fresh plates and golden sundowners, served in the gardens."
        image={photos.restaurant}
        crumbs={[{ label: "Dining" }]}
      />

      <section className="container-x py-16 text-center sm:py-24">
        <Reveal>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-forest-900/70">{dining.intro}</p>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest/5 px-5 py-2.5 text-sm font-medium text-forest">
            <Clock size={16} className="text-gold" /> {dining.hours}
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-20">
        <SectionHeading align="left" eyebrow="On The Menu" title="A taste of Ankara" />
        <Stagger className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {dining.menu.map((item) => (
            <Reveal key={item.name} as="div">
              <article className="group overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-forest/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SmartImage src={item.image} alt={item.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex items-start justify-between gap-3 p-6">
                  <div>
                    <h3 className="font-display text-xl text-forest">{item.name}</h3>
                    <p className="mt-1 text-sm text-forest-900/60">{item.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-gold/10 px-3 py-1 text-sm font-semibold text-gold-dark">{item.price}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </Stagger>
      </section>

      <section className="bg-sand py-16 sm:py-24">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow"><span className="h-px w-6 bg-gold" />Reserve a Table</span>
            <h2 className="mt-3 font-display text-3xl text-forest">Dining with a group?</h2>
            <p className="mt-4 leading-relaxed text-forest-900/70">
              Planning a birthday lunch, a date night or a Sunday gathering? Let us know and we'll
              have your table — and the gardens — ready.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest">
              <Utensils size={16} className="text-gold" /> Walk-ins always welcome
            </p>
          </div>
          <EnquiryForm context="Table reservation" compact />
        </div>
      </section>
    </>
  );
}
