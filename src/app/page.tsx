import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";

const stats = [
  { value: "10년+", label: "제품 개발 경력" },
  { value: "20+", label: "수행 프로젝트" },
  { value: "10명", label: "최대 개발팀 리딩" },
];

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "enterprise-ax") {
    return (
      <div className="system-visual system-visual--agents" aria-hidden="true">
        <div className="system-visual__label">AI 에이전트 실행 구조</div>
        <div className="agent-flow">
          <span className="agent-flow__input">사용자 요청</span>
          <span className="agent-flow__line" />
          <strong className="agent-flow__core">슈퍼바이저</strong>
          <span className="agent-flow__line" />
          <div className="agent-flow__nodes">
            <span>ERP</span><span>RAG</span><span>메일</span><span>문서 분석</span>
          </div>
          <span className="agent-flow__review">결과 검토 · 최대 5회</span>
        </div>
      </div>
    );
  }

  return (
    <div className="system-visual system-visual--models" aria-hidden="true">
      <div className="system-visual__label">다중 LLM 실행 구조</div>
      <div className="model-flow">
        <div className="model-flow__models">
          <span>GPT</span><span>Claude</span><span>Gemini</span>
        </div>
        <div className="model-flow__rails"><i /><i /><i /></div>
        <strong>병렬 호출</strong>
        <span className="model-flow__select">평가 모델이 최종 답변 선택 →</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <div className="hero-stage">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              풀스택 엔지니어 · 기술 PM
            </p>
            <h1 id="hero-title">
              AI 제품을 설계하고
              <br />
              <span>직접 구현하며</span>
              <br />
              팀과 납품까지 이끕니다.
            </h1>
            <p className="hero__description">
              프론트엔드에서 시작해 백엔드, 인프라, AI 시스템으로 영역을
              넓혔습니다. 복잡한 요구사항을 제품으로 바꾸고 핵심 구현과
              기술 리딩까지 책임집니다.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#work">
                대표 프로젝트 보기 <span aria-hidden="true">↓</span>
              </a>
              <a className="button button--ghost" href="mailto:zkwmdi30@gmail.com">
                연락하기 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <figure className="hero-portrait">
            <div className="hero-portrait__image">
              <Image
                src="/images/face.JPG"
                alt="바닷가에서 웃고 있는 이명필"
                fill
                priority
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 46vw, 480px"
              />
            </div>
            <figcaption>
              <span>이명필 · 서울</span>
              <strong>2016년부터 개발자</strong>
            </figcaption>
          </figure>
        </section>
      </div>

      <section className="stats shell" aria-label="핵심 경력 수치">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="work shell" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">대표 프로젝트</p>
            <h2 id="work-title">기술을 실제 제품으로 만든 경험</h2>
          </div>
          <p>
            프로젝트를 많이 나열하기보다, 기술적 판단과 실행 범위를 설명할
            수 있는 사례를 선별했습니다.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card project-card--${project.accent}`} key={project.slug}>
              <div className="project-card__body">
                <div className="project-card__topline">
                  <span>{project.index}</span>
                  <p className="project-card__eyebrow">{project.eyebrow}</p>
                </div>
                <h3>{project.title}</h3>
                <p className="project-card__summary">{project.summary}</p>
                <dl className="project-card__meta">
                  <div><dt>기간</dt><dd>{project.period}</dd></div>
                  <div><dt>역할</dt><dd>{project.role}</dd></div>
                  <div><dt>팀</dt><dd>{project.team}</dd></div>
                </dl>
                <ul className="tag-list" aria-label="사용 기술">
                  {project.tags.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <Link className="project-card__link" href={`/work/${project.slug}`}>
                  프로젝트 자세히 보기 <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <div className="project-card__outcomes">
                <ProjectVisual slug={project.slug} />
                <div className="project-card__metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
                ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities" id="capabilities" aria-labelledby="capabilities-title">
        <div className="shell capabilities__inner">
          <div className="section-heading section-heading--light">
            <div>
              <p className="eyebrow">일하는 방식</p>
              <h2 id="capabilities-title">개발에서 시작해, 책임의 범위를 넓혔습니다.</h2>
            </div>
            <p>
              PM이 되기 위해 개발을 떠난 것이 아닙니다. 제품을 더 잘 만들기
              위해 아키텍처, 팀, 고객과 납품까지 책임의 범위를 넓혔습니다.
            </p>
          </div>

          <div className="capability-grid">
            <article>
              <span>01</span>
              <h3>AI 제품 개발</h3>
              <p>LLM과 에이전트를 데모가 아니라 실제 사용 가능한 제품 구조로 만듭니다.</p>
              <ul><li>Multi-LLM 오케스트레이션</li><li>RAG · Document Insight</li><li>슈퍼바이저 · 서브 에이전트</li><li>MCP · 실시간 UX</li></ul>
            </article>
            <article>
              <span>02</span>
              <h3>풀스택 아키텍처</h3>
              <p>화면부터 API, 인증, 데이터, 배포 환경까지 전체 흐름을 설계합니다.</p>
              <ul><li>React · Vue · TypeScript</li><li>Python · FastAPI · Spring</li><li>Keycloak · Kafka · SSE</li><li>Kubernetes · Argo CD · Istio</li></ul>
            </article>
            <article>
              <span>03</span>
              <h3>기술 프로젝트 관리</h3>
              <p>모호한 요구를 실행 가능한 범위로 바꾸고 팀과 고객을 납품까지 연결합니다.</p>
              <ul><li>요구사항 구조화</li><li>아키텍처 · WBS</li><li>리스크 · 품질 관리</li><li>고객 · 개발팀 조율</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="experience shell" id="experience" aria-labelledby="experience-title">
        <div className="experience__intro">
          <p className="eyebrow">경력</p>
          <h2 id="experience-title">개발자에서 기술 리더로 확장했습니다.</h2>
          <p>
            최근 AI 프로젝트와 역할의 변화를 중심으로 주요 경력을 정리했습니다.
          </p>
        </div>
        <ol className="timeline">
          <li><time>2024.07 — 현재</time><div><strong>포니링크</strong><span>AI 기술 PM · 기술 리더</span></div></li>
          <li><time>2024.01 — 2024.06</time><div><strong>포니링크</strong><span>SK Passkey · 프리랜서 기술 리더</span></div></li>
          <li><time>2022.04 — 2024.01</time><div><strong>더화이트커뮤니케이션</strong><span>시니어 프론트엔드 엔지니어</span></div></li>
          <li><time>2018.04 — 2020.05</time><div><strong>마인드링크소프트</strong><span>공동창업자 · CTO</span></div></li>
          <li><time>2016 — 2022</time><div><strong>제품·SI 개발 프로젝트</strong><span>풀스택 엔지니어</span></div></li>
        </ol>
      </section>

      <section className="contact" aria-labelledby="contact-title">
        <div className="shell contact__inner">
          <p className="eyebrow">연락</p>
          <h2 id="contact-title">기술과 제품을 함께<br />책임질 사람을 찾고 있다면.</h2>
          <p>AI 제품 설계, 풀스택 개발, 개발팀 리딩 경험이 필요한 팀과 이야기하고 싶습니다.</p>
          <a className="contact__link" href="mailto:zkwmdi30@gmail.com">
            zkwmdi30@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className="contact__footer"><span>이명필 · 풀스택 엔지니어 · 기술 PM</span><span>서울 · 2026</span></div>
        </div>
      </section>
    </main>
  );
}
