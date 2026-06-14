import { Skeleton } from "@/components/ui/Skeleton";

export default function RoomDetailLoading() {
  return (
    <div aria-busy="true" aria-label="Loading room">
      <div className="relative h-[52vh] min-h-[360px] skeleton" />

      <div className="container-x grid gap-10 py-16 lg:grid-cols-[1.6fr_1fr] lg:py-24">
        <div>
          <Skeleton className="aspect-[16/10] w-full !rounded-3xl" />
          <div className="mt-4 grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="aspect-[4/3] w-full !rounded-xl" />
            ))}
          </div>
          <Skeleton className="mt-10 h-3 w-24" />
          <Skeleton className="mt-3 h-8 w-1/2" />
          <Skeleton className="mt-4 h-3 w-full" />
          <Skeleton className="mt-2 h-3 w-11/12" />
          <Skeleton className="mt-2 h-3 w-4/5" />
        </div>

        <aside>
          <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-forest/10">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="mt-3 h-10 w-40" />
            <div className="my-6 h-px bg-forest/10" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="mt-2 h-3 w-5/6" />
            <Skeleton className="mt-2 h-3 w-4/6" />
            <Skeleton className="mt-6 h-12 w-full !rounded-full" />
            <Skeleton className="mt-3 h-12 w-full !rounded-full" />
          </div>
        </aside>
      </div>
    </div>
  );
}
