import { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Send, SquareArrowOutUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Demo form only — connect this handler to Formspree, EmailJS, Resend, or your own backend endpoint.');
  };

  const socials = [
    { label: 'Email', value: portfolio.personal.email, href: `mailto:${portfolio.personal.email}`, icon: Mail },
    { label: 'LinkedIn', value: portfolio.personal.linkedin || '[LINKEDIN]', href: portfolio.personal.linkedin, icon: Linkedin },
    { label: 'GitHub', value: portfolio.personal.github || '[GITHUB]', href: portfolio.personal.github, icon: Github },
  ];

  return (
    <section id="contact" className="section-space pb-12">
      <div className="page-shell">
        <motion.div whileHover={{ y: -3 }} className="surface-card relative overflow-hidden bg-ink p-6 text-white sm:p-9 lg:p-11">
          <motion.div animate={{ x: [0, -35, 0], y: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -right-20 -top-24 size-72 rounded-full bg-softred/[0.18] blur-3xl" />
          <motion.div animate={{ x: [0, 35, 0], y: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute -bottom-28 left-20 size-72 rounded-full bg-warmyellow/[0.12] blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-14">
            <Reveal direction="left">
              <SectionHeading
                eyebrow="Contact"
                title="Let's build something useful."
                description="I'm open to full-stack and backend opportunities, internships, collaborations, and interesting software projects."
                inverse
              />
              <p className="mt-5 max-w-lg text-sm leading-6 text-white/60">
                If you are looking for someone who enjoys backend logic, databases, web applications, and data-driven problem solving, feel free to reach out.
              </p>

              <div className="mt-7 grid gap-3">
                {socials.map(({ label, value, href, icon: Icon }, index) => {
                  const content = (
                    <>
                      <motion.span whileHover={{ rotate: 7, scale: 1.05 }} className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-warmyellow"><Icon size={18} /></motion.span>
                      <span className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-[0.14em] text-white/[0.45]">{label}</span>
                        <span className="mt-0.5 block truncate text-sm font-semibold text-white/[0.85]">{value}</span>
                      </span>
                    </>
                  );

                  return href ? (
                    <motion.a
                      key={label}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      whileHover={{ x: 4 }}
                      href={href}
                      target={href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:bg-white/10"
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 opacity-75">
                      {content}
                    </div>
                  );
                })}
              </div>

              <a href={`mailto:${portfolio.personal.email}`} className="group mt-6 inline-flex items-center gap-2 font-bold text-warmyellow">
                Get In Touch <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>

            <Reveal delay={0.08} direction="right">
              <motion.form whileHover={{ y: -3 }} onSubmit={handleSubmit} className="rounded-[1.75rem] border border-white/[0.12] bg-white/[0.07] p-5 backdrop-blur-sm sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-white/75">
                    Name
                    <input required name="name" type="text" placeholder="Your name" className="rounded-2xl border border-white/[0.12] bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:-translate-y-0.5 focus:border-warmyellow/70" />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-white/75">
                    Email
                    <input required name="email" type="email" placeholder="you@email.com" className="rounded-2xl border border-white/[0.12] bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:-translate-y-0.5 focus:border-warmyellow/70" />
                  </label>
                </div>
                <label className="mt-4 grid gap-2 text-sm font-semibold text-white/75">
                  Message
                  <textarea required name="message" rows="6" placeholder="Tell me about your project or opportunity..." className="resize-none rounded-2xl border border-white/[0.12] bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:-translate-y-0.5 focus:border-warmyellow/70" />
                </label>
                <motion.button whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-warmyellow px-5 py-3 font-black text-ink transition-colors hover:bg-[#F0C75F] sm:w-auto">
                  Send Message <Send size={17} />
                </motion.button>
                {status && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} role="status" className="mt-4 rounded-2xl bg-white/[0.08] px-4 py-3 text-xs leading-5 text-white/60">{status}</motion.p>}

                {/*
                  FRONTEND-ONLY FORM:
                  Replace handleSubmit with your Formspree / EmailJS / Resend / custom API request.
                  Never expose secret API keys directly in frontend code.
                */}
              </motion.form>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
