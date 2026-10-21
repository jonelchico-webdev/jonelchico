import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jonelchico.vercel.app"),
  title: "Jonel Chico — Senior Software Engineer",
  description:
    "Senior Software Engineer building fast, reliable React and TypeScript frontends for B2B SaaS and enterprise platforms, with full-stack depth in NestJS, PostgreSQL, and Prisma.",
  openGraph: {
    title: "Jonel Chico — Senior Software Engineer",
    description:
      "Senior Software Engineer building fast, reliable React and TypeScript frontends for B2B SaaS and enterprise platforms, with full-stack depth in NestJS, PostgreSQL, and Prisma.",
    type: "website",
    images: ["/avatar.jpg"],
  },
  twitter: {
    card: "summary",
    title: "Jonel Chico — Senior Software Engineer",
    description:
      "React and TypeScript for B2B SaaS and enterprise platforms, with full-stack depth in NestJS, PostgreSQL, and Prisma.",
    images: ["/avatar.jpg"],
  },
};

// Runs before first paint: lets CSS hold the hero in its pre-animation state until GSAP takes over.
// Skipped for reduced motion; globals.css also reveals everything after a delay if the bundle never runs.
const motionBootScript = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("motion-pending")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
