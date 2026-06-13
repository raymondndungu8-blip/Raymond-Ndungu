"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-cream/90 shadow-[0_2px_20px_-12px_rgba(27,67,50,0.4)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Ankara Resort home">
          <span
            className={`grid h-9 w-9 place-items-center rounded-full border text-sm font-bold transition-colors ${
              solid ? "border-forest/30 bg-forest text-cream" : "border-white/40 bg-white/10 text-white"
            }`}
          >
            A
          </span>
          <span className={`font-display text-lg font-semibold tracking-wide ${solid ? "text-forest" : "text-white"}`}>
            Ankara<span className="text-gold"> Resort</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`link-underline text-sm font-medium transition-colors ${
                    solid ? "text-forest/80 hover:text-forest" : "text-white/90 hover:text-white"
                  } ${active ? "after:w-full" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneRaw}`}
            className={`flex items-center gap-2 text-sm font-medium ${solid ? "text-forest/80" : "text-white/90"}`}
          >
            <Phone size={15} />
            {site.phone}
          </a>
          <Link href="/book" className="btn-primary !py-2.5 !px-5">
            Book Now
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-full lg:hidden ${
            solid ? "text-forest" : "text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-forest/10 bg-cream lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-forest hover:bg-forest/5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2 px-1">
                <a href={`tel:${site.phoneRaw}`} className="btn-ghost w-full">
                  <Phone size={16} /> {site.phone}
                </a>
                <Link href="/book" className="btn-primary w-full">
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
