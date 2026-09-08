import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-space">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Experience that shaped how I solve problems"
            description="My experience spans backend web systems, data automation, database work, technical assistance, and practical software development."
          />
        </Reveal>

        <div className="relative mt-12">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-[11px] top-0 hidden w-px origin-top bg-gradient-to-b from-softred via-warmyellow to-line sm:block"
          />

          <div className="space-y-5">
            {portfolio.experience.map((item, index) => (
              <Reveal key={`${item.position}-${item.company}`} delay={index * 0.055}>
                <article className="relative sm:pl-10">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.2, type: 'spring', stiffness: 260 }}
                    className="absolute left-0 top-7 hidden size-[23px] rounded-full border-[6px] border-cream bg-softred shadow-sm sm:block"
                  />
                  <motion.div
                    whileHover={{ x: 4, y: -3 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                    className="surface-card p-6 sm:p-7"
                  >
                    <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                      <div>
                        <p className="text-sm font-bold text-softred">{item.date}</p>
                        <h3 className="mt-1.5 text-xl font-black tracking-[-0.03em] text-ink sm:text-2xl">{item.position}</h3>
                        <p className="mt-1 font-semibold text-ink/75">{item.company}</p>
                        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                          <MapPin size={14} /> {item.location}
                        </p>
                      </div>
                      <div className="flex max-w-sm flex-wrap gap-2 lg:justify-end">
                        {item.tools.map((tool, toolIndex) => (
                          <motion.span
                            key={tool}
                            whileHover={{ y: -2, scale: 1.03 }}
                            transition={{ delay: toolIndex * 0.01 }}
                            className="rounded-full bg-blush px-3 py-1.5 text-xs font-bold text-ink/75"
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3 text-sm leading-6 text-muted sm:text-[15px]">
                      {item.description.map((point, pointIndex) => (
                        <motion.li
                          key={point}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: pointIndex * 0.05 + 0.1 }}
                          className="flex gap-3"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-warmyellow" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
