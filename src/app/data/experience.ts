export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  /** Earlier roles render as a compact row with less visual weight. */
  compact?: boolean;
};

/** Newest first. */
export const experience: ExperienceEntry[] = [
  {
    role: "Senior Software Engineer",
    company: "Casting.com",
    period: "Aug 2024 – Present",
    location: "Remote (US)",
    highlights: [
      "Lead frontend development of complex, performance-sensitive SaaS workflows in React and TypeScript, using Redux Toolkit and React Query to keep client and server state predictable.",
      "Modernised a legacy Material UI v4 app to modern React patterns without disrupting live customers.",
      "Built high-performance UIs: data tables, virtualised lists, infinite scrolling, and drag-and-drop workflows.",
      "Integrated OpenTelemetry with Uptrace across the NestJS/Fastify + Prisma backend, giving the team production traces to debug user-facing issues.",
      "Shipped customer-facing AI features using the OpenAI and Claude APIs with Product, Design, and QA.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Berlitz",
    period: "Sep 2021 – Aug 2024",
    location: "Remote (Australia-based team)",
    highlights: [
      "Led the Gatsby-to-Astro build migration, cutting production builds from 5–10 minutes to under 1 minute.",
      "Co-led a shared component library adopted across product teams in multiple regional markets.",
      "Delivered high-traffic platforms serving millions of annual site visits worldwide.",
      "Mentored 5 engineers through code reviews and React best practices.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "White Cloak Technologies",
    period: "Jul 2020 – Aug 2021",
    highlights: [
      "Built reusable React components and shared UI libraries across multiple client projects.",
    ],
    compact: true,
  },
  {
    role: "Frontend Developer",
    company: "Icefox Technology",
    period: "Aug 2019 – Mar 2020",
    highlights: [
      "Built React features on GraphQL with Apollo Client, plus reusable component systems.",
    ],
    compact: true,
  },
];
