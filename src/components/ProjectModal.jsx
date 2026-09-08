import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/45 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} project details`}
            initial={{ opacity: 0, y: 60, scale: 0.94, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 32, scale: 0.96, filter: 'blur(8px)' }}
            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-line bg-cream p-3 shadow-soft sm:p-4"
          >
            <div className="relative">
              <ProjectVisual type={project.visual} />
              <motion.button
                whileHover={{ rotate: 8, scale: 1.06 }}
                whileTap={{ scale: 0.92 }}
                type="button"
                aria-label="Close project details"
                onClick={onClose}
                className="absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-full border border-line bg-paper/95 text-ink shadow-card backdrop-blur"
              >
                <X size={18} />
              </motion.button>
            </div>

            <div className="p-3 sm:p-5">
              <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }} className="text-xs font-black uppercase tracking-[0.16em] text-softred">{project.eyebrow}</motion.p>
              <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-2 text-2xl font-black tracking-[-0.035em] text-ink sm:text-3xl">{project.title}</motion.h3>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-sm leading-7 text-muted sm:text-base">{project.detail}</motion.p>

              {project.architecture && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-5 rounded-2xl border border-line bg-paper px-4 py-4 text-sm leading-6 text-ink/75">
                  <span className="font-black text-ink">Architecture</span>
                  <span className="mt-1 block">{project.architecture}</span>
                </motion.div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.24 + index * 0.035 }} key={tech} className="rounded-full bg-blush px-3 py-1.5 text-xs font-bold text-ink/80">{tech}</motion.span>
                ))}
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {project.highlights.map((item, index) => (
                  <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.28 + index * 0.045 }} key={item} className="rounded-2xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink/75">{item}</motion.div>
                ))}
              </div>

              {(project.github || project.demo) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary"><Github size={17} /> GitHub</a>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary"><ExternalLink size={17} /> Live Demo</a>}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
