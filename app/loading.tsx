import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      {/* Hero placeholder */}
      <div className="relative h-[52vh] min-h-[360px] skeleton" />

      <div className="container-x py-16 sm:py-24">
        <Skeleton className="h-3.5 w-28" />
        <Skeleton className="mt-4 h-10 w-2/3 max-w-lg" />
        <Skeleton className="mt-3 h-4 w-1/2 max-w-md" />

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-forest/5">
              <Skeleton className="aspect-[4/3] w-full !rounded-none" />
              <div className="space-y-3 p-6">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
                <div className="flex items-center justify-between pt-3">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-9 w-20 !rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
