"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Arrow from "@/components/Arrow";
import { profile } from "@/content/profile";

export default function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link
          className="brand"
          href="/"
          aria-label="이명필 홈"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            m<span>.</span>
          </span>
          <span>
            이명필<span className="brand-caption">ENGINEER & TECHNICAL PM</span>
          </span>
        </Link>
        <button
          ref={button}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "메뉴 닫기" : "메뉴 열기"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="site-navigation"
          className="site-nav"
          data-open={open}
          aria-label="주요 메뉴"
        >
          <Link
            href="/#work"
            onClick={() => setOpen(false)}
            aria-current={pathname.startsWith("/work/") ? "page" : undefined}
          >
            프로젝트
          </Link>
          <Link
            href="/#personal"
            onClick={() => setOpen(false)}
            aria-current={
              pathname.startsWith("/personal/") ? "page" : undefined
            }
          >
            개인 프로젝트
          </Link>
          <Link href="/#about" onClick={() => setOpen(false)}>
            소개
          </Link>
          <Link
            href="/resume"
            onClick={() => setOpen(false)}
            aria-current={pathname === "/resume" ? "page" : undefined}
          >
            이력서
          </Link>
          <a
            className="nav-contact"
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
          >
            연락하기 <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}
