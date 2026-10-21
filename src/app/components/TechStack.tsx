"use client";

import { motion } from "framer-motion";

const stackGroups = [
  {
    title: "Frontend",
    description: "Building responsive, polished web experiences.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "MUI",
      "Vite",
      "GSAP",
      "React Router",
      "Shared component libraries",
    ],
  },
  {
    title: "APIs & backend",
    description: "Frontend integration and backend systems.",
    technologies: [
      "GraphQL",
      "Apollo Client",
      "Node.js",
      "NestJS",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Supabase",
      "AWS S3",
      "JWT",
      "Swagger",
    ],
  },
  {
    title: "Quality & observability",
    description: "Confidence and visibility in production.",
    technologies: [
      "OpenTelemetry",
      "Sentry",
      "Jest",
      "Unit testing",
      "Integration testing",
      "End-to-end testing",
    ],
  },
  {
    title: "Platforms & tooling",
    description: "Services and tools used across shipped products.",
    technologies: [
      "Git",
      "Stripe",
      "Sanity",
      "jsPDF",
    ],
  },
];

export const TechStackSection = () => {
  return (
    <motion.section
      id="tech"
      className="border-y border-white/10 bg-[#101410] px-6 py-20 text-[#f2f4ef] sm:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#c7f36b]">
              The toolkit
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Technologies across my work
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55">
            From user-facing interfaces to APIs, data, and the services that
            support them.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stackGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-[#0b0e0c] p-5 sm:p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 border-b border-white/10 pb-4">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <p className="mt-1 text-sm leading-6 text-white/50">
                  {group.description}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label={group.title}>
                {group.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-white/75"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
