import type { MetadataRoute } from "next";
import { rooms, activities, site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const staticRoutes = ["", "/about", "/rooms", "/activities", "/dining", "/gallery", "/book", "/contact", "/reviews"];

  const pages = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const roomPages = rooms.map((r) => ({
    url: `${base}/rooms/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const activityPages = activities.map((a) => ({
    url: `${base}/activities/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...roomPages, ...activityPages];
}
