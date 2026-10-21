"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    // Placeholder copy — confirm what T-Tracker tracks and tweak the wording.
    title: "T-Tracker",
    description:
      "A fast, single-page tracking app for logging entries and visualizing progress over time. Built with React and Vite for near-instant loads, with a clean, responsive UI and state that persists between sessions.",
    tags: [
      "React",
      "Vite",
      "JavaScript",
      "Supabase",
      "Tailwind CSS",
      "React Router",
      "jsPDF",
    ],
    liveUrl: "https://t-tracker-seven.vercel.app",
    repoUrl: "https://github.com/jonelchico-webdev/t-tracker",
  },
  {
    // Private repo — no public live/repo links. Copy derived from the project README.
    title: "EMR API — Electronic Medical Records Backend",
    description:
      "Production-ready backend for an EMR system: multi-clinic support with role-based access, AES-256-GCM encryption for clinical notes, prescriptions and lab results, and doctor scheduling.",
    tags: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Fastify",
      "Redis",
      "AWS S3",
      "JWT",
      "Swagger",
      "Jest",
    ],
  },
  {
    title: "B1T1 Shawarma",
    description:
      "A promotional website for B1T1 Shawarma, featuring buy-one-take-one shawarma wraps, rice meals, sides, and franchise information.",
    tags: ["JavaScript", "Vite", "GSAP"],
    liveUrl: "https://b1t1shawarma.com",
  },
];

export const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className="px-6 py-20 text-[#f2f4ef] sm:py-28"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#c7f36b]">Selected work</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects I’m proud of</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55">
            A few examples of the products and systems I’ve helped bring to life.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-white/10 bg-[#111511] p-6 transition-colors duration-200 hover:border-[#c7f36b]/40 hover:bg-[#141914]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
                Project {String(index + 1).padStart(2, "0")}
              </span>
              <span aria-hidden="true" className="text-lg text-[#c7f36b]">↗</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold leading-snug tracking-tight text-white">
              {project.title}
            </h3>
            <p className="mb-6 flex-grow text-sm leading-6 text-white/60">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-5 border-t border-white/10 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#c7f36b] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f36b]"
                >
                  <FaExternalLinkAlt aria-hidden="true" /> Visit site
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f36b]"
                >
                  <FaGithub aria-hidden="true" /> Source code
                </a>
              )}
            </div>
          </motion.article>
        ))}
        </div>
      </div>
    </motion.section>
  );
};
