import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "이명필 · 풀스택 엔지니어 & AI 기술 PM",
    template: "%s · 이명필",
  },
  description:
    "AI 제품을 설계하고 직접 구현하며 팀과 납품까지 이끄는 풀스택 엔지니어이자 기술 PM 이명필의 포트폴리오입니다.",
  keywords: [
    "AI Technical PM",
    "Technical Project Manager",
    "Full-stack Engineer",
    "LLM",
    "RAG",
    "Kubernetes",
    "이명필",
  ],
  openGraph: {
    title: "이명필 · 풀스택 엔지니어 & AI 기술 PM",
    description:
      "AI 제품을 설계하고 직접 구현하며 팀과 납품까지 이끕니다.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "이명필 · 풀스택 엔지니어 & AI 기술 PM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이명필 · 풀스택 엔지니어 & AI 기술 PM",
    description:
      "AI 제품을 설계하고 직접 구현하며 팀과 납품까지 이끕니다.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
        <Header />
        {children}
      </body>
    </html>
  );
}
