import type { Metadata } from "next";
import Link from "next/link";
import { rooms } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import { Stagger, Reveal } from "@/components/ui/Reveal";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rooms & Cottages",
  description:
    "Browse Ankara Resort's garden cottages and rooms in Ongata Rongai — Standard Cottage, Deluxe Room and Executive Cottage. Clear pricing, real amenities, instant booking.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        title="Rooms & Cottages"
        subtitle="Three garden stays, each with its own character — pick the one that fits your escape."
        image="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ label: "Rooms" }]}
      />

      <section className="container-x py-16 sm:py-24">
        <Stagger className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <RoomCard key={room.slug} room={room} index={i} />
          ))}
        </Stagger>

        <Reveal>
          <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl bg-forest px-8 py-10 text-cream sm:flex-row">
            <div>
              <h3 className="font-display text-2xl">Travelling as a group?</h3>
              <p className="mt-1.5 text-sm text-cream/70">We offer tailored rates for events, retreats and extended stays.</p>
            </div>
            <a href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
              <MessageCircle size={16} /> Ask about group rates
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
