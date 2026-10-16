import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Header";
import Footer from "@/components/Footer";
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
    default: "이명필 · 풀스택 엔지니어 & 기술 PM",
    template: "%s · 이명필",
  },
  description:
    "AI 제품의 설계와 개발, 팀의 실행을 연결하는 풀스택 엔지니어이자 기술 PM 이명필의 포트폴리오입니다.",
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
