import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';

export default function TechMarquee() {
  const items = [...portfolio.skillTicker, ...portfolio.skillTicker];

  return (
    <div className="overflow-hidden border-y border-line/80 bg-paper/60 py-4 backdrop-blur-sm">
      <motion.div
        className="flex w-max items-center gap-3"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-3 pl-3">
            <span className="rounded-full border border-line bg-cream px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-ink/75">
              {item}
            </span>
            <span className="size-1.5 rounded-full bg-softred/70" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
