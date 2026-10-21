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
      "A task management app that brings a task dashboard and calendar into one place.",
    overview:
      "TaskTrack is organized around two ways to work with tasks: a dashboard for managing and reviewing them, and a calendar for planning by date. The dashboard supports status and priority workflows, plus search and filtering.",
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
    title: "EMR API — Electronic Medical Records Backend",
    eyebrow: "KonsulTech · Healthcare",
    summary:
      "A secure, multi-service electronic medical records platform built to support day-to-day patient and consultation workflows.",
    overview:
      "KonsulTech brings patient records, appointments, and consultations into one platform for Philippine healthcare facilities. I owned the secure, multi-service EMR platform, with backend services supporting the product's scheduling, clinical notes, prescriptions, patient queues, and multi-facility workflows.",
    highlights: [
      {
        title: "Patient records",
        description:
          "Keep patient information and visit history available as part of the care workflow.",
      },
      {
        title: "Appointments and consultations",
        description:
          "Coordinate schedules and document visits with structured clinical notes.",
      },
      {
        title: "Prescriptions and facilities",
        description:
          "Support prescription workflows and the ability to work across multiple facilities.",
      },
      {
        title: "Secure clinical data",
        description:
          "Protect clinical notes, prescriptions, and lab results with AES-256-GCM encryption.",
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
      "A lively restaurant website that brings the menu, current promos, nearby branches, and franchise information together.",
    overview:
      "The B1T1 Shawarma website introduces the brand and its buy-one-take-one offer, then helps visitors browse food, find a branch, order, or learn about franchising.",
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
