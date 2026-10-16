import Link from "next/link";
import Arrow from "./Arrow";
import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell">
        <div className="footer-top">
          <div>
            <h2>
              다음 제품을
              <br />
              함께 만들고 싶습니다.
            </h2>
          </div>
          <div className="footer-actions">
            <p>
              고객의 업무에 AI를 연결하는 팀,
              <br />
              문제 정의부터 구현·배포까지 함께하고 싶습니다.
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
          <a href="#main-content">맨 위로 ↑</a>
        </div>
      </div>
    </footer>
  );
}
