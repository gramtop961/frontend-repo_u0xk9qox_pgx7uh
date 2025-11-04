import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="relative overflow-visible">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto h-48 w-full max-w-6xl bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Alex Johnson
            </h1>
            <p className="mt-1 text-base text-gray-600 dark:text-gray-300">
              Senior Software Engineer • Full‑Stack (React, Node, Python)
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" /> San Francisco, CA
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="mailto:alex.johnson@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <nav className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-800">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <a href="#summary" className="hover:text-gray-900 dark:hover:text-white">
                Summary
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-gray-900 dark:hover:text-white">
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-900 dark:hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-900 dark:hover:text-white">
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
