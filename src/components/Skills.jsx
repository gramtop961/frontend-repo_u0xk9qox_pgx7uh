import { Code, Star } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Vite", "Next.js", "Tailwind CSS", "Radix UI"],
  },
  {
    title: "Testing & Quality",
    items: ["Jest", "React Testing Library", "Playwright", "Storybook"],
  },
  {
    title: "Tooling",
    items: ["GitHub Actions", "ESLint", "Prettier", "Vercel", "Webpack"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-md bg-indigo-600/10 p-2 text-indigo-700">
            <Code className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Skills
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700">
                    <Star className="h-4 w-4 text-amber-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
