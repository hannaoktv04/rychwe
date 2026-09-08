import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="pb-8 pt-2">
      <div className="page-shell flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-semibold text-muted">Designed &amp; built by Hanna.</p>
        <motion.p animate={{ y: [0, -3, 0], rotate: [0, 2, 0] }} transition={{ duration: 2.8, repeat: Infinity }} className="handwritten text-sm text-softred">ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</motion.p>
        <p className="text-sm text-muted">© 2026 Hanna Oktaviana Putri</p>
      </div>
    </footer>
  );
}
