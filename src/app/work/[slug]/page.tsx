import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "@/components/Arrow";
import ProjectVisual from "@/components/ProjectVisual";
import ArchitectureEvidence from "@/components/ArchitectureEvidence";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { pageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({
    path: `/work/${slug}`,
    title: `${study.title} · 이명필`,
    description: study.lead,
    image: `/og/${slug}.png`,
  });
}

export default async function WorkDetail({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  const next =
    caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];
  return (
    <main
      tabIndex={-1}
      id="main-content"
      className={`case-page theme-${study.accent}`}
    >
      <section className="case-hero shell">
        <Link className="back-link" href="/#work">
          ← 모든 프로젝트
        </Link>
        <div className="case-hero-grid">
          <div>
            <p className="eyebrow">
              CASE STUDY {study.index} / {study.eyebrow}
            </p>
            <h1>{study.title}</h1>
            <p className="case-lead">{study.lead}</p>
            <ul className="tags" aria-label="사용 기술과 역량">
              {study.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <dl className="case-facts">
            <div>
              <dt>기간</dt>
              <dd>{study.period}</dd>
            </div>
            <div>
              <dt>역할</dt>
              <dd>{study.role}</dd>
            </div>
            <div>
              <dt>팀</dt>
              <dd>{study.team}</dd>
            </div>
            <div>
              <dt>규모</dt>
              <dd>{study.scale}</dd>
            </div>
          </dl>
        </div>
      </section>
      {study.publication && (
        <aside className="public-reference shell" aria-label="공식 제품 소개">
          <div>
            <p className="eyebrow">PUBLIC REFERENCE</p>
            <h2>회사 공식 솔루션으로 소개된 제품입니다.</h2>
            <p>
              {study.publication.label} · {study.publication.location}
            </p>
          </div>
          <a
            className="text-link"
            href={study.publication.url}
            target="_blank"
            rel="noreferrer"
          >
            공식 소개 확인 <Arrow diagonal />
          </a>
        </aside>
      )}
      {study.productEvidence && (
        <section
          className="shell case-product-evidence"
          aria-label="실제 서비스 화면"
        >
          <ArchitectureEvidence
            evidence={study.productEvidence}
            headingLevel={2}
          />
        </section>
      )}
      <div className="shell case-overview">
        <ProjectVisual slug={study.slug} />
        <dl className="case-metrics">
          {study.metrics.map((metric) => (
            <div key={metric.label}>
              <dd>{metric.value}</dd>
              <dt>{metric.label}</dt>
              {metric.detail && (
                <dd className="metric-detail">{metric.detail}</dd>
              )}
            </div>
          ))}
        </dl>
      </div>
      <nav className="case-toc shell" aria-label="사례 목차">
        <a href="#context">01 배경</a>
        <a href="#system">02 구조와 실행</a>
        <a href="#decisions">03 기술적 판단</a>
        <a href="#contribution">04 기여와 결과</a>
      </nav>
      <section className="case-section shell" id="context">
        <div className="case-label">
          <span>01</span>
          <h2>어떤 문제였나요?</h2>
        </div>
        <div className="case-content">
          {study.context.map((paragraph) => (
            <p className="prose" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="problem-list">
            {study.problems.map((problem) => (
              <article key={problem.title}>
                <h3>{problem.title}</h3>
                <p>{problem.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="case-system" id="system">
        <div className="case-section shell">
          <div className="case-label">
            <span>02</span>
            <h2>
              {study.slug === "skt-ai-agent"
                ? "책임과 실행의 구조"
                : "어떻게 연결했나요?"}
            </h2>
          </div>
          <div className="case-content">
            <div className="architecture-list">
              {study.architecture.map((layer, index) => (
                <div key={layer.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{layer.name}</h3>
                  <p>{layer.detail}</p>
                </div>
              ))}
            </div>
            <div className="execution-block">
              <h3>{study.proof.title}</h3>
              <p>{study.proof.summary}</p>
              <ol className="execution-flow">
                {study.proof.flow.map((step, index) => (
                  <li key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step.title}</strong>
                    <p>{step.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
            {study.proof.evidence?.map((evidence) => (
              <ArchitectureEvidence key={evidence.label} evidence={evidence} />
            ))}
            {study.proof.benchmark && (
              <figure className="benchmark">
                <figcaption>{study.proof.benchmark.caption}</figcaption>
                {study.proof.benchmark.items.map((item) => (
                  <div
                    className={`benchmark-item${item.highlight ? " is-highlight" : ""}`}
                    key={item.label}
                  >
                    <div>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                    <div className="benchmark-track" aria-hidden="true">
                      <span style={{ width: `${item.relative}%` }} />
                    </div>
                  </div>
                ))}
                <p>
                  동일 문서 기준 처리 시간 <strong>34.8% 단축</strong>
                </p>
              </figure>
            )}
            <dl className="proof-facts">
              {study.proof.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section className="case-section shell" id="decisions">
        <div className="case-label">
          <span>03</span>
          <h2>무엇을 선택했나요?</h2>
        </div>
        <div className="case-content decisions">
          {study.decisions.map((decision) => (
            <article key={decision.index}>
              <span className="decision-number">DECISION {decision.index}</span>
              <h3>{decision.title}</h3>
              <dl>
                <div>
                  <dt>상황</dt>
                  <dd>{decision.situation}</dd>
                </div>
                <div>
                  <dt>선택</dt>
                  <dd>{decision.decision}</dd>
                </div>
                {decision.tradeoff && (
                  <div>
                    <dt>트레이드오프</dt>
                    <dd>{decision.tradeoff}</dd>
                  </div>
                )}
              </dl>
            </article>
          ))}
        </div>
      </section>
      <section className="case-section shell" id="contribution">
        <div className="case-label">
          <span>04</span>
          <h2>
            제가 맡은 일과
            <br />
            남긴 결과입니다.
          </h2>
        </div>
        <div className="case-content">
          <h3 className="small-heading">직접 책임진 범위</h3>
          <ul className="contribution-list">
            {study.ownership.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="outcome-panel">
            <h3>프로젝트의 결과</h3>
            <ul>
              {study.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {study.note && <p className="outcome-note">{study.note}</p>}
          </div>
        </div>
      </section>
      <div className="shell next-project">
        <div>
          <p className="eyebrow">NEXT CASE STUDY</p>
          <Link href={`/work/${next.slug}`}>
            {next.title}
            <Arrow diagonal />
          </Link>
        </div>
        <Link className="text-link" href="/resume">
          이력서 보기 <Arrow />
        </Link>
      </div>
    </main>
  );
}
