import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import { Home, ArrowLeft } from "lucide-react";
import { photos } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <SmartImage
        src={photos.waterfall}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-forest-900/80" />
      <div className="container-x relative text-center text-cream">
        <p className="font-display text-7xl font-semibold text-gold-light sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl">You've wandered off the path</h1>
        <p className="mx-auto mt-3 max-w-md text-cream/75">
          The page you're looking for has slipped into the gardens. Let's get you back.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary"><Home size={16} /> Back home</Link>
          <Link href="/rooms" className="btn-outline"><ArrowLeft size={16} /> Browse rooms</Link>
        </div>
      </div>
    </section>
  );
}
