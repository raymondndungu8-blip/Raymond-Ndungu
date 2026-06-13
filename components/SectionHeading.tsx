import { Reveal } from "./ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-6 bg-gold" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className={`mt-4 font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
            light ? "text-cream" : "text-forest"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={2}>
          <p className={`mt-4 text-base leading-relaxed ${light ? "text-cream/70" : "text-forest-900/60"}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
