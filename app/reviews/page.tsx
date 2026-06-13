import type { Metadata } from "next";
import { reviews, site } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { ReviewCard } from "@/components/ReviewCard";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Stars } from "@/components/ui/Stars";

export const metadata: Metadata = {
  title: "Guest Reviews",
  description:
    "See what guests say about Ankara Resort — rated 4.4/5 across Google, Facebook and TripAdvisor from 150+ reviews.",
};

export default function ReviewsPage() {
  const breakdown = [
    { stars: 5, pct: 68 },
    { stars: 4, pct: 21 },
    { stars: 3, pct: 7 },
    { stars: 2, pct: 2 },
    { stars: 1, pct: 2 },
  ];

  return (
    <>
      <PageHero
        title="Guest Reviews"
        subtitle="The kind words that keep us doing what we love."
        image="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ label: "Reviews" }]}
      />

      <section className="container-x py-16 sm:py-24">
        <div className="grid items-center gap-10 rounded-[2rem] bg-forest p-8 text-cream sm:p-12 lg:grid-cols-[auto_1fr]">
          <div className="text-center lg:border-r lg:border-white/15 lg:pr-12">
            <p className="font-display text-6xl font-semibold text-gold-light">
              <Counter value={site.rating} decimals={1} />
            </p>
            <Stars rating={site.rating} size={20} className="mt-2 justify-center" />
            <p className="mt-2 text-sm text-cream/70">{site.reviewCount}+ reviews</p>
          </div>
          <div className="space-y-2.5">
            {breakdown.map((b) => (
              <div key={b.stars} className="flex items-center gap-3">
                <span className="w-12 shrink-0 text-sm text-cream/70">{b.stars} star</span>
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gold" style={{ width: `${b.pct}%` }} />
                </div>
                <span className="w-10 shrink-0 text-right text-sm text-cream/60">{b.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <Reveal key={r.name} as="div" className="h-full">
              <ReviewCard review={r} />
            </Reveal>
          ))}
        </Stagger>

        <p className="mt-10 text-center text-sm text-forest-900/50">
          Reviews reflect publicly shared guest feedback across Google, Facebook and TripAdvisor.
        </p>
      </section>
    </>
  );
}
