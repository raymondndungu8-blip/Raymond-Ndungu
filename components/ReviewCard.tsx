import Image from "next/image";
import { Quote } from "lucide-react";
import type { Review } from "@/lib/data";
import { Stars } from "./ui/Stars";

const sourceColor: Record<Review["source"], string> = {
  Google: "text-[#4285F4]",
  Facebook: "text-[#1877F2]",
  TripAdvisor: "text-[#00AA6C]",
};

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-soft ring-1 ring-forest/5">
      <Quote className="text-gold/30" size={34} />
      <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-forest-900/75">
        “{review.text}”
      </blockquote>
      <Stars rating={review.rating} className="mt-5" />
      <figcaption className="mt-4 flex items-center gap-3 border-t border-forest/10 pt-4">
        <Image
          src={review.avatar}
          alt={review.name}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-forest">{review.name}</p>
          <p className="text-xs text-forest-900/55">
            {review.location} · via{" "}
            <span className={`font-medium ${sourceColor[review.source]}`}>{review.source}</span>
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
