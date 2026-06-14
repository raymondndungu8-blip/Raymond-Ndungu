import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { BookingWidget } from "@/components/BookingWidget";
import { ShieldCheck, Smartphone, Clock } from "lucide-react";
import { photos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description:
    "Book your stay at Ankara Resort in Ongata Rongai. Real-time room selection, M-Pesa and card payments, instant SMS & email confirmation.",
};

function BookingLoader({ searchParams }: { searchParams: { room?: string } }) {
  return <BookingWidget initialRoom={searchParams.room} />;
}

export default function BookPage({ searchParams }: { searchParams: { room?: string } }) {
  return (
    <>
      <PageHero
        title="Book Your Stay"
        subtitle="Four quick steps to your nature escape — confirmed by SMS and email."
        image={photos.cottage1}
        crumbs={[{ label: "Book Now" }]}
      />

      <section className="container-x py-16 sm:py-24">
        <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-forest/5" />}>
          <BookingLoader searchParams={searchParams} />
        </Suspense>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            { icon: <Smartphone size={20} />, title: "Pay with M-Pesa", text: "Fast, secure STK push — or pay by card." },
            { icon: <ShieldCheck size={20} />, title: "Free cancellation", text: "Flexible up to 48 hours before arrival." },
            { icon: <Clock size={20} />, title: "Instant confirmation", text: "SMS & email the moment you book." },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-4 rounded-2xl bg-cream p-5 ring-1 ring-forest/10">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest text-cream">{f.icon}</span>
              <div>
                <p className="font-semibold text-forest">{f.title}</p>
                <p className="mt-0.5 text-sm text-forest-900/60">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
