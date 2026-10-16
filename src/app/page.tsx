import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import ProjectVisual from "@/components/ProjectVisual";
import PersonalProjectVisual from "@/components/PersonalProjectVisual";
import { caseStudies } from "@/content/case-studies";
import { personalProjects } from "@/content/personal-projects";
import { profile, experience, skills } from "@/content/profile";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    path: "/",
    title: `${profile.name} · ${profile.role}`,
    description:
      "고객의 업무 문제를 AI 제품으로 구현하는 이명필입니다. 요구사항 정의, Python·FastAPI 개발, 기존 시스템 연동과 배포 경험을 소개합니다.",
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
            서울, 대한민국
          </span>
        </div>
        <div className="hero-main">
          <h1 id="hero-title">
            복잡한 요구를,
            <br />
            <span>작동하는 제품으로.</span>
          </h1>
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
              <span>{profile.role}</span>
            </div>
          </div>
          <div className="hero-intro">
            <p>
              고객의 업무 문제를 AI 제품으로 구현합니다.
              <br />
              요구사항을 구체화하고 핵심 기능을 개발해,
              <br className="desktop-break" /> 기존 시스템 연동과 배포까지 연결합니다.
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
            <dt>주요 업무</dt>
            <dd>
              AI 제품 개발
              <br />
              고객 문제 정의 · 구현 · 배포
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
            <p className="eyebrow">주요 프로젝트</p>
            <h2 id="work-title">
              문제에서 출발한
              <br />세 가지 경험.
            </h2>
          </div>
          <p>
            고객의 업무와 제약을 이해하고,
            <br />
            직접 설계하고 개발해 해결한 과정입니다.
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
                {project.productEvidence ? (
                  <div
                    className="project-visual project-product-preview"
                    aria-hidden="true"
                  >
                    <div className="visual-heading">
                      <span>실제 서비스 화면</span>
                    </div>
                    <div className="project-product-image">
                      <Image
                        src={project.productEvidence.src}
                        width={project.productEvidence.width}
                        height={project.productEvidence.height}
                        alt=""
                        unoptimized
                      />
                    </div>
                    <div className="visual-caption">
                      <span>계열사 AI 업무 플랫폼</span>
                    </div>
                  </div>
                ) : (
                  <ProjectVisual slug={project.slug} />
                )}
                <span className="art-link-arrow">
                  <Arrow diagonal />
                </span>
              </Link>
              <div className="project-copy">
                <div className="project-kicker">
                  <span>
                    {project.eyebrow}
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
            <p className="eyebrow">개인 프로젝트</p>
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
            <p className="eyebrow">일하는 방식</p>
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
              <div>
                <h3>고객의 문제를 개발 범위로</h3>
                <p>
                  고객과 필요한 기능과 우선순위를 협의합니다. 핵심 기능 2개를
                  반영하고 기존 요구사항 5개를 제외하는 범위 합의를 이끌었습니다.
                </p>
                <Link href="/work/skt-ai-agent">
                  요구사항 조정 사례 <Arrow />
                </Link>
              </div>
            </article>
            <article>
              <div>
                <h3>설계에서 핵심 기능 개발까지</h3>
                <p>
                  AI 실행, 인증, 결제의 경계를 설계하고 핵심 개발을 맡았습니다.
                  4명 개발팀으로 가입·결제 가능한 Multi-LLM 제품을 출시했습니다.
                </p>
                <Link href="/work/multi-llm">
                  제품 출시 사례 <Arrow />
                </Link>
              </div>
            </article>
            <article>
              <div>
                <h3>고객 환경에서 검증하고 개선하기</h3>
                <p>
                  문서 분석 API를 구현하고 동일 문서의 처리 시간을 비교했습니다.
                  인증·권한 설정을 역추적하고 Kubernetes 배포 환경을 구축했습니다.
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
          <p className="eyebrow">소개와 경력</p>
          <h2 id="about-title">
            고객의 업무를 이해하고,
            <br />
            코드로 해결합니다.
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
              고객과 개발 범위를 협의하고, Python·FastAPI 기반 AI 시스템과
              프론트엔드의 설계·개발을 맡았습니다. 플랫폼 설치 중 드러난
              인증·권한 문제는 로그로 분석하고 개발팀과 확인해 해결했습니다.
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
