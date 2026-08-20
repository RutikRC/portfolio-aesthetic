import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import bannerImage from "../../assets/banner image.jpeg";

export default function Contact() {
  const { email, phone, location, linkedin, github } = portfolioData.personal;
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1200);
  };

  const inputClass =
    "mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20";

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 md:px-10 md:py-32"
    >
      <div className="text-left">
        <span className="u-eyebrow">09 // Connection</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Let's build something <span className="u-gradient-text">reliable</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-[15px]">
          Have an architecture challenge, need an MCP integration, or want to discuss a
          distributed backend system? Reach out.
        </p>

        {/* Wide banner image */}
        <div className="relative mt-10 aspect-[5/2] overflow-hidden rounded-2xl border border-white/10">
          <img
            src={bannerImage}
            alt="Software engineering workspace"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/40 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center justify-between gap-2 sm:left-8 sm:right-8">
            <span className="font-mono text-xs font-semibold tracking-wider text-slate-200">
              OPEN TO BACKEND / AI / FULL-STACK ROLES
            </span>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-violet-500 active:scale-[0.98]"
            >
              <Mail size={13} />
              Email me
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="u-card p-8">
              <h3 className="text-lg font-bold text-white">
                Contact details
              </h3>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-4 text-sm font-semibold text-slate-300 transition-colors hover:text-violet-300"
                >
                  <div className="rounded-lg bg-violet-500/10 p-2.5 text-violet-300">
                    <Mail size={16} />
                  </div>
                  {email}
                </a>

                <a
                  href={`tel:${phone}`}
                  className="group flex items-center gap-4 text-sm font-semibold text-slate-300 transition-colors hover:text-violet-300"
                >
                  <div className="rounded-lg bg-violet-500/10 p-2.5 text-violet-300">
                    <Phone size={16} />
                  </div>
                  {phone}
                </a>

                <div className="flex items-center gap-4 text-sm font-semibold text-slate-300">
                  <div className="rounded-lg bg-violet-500/10 p-2.5 text-violet-300">
                    <MapPin size={16} />
                  </div>
                  {location}
                </div>
              </div>

              <div className="mt-8 flex gap-3 border-t border-white/5 pt-6">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-3 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                  aria-label="GitHub profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-3 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="u-card space-y-6 p-8"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400"
                >
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@company.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your project, stack requirements, or collaboration goals..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:shadow-xl hover:shadow-violet-600/30 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Initiating dispatch…"
                ) : submitSuccess ? (
                  <span className="flex items-center gap-1">
                    <CheckCircle size={14} /> Message sent successfully
                  </span>
                ) : (
                  <>
                    <Send size={14} />
                    Send message
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}