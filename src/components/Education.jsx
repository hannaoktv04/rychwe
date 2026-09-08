import { Award, GraduationCap, Mic2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section-space">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Learning, building, and staying curious"
            description="My academic background is supported by practical projects, software development training, and continuous exploration across web and data."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="space-y-4">
            {portfolio.education.map((item, index) => (
              <Reveal key={item.institution} delay={index * 0.06} direction="left">
                <motion.article whileHover={{ x: 4, y: -4 }} className="surface-card p-6">
                  <div className="flex items-start gap-4">
                    <motion.span whileHover={{ rotate: 8, scale: 1.07 }} className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-warmyellow/25 text-ink">
                      <GraduationCap size={22} />
                    </motion.span>
                    <div>
                      <p className="text-sm font-bold text-softred">{item.period}</p>
                      <h3 className="mt-1 text-xl font-black tracking-[-0.025em] text-ink">{item.institution}</h3>
                      <p className="mt-1 font-semibold text-ink/75">{item.degree}</p>
                      <p className="mt-3 text-sm leading-6 text-muted">{item.note}</p>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>

          <Reveal direction="right">
            <motion.div whileHover={{ y: -4 }} className="surface-card h-full p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <motion.span whileHover={{ rotate: -8 }} className="inline-flex size-11 items-center justify-center rounded-2xl bg-blush text-softred"><Award size={20} /></motion.span>
                <div>
                  <p className="text-sm font-semibold text-muted">Certifications & Learning</p>
                  <h3 className="text-xl font-black tracking-[-0.025em] text-ink">Courses and certifications</h3>
                </div>
              </div>

              <div className="mt-6 divide-y divide-line">
                {portfolio.certifications.map((certificate, index) => (
                  <motion.div
                    key={`${certificate.title}-${certificate.date}`}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.045 }}
                    className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-4"
                  >
                    <div>
                      <p className="font-bold text-ink">{certificate.title}</p>
                      <p className="mt-1 text-sm text-muted">{certificate.issuer}</p>
                    </div>
                    <p className="text-sm font-semibold text-softred sm:text-right">{certificate.date}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>

        {portfolio.achievements.length > 0 && (
          <Reveal className="mt-5">
            <motion.div whileHover={{ y: -4 }} className="surface-card flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:p-7">
              <motion.span animate={{ rotate: [0, -6, 6, 0] }} transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }} className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-warmyellow"><Mic2 size={20} /></motion.span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-black tracking-[-0.025em] text-ink">{portfolio.achievements[0].title}</h3>
                  <span className="rounded-full bg-blush px-3 py-1 text-xs font-bold text-softred">{portfolio.achievements[0].date}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted sm:text-[15px]">{portfolio.achievements[0].description}</p>
              </div>
            </motion.div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
