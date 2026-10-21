export type ProjectCaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  overview: string;
  highlights: { title: string; description: string }[];
  technologies: string[];
  liveUrl: string;
  repoUrl?: string;
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "konsultech",
    title: "KonsulTech — Multi-clinic EMR",
    eyebrow: "KonsulTech · Healthcare",
    summary:
      "Backend owner (one of two engineers) for a multi-clinic EMR used by Philippine clinics. Designed a three-service architecture — a Fastify API gateway, the EMR backend, and a platform admin API — with field-level AES-256-GCM encryption of patient data, per-facility RBAC, and file uploads via Cloudflare R2 presigned URLs. Covered by 200+ end-to-end tests.",
    overview:
      "KonsulTech brings patient records, appointments, and consultations into one platform for Philippine clinics. As backend owner on a team of two engineers, I designed its three services — a Fastify API gateway, the EMR backend, and a platform admin API — built with NestJS, PostgreSQL, and Prisma. Field-level AES-256-GCM encryption protects patient data such as clinical notes, prescriptions, and lab results, access is scoped per facility with RBAC, and files upload directly to Cloudflare R2 through presigned URLs. The services are covered by 200+ end-to-end tests.",
    highlights: [
      {
        title: "Patient records",
        description:
          "Support patient information and visit history as part of the clinical workflow.",
      },
      {
        title: "Appointments and consultations",
        description:
          "Coordinate schedules and document visits with structured clinical notes.",
      },
      {
        title: "Prescriptions and facilities",
        description:
          "Support prescription workflows and day-to-day work across multiple facilities.",
      },
      {
        title: "Secure clinical data",
        description:
          "Field-level AES-256-GCM encryption of patient data, per-facility RBAC, and file uploads through Cloudflare R2 presigned URLs.",
      },
    ],
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Fastify",
      "Cloudflare R2",
      "JWT",
      "Swagger",
      "Jest",
    ],
    liveUrl: "https://konsultech.app",
  },
  {
    slug: "b1t1-shawarma",
    title: "B1T1 Shawarma",
    eyebrow: "Restaurant website · Food & beverage",
    summary:
      "A brand site for a franchise food chain, with menu, promos, a branch finder, and franchise inquiries. GSAP-driven animations tuned to stay smooth on mid-range phones for a mostly mobile audience.",
    overview:
      "The site introduces the brand and its buy-one-take-one offer, then gives visitors direct paths to browse shawarma wraps and other menu items, check promotions, find a branch, order, or learn about franchising.",
    highlights: [
      {
        title: "Menu discovery",
        description:
          "Browse shawarma wraps, rice meals, snacks, beverages, and add-ons.",
      },
      {
        title: "Promos and ordering",
        description:
          "Surface current deals and give visitors a clear path to order.",
      },
      {
        title: "Branches and franchising",
        description:
          "Find branch information or explore the franchise opportunity.",
      },
    ],
    technologies: ["JavaScript", "Vite", "GSAP"],
    liveUrl: "https://b1t1shawarma.com",
  },
  {
    slug: "t-tracker",
    title: "T-Tracker",
    eyebrow: "TaskTrack · Productivity",
    summary:
      "A task manager with a dashboard and calendar view, Supabase auth and data, and PDF export via jsPDF. A small, complete product, built end to end.",
    overview:
      "TaskTrack combines task organization and calendar planning in one app. Users can create and manage tasks, search and filter the dashboard, update status and priority, and move work between dates in the calendar.",
    highlights: [
      {
        title: "Task dashboard",
        description:
          "Review tasks in list or board layouts, with status and priority controls.",
      },
      {
        title: "Calendar planning",
        description:
          "Use a dedicated calendar view to see tasks by date and move work between days.",
      },
      {
        title: "Focused workflows",
        description:
          "Create, edit, search, filter, and organize tasks from the dashboard.",
      },
    ],
    technologies: [
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
];
