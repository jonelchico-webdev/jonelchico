import { experience } from "../data/experience";

export const ExperienceSection = () => {
  const featured = experience.filter((entry) => !entry.compact);
  const earlier = experience.filter((entry) => entry.compact);

  return (
    <section
      id="experience"
      className="border-b border-white/10 px-6 py-20 text-[#f2f4ef] sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#c7f36b]">Experience</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Where I’ve done the work</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55">
            7+ years of production React and TypeScript, most recent first.
          </p>
        </div>

        <ol className="grid gap-5">
          {featured.map((entry) => (
            <li key={`${entry.company}-${entry.period}`} data-reveal-item>
              <article className="grid gap-5 rounded-2xl border border-white/10 bg-[#111511] p-6 sm:p-8 md:grid-cols-[0.6fr_1.4fr] md:gap-10">
                <div>
                  <p className="text-sm font-medium tabular-nums text-[#c7f36b]">{entry.period}</p>
                  {entry.location && (
                    <p className="mt-1 text-sm text-white/45">{entry.location}</p>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold leading-snug tracking-tight text-white">
                    {entry.role}
                    <span className="text-white/45"> · </span>
                    <span className="text-white/75">{entry.company}</span>
                  </h3>
                  <ul className="mt-4 grid gap-2.5">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-white/65 sm:text-[0.9375rem] sm:leading-7">
                        <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-[#c7f36b]/70" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>

        {earlier.length > 0 && (
          <div className="mt-10 sm:mt-12">
            <p data-reveal className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-white/45">Earlier roles</p>
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {earlier.map((entry) => (
                <li key={`${entry.company}-${entry.period}`} data-reveal-item>
                  <article className="grid gap-1 py-4 md:grid-cols-[0.6fr_1.4fr] md:gap-10 md:px-8">
                    <p className="text-sm tabular-nums text-white/45">{entry.period}</p>
                    <div>
                      <h3 className="text-base font-medium text-white/85">
                        {entry.role}
                        <span className="text-white/35"> · </span>
                        <span className="text-white/60">{entry.company}</span>
                      </h3>
                      {entry.highlights.map((highlight) => (
                        <p key={highlight} className="mt-1 text-sm leading-6 text-white/50">
                          {highlight}
                        </p>
                      ))}
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};
