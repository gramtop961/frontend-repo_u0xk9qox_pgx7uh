import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Contact
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          I’m always excited to chat about new challenges, collaborations, or speaking opportunities. The fastest way to reach me is via email.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-indigo-600" /> jane.doe@email.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-indigo-600" /> +1 (234) 567-890
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-indigo-600" /> Remote • GMT-1
            </li>
          </ul>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-900">Send a message</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Say hello..."
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 font-medium text-white shadow hover:bg-indigo-500"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
