import Link from "next/link";
import Arrow from "./Arrow";
import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell">
        <div className="footer-top">
          <div>
            <p className="eyebrow">LET’S BUILD SOMETHING THAT WORKS.</p>
            <h2>
              다음 제품을
              <br />
              함께 만들고 싶습니다.
            </h2>
          </div>
          <div className="footer-actions">
            <p>
              AI 제품 개발과 기술 리딩이 필요한 팀,
              <br />
              풀어야 할 문제가 있는 분들과 이야기하고 싶습니다.
            </p>
            <a className="email-link" href={`mailto:${profile.email}`}>
              {profile.email}
              <Arrow diagonal />
            </a>
            <Link className="text-link" href="/resume">
              경력 자세히 보기 <Arrow />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} 이명필</span>
          <span>설계하고, 만들고, 끝까지 연결합니다.</span>
          <a href="#main-content">맨 위로 ↑</a>
        </div>
      </div>
    </footer>
  );
}
