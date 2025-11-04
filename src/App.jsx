import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#about" className="text-lg font-semibold tracking-tight">
            Jane Doe
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
            <a href="#experience" className="hover:text-indigo-700">Experience</a>
            <a href="#skills" className="hover:text-indigo-700">Skills</a>
            <a href="#contact" className="hover:text-indigo-700">Contact</a>
            <a
              href="/cv_jane_doe.pdf"
              className="rounded-md bg-slate-900 px-3 py-1.5 text-white hover:bg-slate-800"
            >
              Download CV
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Jane Doe • Built with React & Tailwind
        </div>
      </footer>
    </div>
  );
}
