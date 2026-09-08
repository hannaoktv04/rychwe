import { useCallback, useState } from 'react';
import { ArrowUpRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ProjectVisual from './ProjectVisual';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projects" className="section-space relative overflow-hidden bg-paper/[0.45]">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 70, 0], y: [0, -35, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-24 top-48 size-64 rounded-full bg-warmyellow/[0.08] blur-3xl"
      />
      <div className="page-shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Projects built across backend, full-stack, and data"
            description="I prioritize projects that show how I design application flows, connect databases, implement backend logic, and deliver complete web experiences."
          />
        </Reveal>

        <div className="mt-11 grid gap-6 lg:grid-cols-2">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.045} direction={index % 2 === 0 ? 'left' : 'right'}>
              <motion.article
                whileHover={{ y: -9, rotate: index % 2 === 0 ? -0.25 : 0.25 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="surface-card group relative h-full overflow-hidden p-4 sm:p-5"
              >
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-softred/60 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                />

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="block w-full rounded-[1.6rem] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softred focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
                  aria-label={`View details for ${project.title}`}
                >
                  <div className="relative overflow-hidden rounded-[1.6rem]">
                    <ProjectVisual type={project.visual} />
                    <motion.div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/25 to-white/0"
                      initial={{ x: '-140%' }}
                      whileHover={{ x: '140%' }}
                      transition={{ duration: 0.75 }}
                    />
                  </div>
                  <div className="px-1 pt-5 sm:px-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-softred">{project.eyebrow}</p>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-warmyellow/20 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-ink/70">
                          <Sparkles size={11} /> priority
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-xl font-black tracking-[-0.03em] text-ink sm:text-2xl">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted sm:text-[15px]">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          whileHover={{ y: -2, scale: 1.03 }}
                          transition={{ delay: techIndex * 0.01 }}
                          className="rounded-full bg-cream px-3 py-1.5 text-xs font-bold text-ink/75"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </button>

                <div className="mt-5 flex flex-wrap items-center gap-2.5 px-1 pb-1 sm:px-2">
                  <button type="button" onClick={() => setSelectedProject(project)} className="btn-primary group py-2.5">
                    View Details <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary py-2.5"><Github size={16} /> GitHub</a>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="btn-secondary py-2.5"><ExternalLink size={16} /> Live Demo</a>}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
}
