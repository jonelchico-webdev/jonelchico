"use client";

import { motion } from "framer-motion";

export const AboutMeSection = () => {
  return (
    <motion.section
      id="about"
      className="border-y border-white/10 bg-[#101410] px-6 py-20 text-[#f2f4ef] sm:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#c7f36b]">A little about me</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Production-minded.<br />Product-focused.</h2>
        </div>
        <div>
          <p className="text-base leading-8 text-white/70 sm:text-lg">
            I’ve owned production React and TypeScript applications for
            distributed teams across the US and Australia, spanning
            high-traffic enterprise platforms and performance-sensitive B2B
            SaaS.
          </p>
          <p className="mt-4 text-base leading-8 text-white/55">
            I bring a production-engineering mindset: OpenTelemetry and Sentry
            observability, stable legacy migrations, and unit, integration,
            and end-to-end testing. I work with GraphQL and Apollo Client and
            build shared component libraries. Backend experience with NestJS,
            PostgreSQL, and Prisma—including ownership of a secure,
            multi-service EMR platform—helps me collaborate closely on API
            contracts and correctness-focused payments.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
