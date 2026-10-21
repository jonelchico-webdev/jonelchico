import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projectCaseStudies } from "../project-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectCaseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectCaseStudies.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — Project by Jonel Chico`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectCaseStudies.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b0e0c] px-6 text-[#f2f4ef]">
      <header className="mx-auto flex max-w-6xl items-center justify-between border-b border-white/10 py-4">
        <Link
          href="/#home"
          className="inline-flex min-h-11 items-center text-sm font-semibold tracking-[0.16em] text-[#c7f36b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f36b]"
        >
          JC<span className="text-white/50">.</span>
        </Link>
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f36b]"
        >
          <FaArrowLeft aria-hidden="true" className="text-xs" />
          All projects
        </Link>
      </header>

      <div className="mx-auto max-w-6xl pb-20 pt-12 sm:pb-28 sm:pt-20">
        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#c7f36b]">
              {project.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#c7f36b] px-6 text-sm font-semibold text-[#11150d] transition-colors hover:bg-[#d5fa8a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f36b]"
              >
                Visit live project
                <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
              </a>
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-medium text-white/75 transition-colors hover:border-white/35 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f36b]"
                >
                  <FaGithub aria-hidden="true" />
                  Source code
                </a>
              )}
            </div>
          </div>

          <aside
            aria-label={`Highlights for ${project.title}`}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111511] p-6 sm:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#8bbd38]/10 blur-3xl"
            />
            <p className="relative text-xs font-medium uppercase tracking-[0.18em] text-white/45">
              Project at a glance
            </p>
            <ul className="relative mt-6 divide-y divide-white/10">
              {project.highlights.map((highlight, index) => (
                <li key={highlight.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="mt-0.5 text-xs font-medium tabular-nums text-[#c7f36b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-medium text-white">{highlight.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/55">
                      {highlight.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="mt-16 grid gap-10 border-t border-white/10 pt-10 sm:mt-20 sm:grid-cols-[0.7fr_1.3fr] sm:gap-16 sm:pt-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#c7f36b]">
              Overview
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              What it does
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-white/65">
            {project.overview}
          </p>
        </section>

        <section className="mt-12 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[#c7f36b]">
            Technologies
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/70"
              >
                {technology}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#111511] p-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-lg font-semibold">Want to see it in action?</p>
            <p className="mt-1 text-sm text-white/55">
              Visit the live project for the full experience.
            </p>
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium text-[#c7f36b] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f36b]"
          >
            Open live project
            <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
          </a>
        </div>
      </div>
    </main>
  );
}
