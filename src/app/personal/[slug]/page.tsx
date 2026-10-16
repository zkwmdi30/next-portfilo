import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "@/components/Arrow";
import PersonalProjectVisual from "@/components/PersonalProjectVisual";
import {
  getPersonalProject,
  personalProjects,
} from "@/content/personal-projects";
import { pageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return personalProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const project = getPersonalProject((await params).slug);
  if (!project) return {};
  return pageMetadata({
    path: `/personal/${project.slug}`,
    title: `${project.title} · 이명필 개인 프로젝트`,
    description: project.summary,
    image: `/og/${project.slug}.png`,
  });
}

export default async function PersonalProjectDetail({ params }: PageProps) {
  const project = getPersonalProject((await params).slug);
  if (!project) notFound();
  const next =
    personalProjects[
      (personalProjects.indexOf(project) + 1) % personalProjects.length
    ];

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={`personal-page personal-page--${project.slug}`}
    >
      <section className="personal-hero shell">
        <Link href="/#personal" className="back-link">
          ← 개인 프로젝트
        </Link>
        <p className="eyebrow">
          PERSONAL PROJECT {project.index} / {project.category}
        </p>
        <h1>{project.title}</h1>
        <p className="personal-lead">{project.lead}</p>
        <div className="personal-meta">
          <p>{project.role}</p>
          <span>{project.status}</span>
        </div>
        {project.external && (
          <a
            className="button button-primary"
            href={project.external.url}
            target="_blank"
            rel="noreferrer"
          >
            {project.external.label} <Arrow diagonal />
          </a>
        )}
      </section>

      <section className="personal-showcase shell" aria-label="실제 제품 화면">
        <div className="personal-showcase-copy">
          <p className="eyebrow">IN USE</p>
          <h2>{project.highlight}</h2>
          <p>{project.highlightLabel}</p>
          <ul className="tags" aria-label="사용 기술">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <PersonalProjectVisual project={project} />
      </section>

      <section className="case-section shell">
        <div className="case-label">
          <span>01</span>
          <h2>시작한 이유</h2>
        </div>
        <div className="case-content">
          <p className="prose">{project.context}</p>
        </div>
      </section>

      <section className="personal-process">
        <div className="shell">
          <p className="eyebrow">PRODUCT FLOW</p>
          <h2>{project.experienceTitle}</h2>
          <ol className="personal-steps">
            {project.experience.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="case-section shell">
        <div className="case-label">
          <span>02</span>
          <h2>설계에서 중요했던 것</h2>
        </div>
        <div className="case-content personal-decisions">
          {project.decisions.map((decision) => (
            <article key={decision.title}>
              <h3>{decision.title}</h3>
              <p>{decision.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section shell personal-delivery">
        <div className="case-label">
          <span>03</span>
          <h2>구현과 결과</h2>
        </div>
        <div className="case-content">
          <dl className="personal-implementation">
            {project.implementation.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.body}</dd>
              </div>
            ))}
          </dl>
          <div className="outcome-panel">
            <h3>완성한 것</h3>
            <ul>
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="shell next-project">
        <div>
          <p className="eyebrow">NEXT PERSONAL PROJECT</p>
          <Link href={`/personal/${next.slug}`}>
            {next.title}
            <Arrow diagonal />
          </Link>
        </div>
        <Link className="text-link" href="/#personal">
          개인 프로젝트 전체 <Arrow />
        </Link>
      </div>
    </main>
  );
}
