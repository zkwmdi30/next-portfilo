import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Header";
import Footer from "@/components/Footer";
import { profile } from "@/content/profile";
import { getSiteUrl } from "@/lib/metadata";

const pretendard = localFont({
  src: "./fonts/PortfolioSans.woff2",
  display: "swap",
  variable: "--font-pretendard",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: "%s · 이명필",
  },
  description:
    "고객의 업무 문제를 AI 제품으로 구현하는 이명필의 포트폴리오입니다. 요구사항 정의부터 핵심 개발, 시스템 연동과 배포까지의 경험을 소개합니다.",
  authors: [{ name: "이명필" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={pretendard.variable}
    >
      <body>
        <a className="skip-link" href="#main-content">
          본문으로 건너뛰기
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
