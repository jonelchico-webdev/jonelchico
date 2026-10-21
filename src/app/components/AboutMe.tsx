export const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="border-y border-white/10 bg-[#101410] px-6 py-20 text-[#f2f4ef] sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div data-reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#c7f36b]">A little about me</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Production&#8209;minded.<br />Product-focused.</h2>
        </div>
        <div data-reveal>
          <p className="text-base leading-8 text-white/70 sm:text-lg">
            I’ve shipped and maintained production apps for distributed teams
            at Casting.com and Berlitz.
          </p>
          <p className="mt-4 text-base leading-8 text-white/55">
            I bring a production-engineering mindset: OpenTelemetry and Sentry
            for visibility, safe legacy migrations, and test coverage across
            unit, integration, and E2E. I build shared component libraries and
            work closely with backend teams on API contracts. I’ve also owned
            the backend of a multi-service EMR platform, so I understand both
            sides of the API.
          </p>
        </div>
      </div>
    </section>
  );
};
