import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

export default function Contact() {
  const { email, phone, location, linkedin, github } = portfolioData.personal;
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API pipeline dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
      <div className="text-left">
        {/* Section Header */}
        <span className="font-mono text-xs font-semibold tracking-widest text-violet-400 uppercase">
          08 // Connection
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white mt-2 sm:text-4xl dark:text-white light:text-slate-900">
          Get In Touch
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-xl dark:text-slate-400 light:text-slate-600">
          Have an architecture challenge, need an MCP integration, or want to discuss a distributed backend system? Reach out.
        </p>

        {/* Info Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          
          {/* Card Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/5 bg-[#12131a]/60 p-8 dark:border-white/5 dark:bg-[#12131a]/60 light:border-black/10 light:bg-slate-50">
              <h3 className="text-lg font-bold text-white mb-6 dark:text-white light:text-slate-900">
                Contact Details
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 text-xs font-semibold text-slate-300 hover:text-violet-400 transition-colors dark:text-slate-300 light:text-slate-700 light:hover:text-violet-600"
                >
                  <div className="rounded-lg bg-violet-500/10 p-2.5 light:bg-violet-100">
                    <Mail size={16} className="text-violet-400" />
                  </div>
                  {email}
                </a>

                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-4 text-xs font-semibold text-slate-300 hover:text-violet-400 transition-colors dark:text-slate-300 light:text-slate-700 light:hover:text-violet-600"
                >
                  <div className="rounded-lg bg-violet-500/10 p-2.5 light:bg-violet-100">
                    <Phone size={16} className="text-violet-400" />
                  </div>
                  {phone}
                </a>

                <div className="flex items-center gap-4 text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <div className="rounded-lg bg-violet-500/10 p-2.5 light:bg-violet-100">
                    <MapPin size={16} className="text-violet-400" />
                  </div>
                  {location}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 dark:border-white/5 light:border-black/5 flex gap-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-3 text-slate-400 hover:text-white hover:bg-white/5 transition-colors dark:border-white/10 light:border-black/10 light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-900"
                >
                  <Github size={20} />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-3 text-slate-400 hover:text-white hover:bg-white/5 transition-colors dark:border-white/10 light:border-black/10 light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-900"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/5 bg-[#12131a]/30 p-8 space-y-6 dark:border-white/5 dark:bg-[#12131a]/30 light:border-black/10 light:bg-slate-50"
            >
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-[#0f1015]/60 px-4 py-3 text-xs text-white placeholder-slate-600 focus:border-violet-500 focus:outline-none dark:border-white/10 dark:bg-[#0f1015]/60 light:border-black/10 light:bg-white light:text-slate-800"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@company.com"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-[#0f1015]/60 px-4 py-3 text-xs text-white placeholder-slate-600 focus:border-violet-500 focus:outline-none dark:border-white/10 dark:bg-[#0f1015]/60 light:border-black/10 light:bg-white light:text-slate-800"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your project, stack requirements, or collaboration goals..."
                  className="mt-2 w-full rounded-lg border border-white/10 bg-[#0f1015]/60 px-4 py-3 text-xs text-white placeholder-slate-600 focus:border-violet-500 focus:outline-none dark:border-white/10 dark:bg-[#0f1015]/60 light:border-black/10 light:bg-white light:text-slate-800"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Initiating Dispatch..."
                ) : submitSuccess ? (
                  <span className="flex items-center gap-1">
                    <CheckCircle size={14} /> Message Sent Successfully
                  </span>
                ) : (
                  <>
                    <Send size={14} /> Send Message
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
