// Renders a single Recent Work project. Two display modes:
//
//   1. PHOTOS — if the CMS entry has uploaded photos, those win. They
//      lay out as a responsive grid (1 / 2 / 3-6 photos).
//   2. INSTAGRAM EMBED — fallback when only instagram_url is set.
//
// Pages CMS guarantees one of the two is present (see /.pages.yml
// validation), but the loader in lib/recentWork.ts also filters out
// any project that has neither, so this component never renders empty.

import Image from "next/image";
import InstagramEmbed from "./InstagramEmbed";
import type { Project } from "@/lib/recentWork";

type Props = {
  project: Project;
  caption: string;
};

function PhotoGrid({ photos, title }: { photos: string[]; title: string }) {
  // 1 photo: full-width. 2 photos: split. 3+ photos: 2-up grid.
  const cols =
    photos.length === 1
      ? "grid-cols-1"
      : photos.length === 2
        ? "grid-cols-2"
        : "grid-cols-2";
  return (
    <div className={`grid gap-2 ${cols}`}>
      {photos.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="relative aspect-[4/3] overflow-hidden rounded-card bg-neutral-100 shadow-soft ring-1 ring-neutral-200"
        >
          <Image
            src={src}
            alt={`${title} — photo ${i + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
            className="object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
      ))}
    </div>
  );
}

export default function ProjectCard({ project, caption }: Props) {
  const hasPhotos = project.photos.length > 0;
  return (
    <figure className="m-0">
      {hasPhotos ? (
        <PhotoGrid photos={project.photos} title={project.title} />
      ) : project.instagramUrl ? (
        <InstagramEmbed url={project.instagramUrl} />
      ) : null}
      <figcaption className="mt-3 text-center text-sm font-semibold text-neutral-700">
        {caption}
        {hasPhotos && project.instagramUrl && (
          <>
            {" · "}
            <a
              href={project.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-dark"
            >
              See on Instagram
            </a>
          </>
        )}
      </figcaption>
    </figure>
  );
}
