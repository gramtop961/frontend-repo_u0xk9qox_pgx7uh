import { Briefcase, ExternalLink } from "lucide-react";

const jobs = [
  {
    role: "Senior Frontend Engineer",
    company: "Acme Corp",
    period: "2021 — Present",
    achievements: [
      "Led migration to React 18 + Vite, improving TTI by 38%",
      "Built a component library with Radix + Tailwind adopted across 5 teams",
      "Mentored 6 engineers; established accessibility guidelines",
    ],
    link: "https://example.com",
  },
  {
    role: "Frontend Engineer",
    company: "Globex",
    period: "2018 — 2021",
    achievements: [
      "Shipped revenue-critical checkout with 99.98% success rate",
      "Introduced E2E testing and CI, reducing regressions by 60%",
      "Collaborated with Design to implement design tokens",
    ],
    link: "https://example.com",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-md bg-indigo-600/10 p-2 text-indigo-700">
          <Briefcase className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Experience
        </h2>
      </div>

      <div className="space-y-6">
        {jobs.map((job, idx) => (
          <article
            key={idx}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {job.role} · <span className="text-indigo-700">{job.company}</span>
                </h3>
                <p className="text-sm text-slate-500">{job.period}</p>
              </div>
              <a
                href={job.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:underline"
              >
                Company site <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              {job.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
