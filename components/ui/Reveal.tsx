"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

/**
 * On touch / coarse-pointer devices we reveal with opacity ONLY (no translate).
 * Transform-based reveals during scroll can leave GPU compositing "ghost"
 * trails on some mobile devices — opacity-only animations never do.
 */
function useCoarsePointer() {
  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    setCoarse(window.matchMedia("(hover: none), (pointer: coarse)").matches);
  }, []);
  return coarse;
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const coarse = useCoarsePointer();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: coarse ? 0 : 28 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
