"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-65px)] items-center overflow-hidden px-6 py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-[#8bbd38]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(199,243,107,0.06),transparent_45%)]" />
      </div>
      <motion.div
        className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="order-2 md:order-1">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-[#c7f36b] sm:text-sm">
            <span aria-hidden="true" className="h-px w-8 bg-[#c7f36b]" />
            Software engineer · Full-stack
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.05em] sm:text-6xl md:text-7xl">
            Full-stack products,{" "}
            <span className="text-[#c7f36b]">built to last.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            I’m Jonel Chico, a Software Engineer with 7+ years building and
            owning production applications across the stack—from high-traffic
            React and TypeScript enterprise platforms to backend services for
            performance-sensitive B2B SaaS.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#c7f36b] px-6 text-sm font-semibold text-[#11150d] transition-colors hover:bg-[#d5fa8a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f36b]"
            >
              Explore my work <span aria-hidden="true" className="ml-2">↘</span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f36b]"
            >
              Get in touch
            </a>
            <a
              href="/Jonel-Chico-Resume.pdf"
              download
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f36b]"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="order-1 mx-auto md:order-2">
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-black/30">
            <div aria-hidden="true" className="absolute -inset-4 -z-10 rounded-full bg-[#c7f36b]/10 blur-2xl" />
          <Image
            src="/avatar.jpg"
            alt="Jonel Chico"
            width={280}
            height={340}
            priority
            className="h-64 w-52 rounded-[1.5rem] object-cover sm:h-80 sm:w-64"
          />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
