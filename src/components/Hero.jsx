import { ArrowDown, ArrowUpRight, Braces, Database, Download, ServerCog, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import PlayfulDoodle from './PlayfulDoodle';

const introContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const introItem = {
  hidden: { opacity: 0, y: 26, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { personal } = portfolio;
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 700], [0, 50]);
  const photoRotate = useTransform(scrollY, [0, 700], [0, 1.7]);
  const backgroundY = useTransform(scrollY, [0, 800], [0, 90]);

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:min-h-[94vh] lg:pt-40">
      <motion.div style={{ y: backgroundY }} className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 28, -8, 0], y: [0, -18, 15, 0], scale: [1, 1.08, 0.98, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[5%] top-24 size-40 rounded-full bg-warmyellow/[0.17] blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -35, 8, 0], y: [0, 22, -12, 0], scale: [1, 0.96, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[3%] top-28 size-52 rounded-full bg-softred/[0.12] blur-3xl"
        />
      </motion.div>

      <div className="page-shell grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
        <motion.div variants={introContainer} initial="hidden" animate="visible" className="relative z-10">
          <motion.span variants={introItem} className="eyebrow">
            <Sparkles size={14} className="text-softred" /> {personal.role}
          </motion.span>

          <motion.h1 variants={introItem} className="text-balance max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl">
            {personal.headline}
          </motion.h1>
          <motion.p variants={introItem} className="mt-6 max-w-2xl text-balance text-xl font-semibold leading-8 text-ink/80 sm:text-2xl">
            {personal.subheadline}
          </motion.p>
          <motion.p variants={introItem} className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {personal.intro}
          </motion.p>

          <motion.div variants={introItem} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#projects" className="btn-primary group">
              View My Work <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={personal.cvPath} download className="btn-secondary group">
              Download CV <Download size={17} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div variants={introItem} className="mt-9 flex items-center gap-3 text-sm text-muted">
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="inline-flex size-9 items-center justify-center rounded-full border border-line bg-paper"
            >
              <ArrowDown size={16} />
            </motion.span>
            <span>Scroll to explore my backend, full-stack, and data work.</span>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: photoY, rotate: photoRotate }} className="relative mx-auto w-full max-w-[510px] lg:mx-0 lg:ml-auto">
          <motion.div
            animate={{ rotate: [-6, -2, -6], y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-3 top-9 hidden h-24 w-24 rounded-[2rem] bg-warmyellow sm:block"
          />
          <motion.div
            animate={{ rotate: [6, 10, 6], y: [0, 8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 bottom-12 hidden h-28 w-28 rounded-full bg-peach/80 sm:block"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[2.25rem] border border-line bg-paper p-3 shadow-soft sm:p-4"
          >
            <div className="paper-grid relative overflow-hidden rounded-[1.8rem] bg-blush">
              <img
                src={personal.profileImage}
                alt="Hanna Oktaviana Putri"
                className="aspect-[4/5] w-full object-cover object-center transition duration-700 hover:scale-[1.025]"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/[0.10] via-transparent to-white/[0.10]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, y: 12 }}
            animate={{ opacity: 1, x: 0, y: [0, -7, 0] }}
            transition={{ opacity: { delay: 0.55, duration: 0.5 }, x: { delay: 0.55, duration: 0.5 }, y: { delay: 1.1, duration: 3.2, repeat: Infinity, ease: 'easeInOut' } }}
            className="glass-panel absolute -bottom-5 right-0 rounded-3xl p-4 shadow-card sm:-right-7 sm:bottom-7"
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">Focused on</p>
            <p className="mt-1 font-black tracking-[-0.02em] text-ink">Backend • Full-Stack • Data</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20, rotate: -4 }}
            animate={{ opacity: 1, x: 0, rotate: [-3, 1, -3] }}
            transition={{ opacity: { delay: 0.75, duration: 0.45 }, x: { delay: 0.75, duration: 0.45 }, rotate: { delay: 1.2, duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
            className="glass-panel absolute -left-6 bottom-28 hidden rounded-2xl px-4 py-3 shadow-card sm:block"
          >
            <div className="flex items-center gap-2 text-xs font-black text-ink/80">
              <ServerCog size={15} className="text-softred" /> Backend-first thinking
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -9, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 top-20 hidden rounded-2xl border border-line bg-paper/85 p-3 text-ink shadow-card backdrop-blur sm:block"
          >
            <div className="flex gap-2">
              <Braces size={16} className="text-softred" />
              <Database size={16} className="text-warmyellow" />
            </div>
          </motion.div>

          <div className="absolute -left-8 -top-8 hidden w-36 -rotate-6 opacity-70 md:block">
            <PlayfulDoodle />
          </div>
          <motion.p
            animate={{ rotate: [6, 4, 6], y: [0, -3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="handwritten absolute -right-1 -top-8 hidden text-lg text-softred sm:block"
          >
            build • debug • improve ✦
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
