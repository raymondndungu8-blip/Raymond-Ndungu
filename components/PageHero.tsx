import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  title,
  subtitle,
  image,
  crumbs = [],
}: {
  title: string;
  subtitle?: string;
  image: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative flex h-[52vh] min-h-[360px] items-end overflow-hidden">
      <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/45 to-forest-900/55" />
      <div className="container-x relative pb-12 pt-28">
        <nav className="mb-4 flex items-center gap-1.5 text-xs text-cream/70">
          <Link href="/" className="hover:text-gold-light">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight size={12} />
              {c.href ? <Link href={c.href} className="hover:text-gold-light">{c.label}</Link> : <span className="text-cream">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="max-w-3xl font-display text-4xl font-semibold text-white text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-xl text-base text-cream/80 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
