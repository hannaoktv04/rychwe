import { BrainCircuit, Database, ServerCog, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const iconMap = { ServerCog, Database, BrainCircuit, Wrench };

export default function Skills() {
  return (
    <section id="skills" className="section-space bg-paper/[0.45]">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="The stack I enjoy working with"
            description="My strongest direction is web and backend development, supported by database, automation, data analysis, and machine learning experience."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {portfolio.skills.map((group, index) => {
            const Icon = iconMap[group.icon] ?? ServerCog;
            return (
              <Reveal key={group.category} delay={index * 0.06} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.article
                  whileHover={{ y: -7 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                  className="surface-card group relative h-full overflow-hidden p-6 sm:p-7"
                >
                  <motion.div
                    className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-softred/[0.06] blur-2xl"
                    animate={{ scale: [1, 1.2, 1], x: [0, -10, 0] }}
                    transition={{ duration: 6 + index, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="relative flex items-center gap-3">
                    <motion.span
                      whileHover={{ rotate: 10, scale: 1.08 }}
                      className="inline-flex size-11 items-center justify-center rounded-2xl bg-ink text-warmyellow"
                    >
                      <Icon size={20} />
                    </motion.span>
                    <h3 className="text-lg font-black tracking-[-0.025em] text-ink">{group.category}</h3>
                  </div>
                  <div className="relative mt-5 flex flex-wrap gap-2.5">
                    {group.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.03 * itemIndex, duration: 0.28 }}
                        whileHover={{ y: -4, rotate: itemIndex % 2 === 0 ? -1.4 : 1.4, scale: 1.03 }}
                        className="rounded-full border border-line bg-cream px-3.5 py-2 text-sm font-semibold text-ink/80"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
