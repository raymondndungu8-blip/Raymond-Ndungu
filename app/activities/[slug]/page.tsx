import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { activities } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Check } from "lucide-react";

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = activities.find((x) => x.slug === params.slug);
  if (!a) return { title: "Activity not found" };
  return { title: a.name, description: a.description.slice(0, 150) };
}

export default function ActivityDetailPage({ params }: { params: { slug: string } }) {
  const activity = activities.find((a) => a.slug === params.slug);
  if (!activity) notFound();

  return (
    <>
      <PageHero
        title={activity.name}
        subtitle={activity.price}
        image={activity.image}
        crumbs={[{ label: "Activities", href: "/activities" }, { label: activity.name }]}
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-24">
        <div>
          <span className="eyebrow"><span className="h-px w-6 bg-gold" />The Experience</span>
          <h2 className="mt-3 font-display text-3xl text-forest">{activity.short}</h2>
          <p className="mt-4 text-base leading-relaxed text-forest-900/70">{activity.description}</p>

          <h3 className="mt-9 font-display text-2xl text-forest">What's included</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {activity.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 rounded-2xl bg-cream p-4 text-sm font-medium text-forest-900/80 ring-1 ring-forest/10">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-cream"><Check size={15} /></span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/5 p-5">
            <p className="text-sm text-forest-900/75">
              <strong className="text-forest">Pricing &amp; packages</strong> are tailored to your group and
              date. Send an enquiry and we'll get back to you with a full quote.
            </p>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:h-fit">
          <h3 className="mb-4 font-display text-2xl text-forest">Make an enquiry</h3>
          <EnquiryForm context={activity.name} compact />
        </div>
      </section>
    </>
  );
}
