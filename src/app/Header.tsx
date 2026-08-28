import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="이명필 포트폴리오 홈">
          <span className="brand__mark" aria-hidden="true">MP</span>
          <span className="brand__text">
            <strong>이명필</strong>
            <small>AI Technical PM</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="주요 메뉴">
          <Link href="/#work">Work</Link>
          <Link href="/#capabilities">Capabilities</Link>
          <Link href="/#experience">Experience</Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
          <a className="site-nav__contact" href="mailto:zkwmdi30@gmail.com">Contact</a>
        </nav>
      </div>
    </header>
  );
}
