import {
  AboutMeSection,
  ContactSection,
  HeroSection,
  TechStackSection,
} from "./components";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-200">
      <HeroSection />
      <AboutMeSection />
      <TechStackSection />
      <ContactSection />
    </main>
  );
}
