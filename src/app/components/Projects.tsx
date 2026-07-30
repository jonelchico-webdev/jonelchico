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
    // TODO: Replace this placeholder copy — say what T-Tracker tracks, your role, and the outcome.
    title: "T-Tracker",
    description:
      "A tracker web app built with React and Vite. Placeholder copy — swap in a sentence on what it tracks and the impact it had.",
    tags: ["React", "Vite", "JavaScript"],
    liveUrl: "https://t-tracker-seven.vercel.app",
    repoUrl: "https://github.com/jonelchico-webdev/t-tracker",
  },
  {
    // Private repo — no public live/repo links. Copy derived from the project README.
    title: "EMR API — Electronic Medical Records Backend",
    description:
      "Production-ready backend for an EMR system: multi-clinic support with role-based access, AES-256-GCM encryption for clinical notes, prescriptions and lab results, doctor scheduling, and 72 passing e2e tests.",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma"],
  },
];

export const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-gray-900 text-center text-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-12 text-green-400">Projects</h2>

      <div className="grid gap-8 max-w-5xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="flex flex-col text-left p-6 bg-gray-950 rounded-xl shadow-lg border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-teal-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub /> Code
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};
