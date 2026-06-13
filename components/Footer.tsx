"use client";

import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { navLinks, site } from "@/lib/data";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-forest text-cream">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-forest-400/10 blur-3xl" />

      {/* Newsletter strip */}
      <div className="container-x relative border-b border-white/10 py-12">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="max-w-md">
            <h3 className="font-display text-2xl">Stay in the loop</h3>
            <p className="mt-2 text-sm text-cream/70">
              Get seasonal offers, event news and a little nature in your inbox. No spam, ever.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSent(true);
            }}
            className="flex w-full max-w-md items-center gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-full border border-white/20 bg-white/5 px-5 text-sm text-white placeholder:text-cream/40 focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn-primary h-12 !px-5" aria-label="Subscribe">
              {sent ? "Thanks!" : <Send size={16} />}
            </button>
          </form>
        </div>
      </div>

      {/* Main */}
      <div className="container-x relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold font-bold text-forest">A</span>
            <span className="font-display text-lg font-semibold">Ankara Resort</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            A family-oriented nature resort on the edge of Nairobi — cottages, gardens, dining and unforgettable events.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Social href={site.socials.facebook} label="Facebook"><Facebook size={18} /></Social>
            <Social href={site.socials.instagram} label="Instagram"><Instagram size={18} /></Social>
            <Social href={site.socials.whatsapp} label="WhatsApp"><MessageCircle size={18} /></Social>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            <li><Link href="/" className="link-underline hover:text-white">Home</Link></li>
            <li><Link href="/rooms" className="link-underline hover:text-white">Rooms & Cottages</Link></li>
            {navLinks.filter((l) => l.href !== "/rooms" && l.href !== "/contact").map((l) => (
              <li key={l.href}><Link href={l.href} className="link-underline hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Get in touch</h4>
          <ul className="mt-4 space-y-3.5 text-sm text-cream/75">
            <li className="flex gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-gold" />{site.address}</li>
            <li className="flex gap-3"><Phone size={17} className="shrink-0 text-gold" /><a href={`tel:${site.phoneRaw}`} className="hover:text-white">{site.phone}</a></li>
            <li className="flex gap-3"><Mail size={17} className="shrink-0 text-gold" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li className="flex gap-3"><Clock size={17} className="shrink-0 text-gold" />{site.hours}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Ready for a getaway?</h4>
          <p className="mt-4 text-sm text-cream/70">Reserve your stay in under two minutes.</p>
          <Link href="/book" className="btn-primary mt-4 w-full">Book Your Stay</Link>
          <a href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline mt-3 w-full !border-white/30">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </div>

      <div className="container-x relative flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-cream/55 sm:flex-row">
        <p>© {new Date().getFullYear()} Ankara Resort. All rights reserved.</p>
        <p>
          Designed & built by{" "}
          <a href="https://rn-studios.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light">
            RN Studio
          </a>
        </p>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-cream/80 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-forest"
    >
      {children}
    </a>
  );
}
