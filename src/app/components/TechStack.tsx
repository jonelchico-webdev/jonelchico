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
      "Redux Toolkit",
      "React Query",
      "GSAP",
      "React Router",
      "Storybook",
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
      "Cloudflare R2",
      "JWT",
      "Swagger",
    ],
  },
  {
    title: "Quality & observability",
    description: "Confidence and visibility in production.",
    technologies: [
      "OpenTelemetry",
      "Uptrace",
      "Sentry",
      "Jest",
      "Vitest",
      "Cypress",
      "Playwright",
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
      "Docker",
      "OpenAI API",
      "Claude API",
      "Stripe",
      "Sanity",
      "jsPDF",
    ],
  },
];

export const TechStackSection = () => {
  return (
    <section
      id="tech"
      className="border-y border-white/10 bg-[#101410] px-6 py-20 text-[#f2f4ef] sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
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
          {stackGroups.map((group) => (
            <article
              key={group.title}
              data-reveal-item
              className="rounded-2xl border border-white/10 bg-[#0b0e0c] p-5 sm:p-6"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
