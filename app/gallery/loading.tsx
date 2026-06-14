import { Skeleton } from "@/components/ui/Skeleton";

export default function GalleryLoading() {
  const heights = ["h-72", "h-56", "h-80", "h-64", "h-72", "h-56", "h-80", "h-64", "h-72"];
  return (
    <div aria-busy="true" aria-label="Loading gallery">
      <div className="relative h-[52vh] min-h-[360px] skeleton" />
      <div className="container-x py-16 sm:py-24">
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-24 !rounded-full" />
          ))}
        </div>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {heights.map((h, i) => (
            <Skeleton key={i} className={`w-full !rounded-2xl ${h}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
