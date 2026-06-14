"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * next/image with a shimmering skeleton placeholder that fades out once the
 * photo has loaded. The parent element must be positioned (relative) — which
 * is already the case wherever images are used in this project.
 */
export function SmartImage({ className = "", alt, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-10 skeleton transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        {...props}
        alt={alt}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={`${className} transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}
