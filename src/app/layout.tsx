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
  metadataBase: new URL("https://jonelchico.com"),
  title: "Jonel Chico — Software Engineer",
  description:
    "Full-stack software engineer with 6+ years building scalable, user-focused web applications with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Jonel Chico — Software Engineer",
    description:
      "Full-stack software engineer building scalable, user-focused web applications with React, Next.js, and TypeScript.",
    type: "website",
    images: ["/avatar.jpg"],
  },
  twitter: {
    card: "summary",
    title: "Jonel Chico — Software Engineer",
    description:
      "Full-stack software engineer building scalable, user-focused web applications.",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
