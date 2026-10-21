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
    slug: "t-tracker",
    title: "T-Tracker",
    eyebrow: "TaskTrack · Productivity",
    summary:
      "A task-management app with a dashboard for organizing work and a calendar for planning by date.",
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
  {
    slug: "konsultech",
    title: "KonsulTech — Multi-clinic EMR",
    eyebrow: "KonsulTech · Healthcare",
    summary:
      "Owned backend engineering for a secure, multi-service EMR platform supporting patient records, appointments, and consultations across multiple clinics.",
    overview:
      "KonsulTech brings patient records, appointments, and consultations into one platform for Philippine healthcare facilities. I owned backend engineering for the secure, multi-service EMR platform, built with NestJS, PostgreSQL, and Prisma. AES-256-GCM encryption protects clinical notes, prescriptions, and lab results.",
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
          "Use AES-256-GCM encryption to protect clinical notes, prescriptions, and lab results.",
      },
    ],
    technologies: [
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
    liveUrl: "https://konsultech.app",
  },
  {
    slug: "b1t1-shawarma",
    title: "B1T1 Shawarma",
    eyebrow: "Restaurant website · Food & beverage",
    summary:
      "A brand website bringing B1T1 Shawarma’s buy-one-take-one offer, menu, promotions, branch finder, and franchise information together.",
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
];
