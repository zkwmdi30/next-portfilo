"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { CaseEvidence } from "@/content/case-studies";

function EvidenceImage({
  evidence,
  width,
}: {
  evidence: CaseEvidence;
  width?: number | string;
}) {
  const region = evidence.previewRegion;
  const image = (
    <Image
      src={evidence.src}
      width={evidence.width}
      height={evidence.height}
      alt={evidence.alt}
      unoptimized
      style={
        region
          ? {
              width: `${(evidence.width / region.width) * 100}%`,
              left: `${(-region.x / region.width) * 100}%`,
              top: `${(-region.y / region.height) * 100}%`,
            }
          : width
            ? { width }
            : undefined
      }
    />
  );
  return region ? (
    <span
      className="evidence-image-crop"
      style={{ width, aspectRatio: `${region.width} / ${region.height}` }}
    >
      {image}
    </span>
  ) : (
    image
  );
}

export default function ArchitectureEvidence({
  evidence,
}: {
  evidence: CaseEvidence;
}) {
  const titleId = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const [zoomed, setZoomed] = useState(false);
  const [zoomWidth, setZoomWidth] = useState(
    evidence.previewRegion?.width ?? evidence.width,
  );

  function openDiagram() {
    setZoomed(false);
    dialog.current?.showModal();
    viewport.current?.scrollTo(0, 0);
  }

  return (
    <figure
      className={`architecture-evidence${evidence.layout === "wide" ? " architecture-evidence--wide" : ""}`}
    >
      <figcaption>
        <p className="eyebrow">{evidence.eyebrow}</p>
        <h3>{evidence.title}</h3>
      </figcaption>
      <div className="evidence-layout">
        <button
          className="evidence-preview"
          onClick={openDiagram}
          aria-label={`${evidence.label} 확대`}
        >
          <EvidenceImage evidence={evidence} />
          <span className="evidence-open-label">
            {evidence.label} 크게 보기 <span aria-hidden="true">↗</span>
          </span>
        </button>
        <ol className="evidence-points">
          {evidence.points.map((point, index) => (
            <li key={point.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h4>{point.title}</h4>
              <p>{point.body}</p>
            </li>
          ))}
        </ol>
      </div>
      <p className="evidence-caption">{evidence.caption}</p>
      {evidence.source && (
        <p className="evidence-source">
          <a href={evidence.source.url} target="_blank" rel="noreferrer">
            출처: {evidence.source.label} <span aria-hidden="true">↗</span>
          </a>
          <span>{evidence.source.verifiedAt} 확인</span>
        </p>
      )}
      <dialog
        ref={dialog}
        className="flowchart-dialog"
        aria-labelledby={titleId}
      >
        <div className="flowchart-toolbar">
          <h2 id={titleId}>{evidence.title}</h2>
          <div>
            <button
              type="button"
              aria-pressed={zoomed}
              onClick={() => {
                setZoomWidth(
                  Math.max(
                    evidence.previewRegion?.width ?? evidence.width,
                    (viewport.current?.clientWidth ?? 0) * 2,
                  ),
                );
                setZoomed(!zoomed);
              }}
            >
              {zoomed ? "화면에 맞추기" : "확대 보기"}
            </button>
            <a href={evidence.src} target="_blank" rel="noreferrer">
              원본 열기 ↗
            </a>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label={`${evidence.label} 닫기`}
            >
              닫기 ×
            </button>
          </div>
        </div>
        <div
          className="flowchart-viewport"
          ref={viewport}
          tabIndex={0}
          aria-label={`${evidence.label} 스크롤 영역`}
        >
          <EvidenceImage
            evidence={evidence}
            width={
              zoomed
                ? zoomWidth
                : evidence.previewRegion
                  ? `min(100%, ${evidence.previewRegion.width}px)`
                  : undefined
            }
          />
        </div>
      </dialog>
    </figure>
  );
}
