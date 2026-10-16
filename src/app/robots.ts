import type { MetadataRoute } from "next";
import { resolveSiteUrl } from "@/lib/metadata";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = await resolveSiteUrl();
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(base ? { sitemap: new URL("/sitemap.xml", base).href } : {}),
  };
}
