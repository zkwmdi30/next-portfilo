import Image from "next/image";
import type { PersonalProject } from "@/content/personal-projects";

export default function PersonalProjectVisual({
  project,
  preview = false,
}: {
  project: PersonalProject;
  preview?: boolean;
}) {
  return (
    <div
      className={`personal-visual personal-visual--${project.slug}${preview ? " personal-visual--preview" : ""}`}
    >
      {project.images.map((image) => (
        <figure key={image.src}>
          <div className="personal-screen">
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={preview ? "" : image.alt}
              unoptimized
            />
          </div>
          {!preview && (
            <figcaption>
              <span>{image.caption}</span>
              <a
                href={image.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`${image.caption} 원본 보기`}
              >
                원본 보기 ↗
              </a>
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
