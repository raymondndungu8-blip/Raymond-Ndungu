import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual tour of Ankara Resort — cottages, gardens, dining, picnics and events in Ongata Rongai, Kenya.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A glimpse of the gardens, the cottages and the moments in between."
        image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="container-x py-16 sm:py-24">
        <GalleryGrid />
      </section>
    </>
  );
}
