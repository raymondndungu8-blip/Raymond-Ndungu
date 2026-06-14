import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site, photos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ankara Resort, Merisho Road, Ongata Rongai. Call +254 796 016128, WhatsApp us, or send a message. Open daily, Monday to Sunday.",
};

export default function ContactPage() {
  const cards = [
    { icon: <MapPin size={20} />, title: "Visit us", lines: [site.address], href: `https://maps.google.com/?q=${site.mapsQuery}` },
    { icon: <Phone size={20} />, title: "Call us", lines: [site.phone], href: `tel:${site.phoneRaw}` },
    { icon: <Mail size={20} />, title: "Email us", lines: [site.email], href: `mailto:${site.email}` },
    { icon: <Clock size={20} />, title: "Opening hours", lines: [site.hours] },
  ];

  return (
    <>
      <PageHero
        title="Get in touch"
        subtitle="Questions, bookings or event plans — we'd love to hear from you."
        image={photos.waterfall}
        crumbs={[{ label: "Contact" }]}
      />

      <section className="container-x py-16 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const inner = (
              <div className="h-full rounded-3xl bg-white p-6 shadow-soft ring-1 ring-forest/5 transition-all hover:-translate-y-1 hover:shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest/10 text-forest">{c.icon}</span>
                <h3 className="mt-4 font-semibold text-forest">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm leading-relaxed text-forest-900/60">{l}</p>
                ))}
              </div>
            );
            return c.href ? (
              <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a>
            ) : (
              <div key={c.title}>{inner}</div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow"><span className="h-px w-6 bg-gold" />Send a Message</span>
            <h2 className="mt-3 font-display text-3xl text-forest">We usually reply within hours</h2>
            <p className="mt-4 leading-relaxed text-forest-900/70">
              Fill in the form and our team will get back to you. For the fastest response, reach us
              directly on WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-forest"><MessageCircle size={16} /> WhatsApp us</a>
              <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Facebook size={16} /> Facebook</a>
              <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Instagram size={16} /> Instagram</a>
            </div>
            <div className="mt-8 overflow-hidden rounded-3xl shadow-soft ring-1 ring-forest/10">
              <iframe
                title="Ankara Resort location map"
                src={`https://maps.google.com/maps?q=${site.mapsQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>

          <div>
            <EnquiryForm context="General enquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
