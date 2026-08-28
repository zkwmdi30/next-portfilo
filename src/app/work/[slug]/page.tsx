import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const study = getCaseStudy(params.slug);
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

export default function WorkDetail({ params }: PageProps) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main id="main-content" className={`case case--${study.accent}`}>
      <section className="case-hero shell">
        <div className="case-hero__topline">
          <Link href="/#work">← Selected work</Link>
          <span>{study.eyebrow}</span>
        </div>

        <div className="case-hero__grid">
          <div>
            <p className="eyebrow">Case study</p>
            <h1>{study.title}</h1>
            <p className="case-hero__lead">{study.lead}</p>
          </div>
          <dl className="case-facts">
            <div><dt>Period</dt><dd>{study.period}</dd></div>
            <div><dt>Role</dt><dd>{study.role}</dd></div>
            <div><dt>Team</dt><dd>{study.team}</dd></div>
            <div><dt>Scale</dt><dd>{study.scale}</dd></div>
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
        <div className="case-section__label"><span>01</span> Context</div>
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
          <div className="case-section__label"><span>02</span> Architecture</div>
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

      <section className="case-section shell" aria-labelledby="decisions-title">
        <div className="case-section__label"><span>03</span> Decisions</div>
        <div className="case-section__content">
          <h2 id="decisions-title">문제보다 판단을 기록합니다.</h2>
          <div className="decision-list">
            {study.decisions.map((decision) => (
              <article key={decision.index}>
                <div className="decision-list__number">{decision.index}</div>
                <div>
                  <h3>{decision.title}</h3>
                  <dl>
                    <div><dt>Situation</dt><dd>{decision.situation}</dd></div>
                    <div><dt>Decision</dt><dd>{decision.decision}</dd></div>
                    <div><dt>Trade-off</dt><dd>{decision.tradeoff}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section shell" aria-labelledby="ownership-title">
        <div className="case-section__label"><span>04</span> Ownership</div>
        <div className="case-section__content ownership-grid">
          <div>
            <h2 id="ownership-title">제가 책임진 범위</h2>
            <ul className="ownership-list">
              {study.ownership.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="outcome-panel">
            <p className="eyebrow">Outcomes</p>
            <ul>
              {study.outcomes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            {study.note && <p className="outcome-panel__note">{study.note}</p>}
          </div>
        </div>
      </section>

      <section className="next-case">
        <Link className="shell" href={`/work/${next.slug}`}>
          <span>Next case study</span>
          <strong>{next.title}</strong>
          <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
