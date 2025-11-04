import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-black dark:text-white">
      <Header />

      <main>
        <Summary />
        <Experience />
        <Skills />

        <section id="projects" className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-xl font-semibold tracking-tight">Highlighted Projects</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-base font-medium">Realtime Collaboration Suite</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Low‑latency editing platform with CRDTs, WebSockets, and optimistic UI.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
                <li>Sub‑100ms updates at global scale</li>
                <li>End‑to‑end type safety with TypeScript</li>
              </ul>
            </article>

            <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-base font-medium">E‑commerce Intelligence</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Analytics engine with event streaming, cohort analysis, and custom dashboards.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
                <li>Data pipeline on AWS with cost visibility</li>
                <li>Accessible, responsive charts</li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-gray-200 py-8 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
        © {new Date().getFullYear()} Alex Johnson. All rights reserved.
      </footer>
    </div>
  );
}
