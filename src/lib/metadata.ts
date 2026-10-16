import type { Metadata } from "next";
import { headers } from "next/headers";

// A configured canonical origin keeps production pages statically renderable.
export function getSiteUrl(): URL | undefined {
  const configured = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL;
  const hostname =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const value = configured || (hostname ? `https://${hostname}` : undefined);
  if (!value) return undefined;
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol))
    throw new Error("SITE_URL must use http or https.");
  return new URL(url.origin);
}

// On an unconfigured host, use the actual request instead of publishing a made-up domain.
export async function resolveSiteUrl(): Promise<URL> {
  const configured = getSiteUrl();
  if (configured) return configured;
  const requestHeaders = await headers();
  const host = requestHeaders.get("host");
  if (!host)
    throw new Error("A request host or SITE_URL is required for metadata.");
  const local = /^(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/.test(host);
  const protocol =
    local || requestHeaders.get("x-forwarded-proto") === "http"
      ? "http"
      : "https";
  return new URL(`${protocol}://${host}`);
}

export async function pageMetadata({
  path,
  title,
  description,
  image,
}: {
  path: string;
  title: string;
  description: string;
  image: string;
}): Promise<Metadata> {
  const base = await resolveSiteUrl();
  const imageUrl = new URL(image, base).href;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: new URL(path, base).href },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ko_KR",
      siteName: "이명필 포트폴리오",
      url: new URL(path, base).href,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
