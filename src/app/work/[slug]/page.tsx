import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.lead,
    openGraph: {
      title: `${study.title} · 이명필`,
      description: study.lead,
      images: [],
    },
    twitter: {
      card: "summary",
      title: `${study.title} · 이명필`,
      description: study.lead,
      images: [],
    },
  };
}

export default async function WorkDetail({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main id="main-content" className={`case case--${study.accent}`}>
      <section className="case-hero shell">
        <div className="case-hero__topline">
          <Link href="/#work">← 대표 프로젝트</Link>
          <span>{study.eyebrow}</span>
        </div>

        <div className="case-hero__grid">
          <div>
            <p className="eyebrow">프로젝트 상세</p>
            <h1>{study.title}</h1>
            <p className="case-hero__lead">{study.lead}</p>
          </div>
          <dl className="case-facts">
            <div><dt>기간</dt><dd>{study.period}</dd></div>
            <div><dt>역할</dt><dd>{study.role}</dd></div>
            <div><dt>팀</dt><dd>{study.team}</dd></div>
            <div><dt>규모</dt><dd>{study.scale}</dd></div>
          </dl>
        </div>

        <ul className="case-tags" aria-label="프로젝트 기술">
          {study.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </section>

      <section className="case-metrics shell" aria-label="프로젝트 핵심 성과">
        {study.metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            {metric.detail && <small>{metric.detail}</small>}
          </div>
        ))}
      </section>

      <section className="case-section shell case-context" aria-labelledby="context-title">
        <div className="case-section__label"><span>01</span> 프로젝트 배경</div>
        <div className="case-section__content">
          <h2 id="context-title">프로젝트가 시작된 이유</h2>
          {study.context.map((paragraph) => <p className="case-prose" key={paragraph}>{paragraph}</p>)}
          <div className="problem-grid">
            {study.problems.map((problem, index) => (
              <article key={problem.title}>
                <span>0{index + 1}</span>
                <h3>{problem.title}</h3>
                <p>{problem.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section case-section--dark" aria-labelledby="architecture-title">
        <div className="shell case-section__inner">
          <div className="case-section__label"><span>02</span> 시스템 구조</div>
          <div className="case-section__content">
            <h2 id="architecture-title">기술을 제품의 경계로 나눴습니다.</h2>
            <div className="architecture-map">
              {study.architecture.map((layer, index) => (
                <div className="architecture-node" key={layer.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{layer.name}</strong>
                  <small>{layer.detail}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="case-section shell case-proof" aria-labelledby="proof-title">
        <div className="case-section__label"><span>03</span> 실행과 검증</div>
        <div className="case-section__content">
          <h2 id="proof-title">{study.proof.title}</h2>
          <p className="case-prose">{study.proof.summary}</p>

          <ol className="proof-flow" aria-label="시스템 실행 흐름">
            {study.proof.flow.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.title}</strong>
                <small>{step.detail}</small>
              </li>
            ))}
          </ol>

          <div className={`proof-grid${study.proof.benchmark ? "" : " proof-grid--facts-only"}`}>
            {study.proof.benchmark && (
              <figure className="benchmark">
                <figcaption>{study.proof.benchmark.caption}</figcaption>
                <div className="benchmark__items">
                  {study.proof.benchmark.items.map((item) => (
                    <div className={item.highlight ? "benchmark__item benchmark__item--highlight" : "benchmark__item"} key={item.label}>
                      <div><span>{item.label}</span><strong>{item.value}</strong></div>
                      <div className="benchmark__track" aria-hidden="true">
                        <span style={{ "--bar-width": `${item.relative}%` } as CSSProperties} />
                      </div>
                    </div>
                  ))}
                </div>
                <p>자체 구현으로 처리 시간을 34.8% 단축했습니다.</p>
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

      <section className="case-section shell" aria-labelledby="decisions-title">
        <div className="case-section__label"><span>04</span> 핵심 판단</div>
        <div className="case-section__content">
          <h2 id="decisions-title">문제보다 판단을 기록합니다.</h2>
          <div className="decision-list">
            {study.decisions.map((decision) => (
              <article key={decision.index}>
                <div className="decision-list__number">{decision.index}</div>
                <div>
                  <h3>{decision.title}</h3>
                  <dl>
                    <div><dt>상황</dt><dd>{decision.situation}</dd></div>
                    <div><dt>선택</dt><dd>{decision.decision}</dd></div>
                    <div><dt>감수한 점</dt><dd>{decision.tradeoff}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section shell" aria-labelledby="ownership-title">
        <div className="case-section__label"><span>05</span> 기여 범위</div>
        <div className="case-section__content ownership-grid">
          <div>
            <h2 id="ownership-title">제가 책임진 범위</h2>
            <ul className="ownership-list">
              {study.ownership.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="outcome-panel">
            <p className="eyebrow">주요 결과</p>
            <ul>
              {study.outcomes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            {study.note && <p className="outcome-panel__note">{study.note}</p>}
          </div>
        </div>
      </section>

      <section className="next-case">
        <Link className="shell" href={`/work/${next.slug}`}>
          <span>다음 프로젝트</span>
          <strong>{next.title}</strong>
          <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
