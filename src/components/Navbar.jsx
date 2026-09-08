import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <motion.nav
        aria-label="Primary navigation"
        animate={{
          maxWidth: scrolled ? 1080 : 1180,
          y: scrolled ? 0 : 2,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto rounded-full border px-4 transition-colors duration-300 sm:px-5 ${
          scrolled
            ? 'border-line/90 bg-paper/90 py-2.5 shadow-card backdrop-blur-xl'
            : 'border-transparent bg-transparent py-3.5'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="group inline-flex items-end gap-1 text-xl font-black tracking-[-0.04em] text-ink">
            Hanna
            <motion.span
              className="text-softred"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.2 }}
            >
              .
            </motion.span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-blush hover:text-ink"
              >
                {link}
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary py-2.5">
              Let&apos;s Connect <ArrowUpRight size={16} />
            </a>
          </div>

          <motion.button
            whileTap={{ scale: 0.92 }}
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-paper text-ink lg:hidden"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-page rounded-3xl border border-line bg-paper/95 p-3 shadow-soft backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-1">
              {links.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-muted transition hover:bg-blush hover:text-ink"
                >
                  {link}
                </motion.a>
              ))}
            </div>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              Let&apos;s Connect <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
