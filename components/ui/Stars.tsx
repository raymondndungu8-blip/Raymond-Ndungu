import { Star } from "lucide-react";

export function Stars({
  rating,
  className = "",
  size = 16,
}: {
  rating: number;
  className?: string;
  size?: number;
}) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.round(rating);
        return (
          <Star
            key={i}
            size={size}
            className={filled ? "fill-gold text-gold" : "fill-transparent text-gold/40"}
          />
        );
      })}
    </div>
  );
}
