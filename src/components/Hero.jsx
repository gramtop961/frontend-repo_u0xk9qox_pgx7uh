import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Intro */}
          <div>
            <div className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
              Open to opportunities
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Jane Doe
            </h1>
            <p className="mt-2 text-lg font-medium text-indigo-700">
              Senior Frontend Engineer
            </p>
            <p className="mt-6 text-slate-600 leading-relaxed">
              I craft performant, accessible web experiences with React, TypeScript, and modern design systems. I love building thoughtful UIs that feel effortless.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm ring-1 ring-slate-200">
                <MapPin className="h-4 w-4 text-indigo-600" /> Remote • GMT-1
              </span>
              <a
                href="mailto:jane.doe@email.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 hover:text-indigo-700"
              >
                <Mail className="h-4 w-4" /> jane.doe@email.com
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 hover:text-indigo-700"
              >
                <Phone className="h-4 w-4" /> +1 (234) 567-890
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-white shadow hover:bg-slate-800"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-500"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Avatar / Card */}
          <div className="flex justify-center md:justify-end">
            <div className="relative aspect-square w-64 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-2xl ring-8 ring-white">
              <div className="absolute inset-0 grid place-items-center text-white">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-4xl font-bold">
                  JD
                </div>
                <p className="mt-4 text-center text-sm text-white/80 px-6">
                  8+ years building delightful products for millions of users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
