import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import ProjectVisual from "@/components/ProjectVisual";
import PersonalProjectVisual from "@/components/PersonalProjectVisual";
import { caseStudies } from "@/content/case-studies";
import { personalProjects } from "@/content/personal-projects";
import { experience, skills } from "@/content/profile";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    path: "/",
    title: "이명필 · 풀스택 엔지니어 & 기술 PM",
    description:
      "AI 제품의 설계와 개발, 팀의 실행을 연결하는 이명필입니다. A.X 전환, Multi-LLM 제품, SKT AI 플랫폼 프로젝트를 소개합니다.",
    image: "/og.png",
  });
}

export default function Home() {
  return (
    <main tabIndex={-1} id="main-content">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-kicker">
          <span className="eyebrow">ENGINEERING × OWNERSHIP</span>
          <span className="hero-location">
            서울, 대한민국 <span aria-hidden="true">↗</span>
          </span>
        </div>
        <div className="hero-main">
          <h1 id="hero-title">
            복잡한 요구를,
            <br />
            <span>작동하는 제품으로.</span>
          </h1>
          <span className="hero-asterisk" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="hero-bottom">
          <div className="hero-person">
            <div className="avatar">
              <Image
                src="/images/face.JPG"
                alt="이명필"
                fill
                unoptimized
                loading="eager"
              />
            </div>
            <div>
              <strong>이명필</strong>
              <span>풀스택 엔지니어 · 기술 PM</span>
            </div>
          </div>
          <div className="hero-intro">
            <p>
              AI 제품을 설계하고 핵심 기능을 구현합니다.
              <br />
              고객의 요구와 기술, 팀의 실행을 연결해
              <br className="desktop-break" /> 실제 사용할 수 있는 제품을
              만듭니다.
            </p>
            <div className="button-row">
              <a href="#work" className="button button-primary">
                프로젝트 살펴보기 <Arrow />
              </a>
              <a
                href="/resume.pdf"
                download="이명필-이력서.pdf"
                className="button button-quiet"
              >
                이력서 다운로드 <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
        <dl className="career-strip">
          <div>
            <dt>개발의 시작</dt>
            <dd>
              2016<span>년부터</span>
            </dd>
          </div>
          <div>
            <dt>수행 프로젝트</dt>
            <dd>
              20<span>개 이상</span>
            </dd>
          </div>
          <div>
            <dt>개발팀 기술 리딩</dt>
            <dd>
              10<span>명 규모</span>
            </dd>
          </div>
          <div className="career-strip-note">
            <dt>FOCUS</dt>
            <dd>
              AI 제품 개발
              <br />
              풀스택 아키텍처 · 기술 PM
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="work-section shell"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK / 2025 — 2026</p>
            <h2 id="work-title">
              문제에서 출발한
              <br />세 가지 경험.
            </h2>
          </div>
          <p>
            AI 시스템의 기술 리딩부터 제품 출시,
            <br />
            고객과 개발팀을 연결하는 프로젝트 관리까지.
          </p>
        </div>
        <div className="project-list">
          {caseStudies.map((project) => (
            <article
              className={`project-row project-row--${project.accent}`}
              key={project.slug}
            >
              <Link
                className="project-art-link"
                href={`/work/${project.slug}`}
                aria-label={`${project.title} 사례 보기`}
              >
                <ProjectVisual slug={project.slug} />
                <span className="art-link-arrow">
                  <Arrow diagonal />
                </span>
              </Link>
              <div className="project-copy">
                <div className="project-kicker">
                  <span>
                    {project.index} / {project.eyebrow}
                  </span>
                  <span>{project.period.split(" — ")[0]}</span>
                </div>
                <h3>
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>
                <p>{project.cardSummary}</p>
                {project.publication && (
                  <a
                    className="project-publication"
                    href={project.publication.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    회사 공식 솔루션 소개 <span aria-hidden="true">↗</span>
                  </a>
                )}
                <div className="project-result">
                  <strong>{project.highlight}</strong>
                  <span>{project.highlightLabel}</span>
                </div>
                <div className="project-copy-bottom">
                  <span>{project.shortRole}</span>
                  <Link className="text-link" href={`/work/${project.slug}`}>
                    사례 읽기 <Arrow />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="personal-section shell"
        id="personal"
        aria-labelledby="personal-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">PERSONAL PROJECTS</p>
            <h2 id="personal-title">
              직접 만들고,
              <br />
              실제로 사용한 제품.
            </h2>
          </div>
          <p>
            브랜드 콘텐츠의 반복 작업을 줄이고,
            <br />
            매일 이어갈 수 있는 학습 경험을 만들었습니다.
          </p>
        </div>
        <div className="personal-grid">
          {personalProjects.map((project) => (
            <article
              className={`personal-card personal-card--${project.slug}`}
              key={project.slug}
            >
              <Link
                className="personal-art-link"
                href={`/personal/${project.slug}`}
                aria-label={`${project.title} 개인 프로젝트 보기`}
              >
                <PersonalProjectVisual project={project} preview />
                <span className="personal-art-arrow">
                  <Arrow diagonal />
                </span>
              </Link>
              <div className="personal-card-copy">
                <p className="eyebrow">{project.category}</p>
                <h3>
                  <Link href={`/personal/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>
                <p>{project.summary}</p>
                <div className="personal-card-bottom">
                  <span>{project.status}</span>
                  <Link
                    className="text-link"
                    href={`/personal/${project.slug}`}
                  >
                    프로젝트 읽기 <Arrow />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section" aria-labelledby="approach-title">
        <div className="shell approach-grid">
          <div>
            <p className="eyebrow">HOW I WORK</p>
            <h2 id="approach-title">
              설계와 실행 사이를
              <br />
              직접 연결합니다.
            </h2>
            <p className="section-description">
              기술 선택의 이유를 설명하고,
              <br />그 선택이 작동하는 곳까지 책임집니다.
            </p>
          </div>
          <div className="approach-list">
            <article>
              <span>01</span>
              <div>
                <h3>문제를 실행 가능한 범위로</h3>
                <p>
                  고객의 요구를 정리하고, 팀이 구현할 기능과 우선순위로
                  구체화합니다.
                </p>
                <Link href="/work/skt-ai-agent">
                  요구사항 조정 사례 <Arrow />
                </Link>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>아키텍처를 실제 제품으로</h3>
                <p>
                  화면, API, 인증, 결제, AI 실행의 경계를 설계하고 핵심 기능을
                  구현합니다.
                </p>
                <Link href="/work/multi-llm">
                  제품 출시 사례 <Arrow />
                </Link>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>측정하고, 검증하고, 개선하기</h3>
                <p>
                  문서 처리 병목을 측정하고 대체 구현을 검증했습니다. 배포와
                  리뷰도 팀의 반복 가능한 과정으로 만듭니다.
                </p>
                <Link href="/work/enterprise-ax">
                  성능 개선 사례 <Arrow />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="about-section shell"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="about-heading">
          <p className="eyebrow">ABOUT & EXPERIENCE</p>
          <h2 id="about-title">
            만드는 사람에서,
            <br />
            함께 완성하는 사람으로.
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-bio">
            <p>
              2016년 Java 백엔드 개발로 시작했습니다. 웹 프론트엔드와 서비스
              운영, 스타트업 창업을 거쳐 AI 제품의 설계와 기술 리딩으로 경험을
              넓혔습니다.
            </p>
            <p>
              직접 구현해 본 경험을 바탕으로 고객과 개발팀 사이에서 판단합니다.
              필요한 순간에는 설계, 핵심 개발, 리뷰와 검증에 함께 참여합니다.
            </p>
            <Link className="text-link" href="/resume">
              전체 경력과 이력서 <Arrow />
            </Link>
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.title}>
                  <h3>{skill.title}</h3>
                  <p>{skill.items}</p>
                </div>
              ))}
            </div>
          </div>
          <ol className="timeline">
            {experience.slice(0, 6).map((item) => (
              <li key={`${item.company}-${item.period}`}>
                <span className="timeline-period">{item.period}</span>
                <h3>{item.company}</h3>
                <span className="timeline-role">{item.role}</span>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
