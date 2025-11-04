export default function Summary() {
  return (
    <section id="summary" className="mx-auto max-w-6xl px-6 py-10">
      <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Professional Summary
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300">
        Senior Software Engineer with 8+ years of experience building reliable, high‑impact web
        platforms. I specialize in scalable frontends (React, TypeScript) and robust backends
        (Node.js, Python, cloud). I care about clean architecture, performance, accessibility,
        and product outcomes. I’ve shipped features used by millions and love collaborating across
        design, product, and data.
      </p>
      <ul className="mt-6 grid list-disc grid-cols-1 gap-3 pl-5 text-sm text-gray-700 dark:text-gray-300 sm:grid-cols-2">
        <li>Led cross‑functional teams delivering end‑to‑end features on tight timelines</li>
        <li>Designed component libraries and design systems for consistency and speed</li>
        <li>Optimized performance to achieve sub‑200ms P95 for critical user flows</li>
        <li>Mentored engineers and established code quality, testing, and CI/CD practices</li>
      </ul>
    </section>
  );
}
