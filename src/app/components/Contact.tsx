"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

export const ContactSection = () => {
  const contacts = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:jonelrocchico@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/jonelchico",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/jonelchico-webdev",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden px-6 py-24 text-[#f2f4ef] sm:py-32"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#8bbd38]/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[#111511] p-8 sm:p-12 lg:p-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#c7f36b]">Have a project in mind?</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">Let’s make something meaningful.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
              I’m always open to good conversations, interesting ideas, and new opportunities.
            </p>
          </div>
          <a
            href="mailto:jonelrocchico@gmail.com"
            className="inline-flex min-h-12 items-center justify-center gap-2 justify-self-start rounded-full bg-[#c7f36b] px-6 text-sm font-semibold text-[#11150d] transition-colors hover:bg-[#d5fa8a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f36b] md:justify-self-end"
          >
            <FaEnvelope aria-hidden="true" /> Say hello
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-6">
          {contacts.slice(1).map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 px-4 text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f36b]"
            >
              <span aria-hidden="true">{contact.icon}</span>
              {contact.name}
            </a>
          ))}
          <a
            href="/Jonel-Chico-Resume.pdf"
            download
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 px-4 text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f36b]"
          >
            <FaFilePdf aria-hidden="true" />
            CV
          </a>
        </div>
      </div>
      <footer className="relative mx-auto mt-10 max-w-6xl text-xs text-white/35">
        © {new Date().getFullYear()} Jonel Chico
      </footer>
    </motion.section>
  );
};
