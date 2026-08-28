import Link from "next/link";
import { projects } from "@/content/projects";

const stats = [
  { value: "10년", label: "Engineering Experience" },
  { value: "20+", label: "Delivered Projects" },
  { value: "10명", label: "Development Team Lead" },
  { value: "약 80", label: "K8s Workloads" },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Full-stack Engineer × Technical Project Manager
          </p>
          <h1 id="hero-title">
            모호한 AI 요구사항을
            <br />
            <span>제품과 시스템으로</span>
            <br />
            끝까지 연결합니다.
          </h1>
          <p className="hero__description">
            약 10년간 프론트엔드, 백엔드, 인프라를 넘나들며 제품을
            개발했습니다. 최근에는 AI 프로젝트의 PM과 Tech Leader로서
            아키텍처, 개발팀, 고객, 납품을 하나의 실행 흐름으로 만듭니다.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#work">
              AI 프로젝트 보기 <span aria-hidden="true">↘</span>
            </a>
            <a className="button button--ghost" href="mailto:zkwmdi30@gmail.com">
              이메일로 연락하기
            </a>
          </div>
        </div>

        <div className="hero-system" aria-label="업무 진행 방식: 요구사항에서 납품까지">
          <div className="hero-system__topline">
            <span>OPERATING MODEL</span>
            <span>SEOUL · 2026</span>
          </div>
          <ol className="hero-system__flow">
            <li><span>01</span><strong>Frame</strong><small>모호한 요구사항을 정의합니다.</small></li>
            <li><span>02</span><strong>Architect</strong><small>제품과 시스템의 경계를 설계합니다.</small></li>
            <li><span>03</span><strong>Build</strong><small>핵심 구현과 검증을 주도합니다.</small></li>
            <li><span>04</span><strong>Ship</strong><small>팀과 고객을 연결해 납품합니다.</small></li>
          </ol>
          <div className="hero-system__signal" aria-hidden="true">
            <span /><span /><span /><span /><span />
          </div>
        </div>
      </section>

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
            <p className="eyebrow">Selected work</p>
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
              <div className="project-card__index">{project.index}</div>
              <div className="project-card__body">
                <p className="project-card__eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-card__summary">{project.summary}</p>
                <dl className="project-card__meta">
                  <div><dt>Period</dt><dd>{project.period}</dd></div>
                  <div><dt>Role</dt><dd>{project.role}</dd></div>
                  <div><dt>Team</dt><dd>{project.team}</dd></div>
                </dl>
                <ul className="tag-list" aria-label="사용 기술">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              <div className="project-card__outcomes">
                {project.metrics.map((metric) => (
                  <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
                ))}
                <Link href={`/work/${project.slug}`}>Case study <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities" id="capabilities" aria-labelledby="capabilities-title">
        <div className="shell capabilities__inner">
          <div className="section-heading section-heading--light">
            <div>
              <p className="eyebrow">How I work</p>
              <h2 id="capabilities-title">기술과 프로젝트 사이의 빈틈을 메웁니다.</h2>
            </div>
            <p>
              회의와 일정만 관리하는 PM이 아닙니다. 기술적 제약을 이해하고
              대안을 비교하며, 필요한 순간에는 구현과 검증까지 책임집니다.
            </p>
          </div>

          <div className="capability-grid">
            <article>
              <span>01</span>
              <h3>AI Product Engineering</h3>
              <p>LLM과 에이전트를 데모가 아니라 실제 사용 가능한 제품 구조로 만듭니다.</p>
              <ul><li>Multi-LLM orchestration</li><li>RAG · Document Insight</li><li>Supervisor · Sub-agent</li><li>MCP · Real-time UX</li></ul>
            </article>
            <article>
              <span>02</span>
              <h3>Full-stack Architecture</h3>
              <p>화면부터 API, 인증, 데이터, 배포 환경까지 전체 흐름을 설계합니다.</p>
              <ul><li>React · Vue · TypeScript</li><li>Python · FastAPI · Spring</li><li>Keycloak · Kafka · SSE</li><li>Kubernetes · Argo CD · Istio</li></ul>
            </article>
            <article>
              <span>03</span>
              <h3>Technical Project Management</h3>
              <p>모호한 요구를 실행 가능한 범위로 바꾸고 팀과 고객을 납품까지 연결합니다.</p>
              <ul><li>Requirement framing</li><li>Architecture · WBS</li><li>Risk · Quality management</li><li>Customer · Team alignment</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="experience shell" id="experience" aria-labelledby="experience-title">
        <div className="experience__intro">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-title">개발자에서 기술형 PM으로 확장해 왔습니다.</h2>
          <p>
            최근 AI 프로젝트를 중심으로 표시했습니다. 전체 경력은{" "}
            <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">이력서에서 확인할 수 있습니다 ↗</a>
          </p>
        </div>
        <ol className="timeline">
          <li><time>2024.07 — NOW</time><div><strong>포니링크</strong><span>AI Technical PM · Tech Leader</span></div></li>
          <li><time>2024.01 — 2024.06</time><div><strong>포니링크</strong><span>SK Passkey · Freelance Tech Leader</span></div></li>
          <li><time>2022.04 — 2024.01</time><div><strong>더화이트커뮤니케이션</strong><span>Senior Frontend Engineer</span></div></li>
          <li><time>2018.04 — 2020.05</time><div><strong>마인드링크소프트</strong><span>Co-founder · CTO</span></div></li>
          <li><time>2016 — 2022</time><div><strong>Product & SI Engineering</strong><span>Full-stack Engineer</span></div></li>
        </ol>
      </section>

      <section className="contact" aria-labelledby="contact-title">
        <div className="shell contact__inner">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">복잡한 AI 프로젝트를<br />실행 가능한 제품으로.</h2>
          <p>AI 제품의 초기 구조 설계, 개발팀 리딩, 프로젝트 정상화가 필요한 조직과 이야기하고 싶습니다.</p>
          <a className="contact__link" href="mailto:zkwmdi30@gmail.com">
            zkwmdi30@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className="contact__footer"><span>이명필 · AI Technical PM</span><span>Seoul, Korea · 2026</span></div>
        </div>
      </section>
    </main>
  );
}
