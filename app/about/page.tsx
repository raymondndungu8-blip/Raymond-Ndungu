import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Heart, Users, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { stats } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ankara Resort is a family-owned nature retreat in Ongata Rongai, Kajiado County — twelve green acres of cottages, gardens and warm hospitality, minutes from Nairobi.",
};

const values = [
  { icon: <Leaf size={24} />, title: "Rooted in nature", text: "Twelve acres of gardens, trees and open lawns — a green lung on the edge of the city." },
  { icon: <Heart size={24} />, title: "Genuine hospitality", text: "Family-owned and warmly run. Guests arrive as visitors and leave as friends." },
  { icon: <Users size={24} />, title: "Made for togetherness", text: "From family picnics to corporate retreats and weddings, we host life's good moments." },
  { icon: <Sparkles size={24} />, title: "Quietly premium", text: "Thoughtful comfort without the fuss — relaxed, beautiful and easy to love." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A green sanctuary near Nairobi"
        subtitle="Family-owned, nature-first, and built for the moments that matter."
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ label: "About Us" }]}
      />

      <section className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" eyebrow="Our Story" title="Where the city slows down" />
          <Reveal delay={1}>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-forest-900/70">
              <p>
                Ankara Resort was born from a love of the outdoors and a belief that rest shouldn't
                be a long drive away. Set along Merisho Road in Ongata Rongai, we've turned twelve
                acres of Kajiado greenery into a sanctuary for families, couples and companies.
              </p>
              <p>
                Over the years our cottages, club house, restaurant and gardens have hosted countless
                weekends away, milestone celebrations and team days out. Whatever brings you here, our
                promise is the same: clean air, warm food and the kind of calm you can only find in nature.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card">
            <Image src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80" alt="Ankara Resort gardens" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="bg-forest py-16 text-cream sm:py-24">
        <div className="container-x">
          <SectionHeading light eyebrow="What We Stand For" title="The Ankara way" />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Reveal key={v.title} as="div">
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-gold-light">{v.icon}</span>
                  <h3 className="mt-5 font-display text-xl">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </Stagger>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-forest p-6 text-center sm:p-8">
                <p className="font-display text-3xl font-semibold text-gold-light sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} decimals={(s as { decimals?: number }).decimals ?? 0} />
                </p>
                <p className="mt-1.5 text-xs uppercase tracking-wide text-cream/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 text-center sm:py-24">
        <Reveal>
          <h2 className="font-display text-3xl text-forest sm:text-4xl">Come see it for yourself</h2>
          <p className="mx-auto mt-4 max-w-md text-forest-900/60">Book a stay, plan an event, or simply drop by for lunch in the gardens.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/book" className="btn-primary">Book Your Stay</Link>
            <Link href="/contact" className="btn-ghost">Get in touch</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
