import {
  AboutMeSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SiteMotion,
  TechStackSection,
} from "./components";

export default function Home() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#0b0e0c] text-[#f2f4ef]">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0e0c]/85 backdrop-blur-xl">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          >
            <a
              href="#home"
              className="inline-flex min-h-11 items-center text-sm font-semibold tracking-[0.16em] text-[#c7f36b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f36b]"
            >
              JC<span className="text-white/50">.</span>
            </a>
            <div className="flex items-center gap-4 text-sm text-white/65 sm:gap-8">
              <a className="inline-flex min-h-11 items-center transition-colors hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f36b]" href="#experience">Experience</a>
              <a className="inline-flex min-h-11 items-center transition-colors hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f36b]" href="#projects">Projects</a>
              <a className="inline-flex min-h-11 items-center transition-colors hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f36b]" href="#about">About</a>
              <a className="inline-flex min-h-11 items-center transition-colors hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f36b]" href="#contact">Contact</a>
              <a className="hidden min-h-11 items-center transition-colors hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f36b] sm:inline-flex" href="/Jonel-Chico-Resume.pdf" download>CV</a>
            </div>
          </nav>
        </header>
        <HeroSection />
        <AboutMeSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <SiteMotion />
    </>
  );
}
