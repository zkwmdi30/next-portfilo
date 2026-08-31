import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="이명필 포트폴리오 홈">
          <span className="brand__mark" aria-hidden="true">MP</span>
          <span className="brand__text">
            <strong>이명필</strong>
            <small>풀스택 엔지니어 · 기술 PM</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="주요 메뉴">
          <Link href="/#work">프로젝트</Link>
          <Link href="/#capabilities">역량</Link>
          <Link href="/#experience">경력</Link>
          <a className="site-nav__contact" href="mailto:zkwmdi30@gmail.com">연락</a>
        </nav>
      </div>
    </header>
  );
}
