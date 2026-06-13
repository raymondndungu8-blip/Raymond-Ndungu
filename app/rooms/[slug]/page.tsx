import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { rooms } from "@/lib/data";
import { RoomGallery } from "@/components/RoomGallery";
import { PageHero } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import { Stagger } from "@/components/ui/Reveal";
import {
  Wifi, Snowflake, Bath, Car, Tv, Coffee, Wind, Briefcase, Mountain, Check,
  Users, Maximize, BedDouble, MessageCircle,
} from "lucide-react";
import { site } from "@/lib/data";

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) return { title: "Room not found" };
  return {
    title: room.name,
    description: `${room.name} at Ankara Resort — ${room.description.slice(0, 140)}`,
  };
}

const amenityIcon: Record<string, React.ReactNode> = {
  "Free WiFi": <Wifi size={18} />,
  "Air conditioning": <Snowflake size={18} />,
  "En-suite bathroom": <Bath size={18} />,
  "Premium en-suite": <Bath size={18} />,
  "Free parking": <Car size={18} />,
  "Smart TV": <Tv size={18} />,
  "Mini bar": <Coffee size={18} />,
  "Hot shower": <Wind size={18} />,
  "Work desk": <Briefcase size={18} />,
  "Garden view": <Mountain size={18} />,
  "Private balcony": <Mountain size={18} />,
  "Private terrace": <Mountain size={18} />,
};

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) notFound();

  const others = rooms.filter((r) => r.slug !== room.slug);

  return (
    <>
      <PageHero
        title={room.name}
        subtitle={room.tagline}
        image={room.image}
        crumbs={[{ label: "Rooms", href: "/rooms" }, { label: room.name }]}
      />

      <section className="container-x grid gap-10 py-16 lg:grid-cols-[1.6fr_1fr] lg:py-24">
        <div>
          <RoomGallery images={room.gallery} name={room.name} />

          <div className="mt-10">
            <span className="eyebrow"><span className="h-px w-6 bg-gold" />The Space</span>
            <h2 className="mt-3 font-display text-3xl text-forest">About this stay</h2>
            <p className="mt-4 text-base leading-relaxed text-forest-900/70">{room.description}</p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: <Users size={20} />, label: room.capacity },
                { icon: <Maximize size={20} />, label: room.size },
                { icon: <BedDouble size={20} />, label: room.bed },
              ].map((f) => (
                <div key={f.label} className="rounded-2xl bg-cream p-4 text-center ring-1 ring-forest/10">
                  <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-forest/10 text-forest">{f.icon}</span>
                  <p className="mt-2 text-sm font-medium text-forest">{f.label}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-display text-2xl text-forest">Amenities</h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {room.amenities.map((a) => (
                <li key={a} className="flex items-center gap-2.5 text-sm text-forest-900/75">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                    {amenityIcon[a] ?? <Check size={18} />}
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sticky booking card */}
        <aside className="lg:relative">
          <div className="lg:sticky lg:top-24">
            <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-forest/10">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-forest-900/50">From</p>
                  <p className="font-display text-4xl text-forest">
                    KES {room.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-forest-900/55">≈ ${room.priceUsd} · per night</p>
                </div>
              </div>

              <div className="my-6 h-px bg-forest/10" />

              <ul className="space-y-2.5 text-sm text-forest-900/70">
                <li className="flex items-center gap-2"><Check size={16} className="text-gold" /> Free cancellation up to 48h</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-gold" /> M-Pesa & card accepted</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-gold" /> Instant SMS & email confirmation</li>
              </ul>

              <Link href={`/book?room=${room.slug}`} className="btn-primary mt-6 w-full">Book this room</Link>
              <a href={`${site.socials.whatsapp}?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(room.name)}.`} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-3 w-full">
                <MessageCircle size={16} /> Ask a question
              </a>
            </div>
          </div>
        </aside>
      </section>

      {/* Other rooms */}
      <section className="bg-sand py-16 sm:py-24">
        <div className="container-x">
          <h2 className="font-display text-3xl text-forest">You might also like</h2>
          <Stagger className="mt-8 grid gap-7 md:grid-cols-2">
            {others.map((r, i) => (
              <RoomCard key={r.slug} room={r} index={i} />
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
