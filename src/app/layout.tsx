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
  title: "Jonel Chico — Software Engineer & Full-Stack Developer",
  description:
    "Software Engineer and full-stack developer with 7+ years building production React and TypeScript applications, backend services, and enterprise and B2B SaaS platforms.",
  openGraph: {
    title: "Jonel Chico — Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer and full-stack developer with 7+ years building production React and TypeScript applications, backend services, and enterprise and B2B SaaS platforms.",
    type: "website",
    images: ["/avatar.jpg"],
  },
  twitter: {
    card: "summary",
    title: "Jonel Chico — Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer and full-stack developer building production React and TypeScript applications and backend services.",
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
