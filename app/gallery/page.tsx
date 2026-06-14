import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { photos } from "@/lib/data";

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
        image={photos.cottage1}
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="container-x py-16 sm:py-24">
        <GalleryGrid />
      </section>
    </>
  );
}
