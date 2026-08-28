import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://myungpil-ai-technical-pm.lee-choi-family.chatgpt.site"
  ),
  title: {
    default: "이명필 · AI Technical PM & Full-stack Engineer",
    template: "%s · 이명필",
  },
  description:
    "모호한 AI 요구사항을 제품으로 구조화하고 설계, 개발, 팀, 납품까지 연결하는 풀스택 엔지니어형 PM 이명필의 포트폴리오입니다.",
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
    title: "이명필 · AI Technical PM & Full-stack Engineer",
    description:
      "모호한 AI 요구사항을 제품으로 구조화하고 설계, 개발, 팀, 납품까지 연결합니다.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "이명필 · AI Technical PM & Full-stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이명필 · AI Technical PM & Full-stack Engineer",
    description:
      "모호한 AI 요구사항을 제품으로 구조화하고 설계, 개발, 팀, 납품까지 연결합니다.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
        <Header />
        {children}
      </body>
    </html>
  );
}
