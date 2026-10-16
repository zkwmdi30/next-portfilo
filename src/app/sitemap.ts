import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { personalProjects } from "@/content/personal-projects";
import { profile } from "@/content/profile";
import { resolveSiteUrl } from "@/lib/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = await resolveSiteUrl();
  return [
    "/",
    "/resume",
    ...caseStudies.map(({ slug }) => `/work/${slug}`),
    ...personalProjects.map(({ slug }) => `/personal/${slug}`),
  ].map((path) => ({
    url: new URL(path, base).href,
    lastModified: profile.updatedAt,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
