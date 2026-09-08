import { Boxes, DatabaseZap, ServerCog } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import PlayfulDoodle from './PlayfulDoodle';

const focusIcons = [ServerCog, Boxes, DatabaseZap];

export default function About() {
  return (
    <section id="about" className="section-space">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A little about how I build"
            description="I am most interested in the parts of software where interface, backend logic, and data need to work together cleanly."
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-10">
          <Reveal className="surface-card relative overflow-hidden p-7 sm:p-9" direction="left">
            <motion.div
              animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-16 -top-16 size-44 rounded-full bg-warmyellow/15 blur-2xl"
            />
            <div className="relative z-10 max-w-2xl">
              <p className="text-lg leading-8 text-ink/[0.85] sm:text-xl">{portfolio.personal.about}</p>
              <p className="mt-5 text-base leading-7 text-muted">
                I am currently positioning myself for full-stack and backend roles where I can contribute to application logic, database design, API-driven workflows, and reliable user-facing systems while continuing to grow as an engineer.
              </p>
            </div>
            <PlayfulDoodle className="absolute -bottom-3 -right-2 w-40 rotate-3 opacity-20" />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {portfolio.focus.map((item, index) => {
              const Icon = focusIcons[index];
              return (
                <Reveal key={item.label} delay={index * 0.08} direction="right">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className="surface-card group flex h-full items-start gap-4 p-5 sm:p-6"
                  >
                    <motion.span
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blush text-softred"
                    >
                      <Icon size={22} />
                    </motion.span>
                    <div>
                      <p className="text-sm font-semibold text-muted">{item.label}</p>
                      <p className="mt-0.5 font-black tracking-[-0.02em] text-ink">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
