import {
  BarChart3,
  BookOpenText,
  Boxes,
  BrainCircuit,
  CakeSlice,
  Database,
  Image,
  PackageCheck,
  PawPrint,
  Search,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';

function BrowserDots() {
  return (
    <div className="flex gap-1.5">
      <span className="size-2 rounded-full bg-softred" />
      <span className="size-2 rounded-full bg-warmyellow" />
      <span className="size-2 rounded-full bg-white/50" />
    </div>
  );
}

export default function ProjectVisual({ type }) {
  if (type === 'peri') {
    return (
      <div className="relative h-56 overflow-hidden rounded-[1.6rem] bg-[#2E2A27] p-5 text-white">
        <div className="flex items-center justify-between"><BrowserDots /><PackageCheck size={19} className="text-warmyellow" /></div>
        <div className="mt-5 grid grid-cols-[.65fr_1.35fr] gap-3">
          <div className="rounded-2xl bg-white/[0.08] p-3">
            <div className="h-2 w-12 rounded bg-white/40" />
            <div className="mt-4 space-y-2">
              {[0, 1, 2].map((item) => (
                <motion.div key={item} animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 2.2, delay: item * 0.25, repeat: Infinity }} className={`h-7 rounded-lg ${item === 2 ? 'bg-softred/[0.35]' : 'bg-white/10'}`} />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity }} className="h-14 rounded-xl bg-white/10" />
              <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 3.4, repeat: Infinity }} className="h-14 rounded-xl bg-warmyellow/30" />
              <div className="h-14 rounded-xl bg-white/10" />
            </div>
            <div className="rounded-2xl bg-white/[0.08] p-3"><BarChart3 size={42} className="text-warmyellow" /><div className="mt-2 h-2 w-4/5 rounded bg-white/25" /><div className="mt-2 h-2 w-2/3 rounded bg-white/[0.15]" /></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'moonrin') {
    return (
      <div className="relative h-56 overflow-hidden rounded-[1.6rem] bg-[#211E2A] p-5 text-white">
        <div className="flex items-center justify-between"><BrowserDots /><BookOpenText className="text-peach" size={20} /></div>
        <div className="mt-4 grid grid-cols-[1fr_.58fr] gap-3">
          <div className="rounded-2xl bg-white/[0.07] p-3">
            <div className="flex items-center gap-2 rounded-full bg-white/[0.08] px-3 py-2 text-white/40"><Search size={12} /><div className="h-1.5 w-16 rounded bg-white/20" /></div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <motion.div key={item} animate={{ y: [0, item % 2 ? 3 : -3, 0] }} transition={{ duration: 3.2 + item * 0.1, repeat: Infinity }} className="aspect-[3/4] rounded-lg bg-gradient-to-br from-softred/45 via-peach/25 to-warmyellow/25" />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-10 rounded-xl bg-softred/25" />
            <div className="h-10 rounded-xl bg-white/[0.08]" />
            <div className="h-10 rounded-xl bg-white/[0.08]" />
            <motion.div animate={{ opacity: [0.55, 1, 0.55] }} transition={{ duration: 2.4, repeat: Infinity }} className="h-16 rounded-xl bg-warmyellow/20" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'oldstore') {
    return (
      <div className="relative h-56 overflow-hidden rounded-[1.6rem] bg-[#ECE8E0] p-5 text-ink">
        <div className="flex items-center justify-between"><ShoppingBag className="text-softred" /><span className="rounded-full bg-paper px-3 py-1 text-[10px] font-black uppercase tracking-widest text-muted">shoe store</span></div>
        <div className="mt-4 grid grid-cols-[1.25fr_.75fr] gap-3">
          <div className="rounded-2xl border border-white bg-paper/80 p-3 shadow-sm">
            <div className="grid grid-cols-2 gap-2">
              {[0, 1, 2, 3].map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.04 }} className="rounded-xl bg-blush p-2">
                  <div className="h-12 rounded-lg bg-ink/[0.10]" />
                  <div className="mt-2 h-1.5 w-10 rounded bg-ink/20" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity }} className="flex h-14 items-center justify-center rounded-2xl bg-softred/20"><ShoppingBag size={22} className="text-softred" /></motion.div>
            <div className="flex h-14 items-center justify-center rounded-2xl bg-warmyellow/25"><PackageCheck size={22} /></div>
            <div className="h-10 rounded-xl bg-ink/[0.08]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'bakery') {
    return (
      <div className="relative h-56 overflow-hidden rounded-[1.6rem] bg-[#F7E4D7] p-5 text-ink">
        <div className="flex items-center justify-between"><CakeSlice className="text-softred" /><span className="handwritten text-sm text-softred">freshly coded ✦</span></div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((item) => (
            <motion.div key={item} animate={{ y: [0, item === 1 ? -6 : 4, 0], rotate: [0, item === 1 ? 1 : -1, 0] }} transition={{ duration: 4 + item * 0.4, repeat: Infinity, ease: 'easeInOut' }} className="rounded-[1.3rem] border border-white/80 bg-paper/75 p-3 shadow-sm">
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-warmyellow/20"><CakeSlice size={28} className="text-softred/80" /></div>
              <div className="mt-3 h-2 w-4/5 rounded bg-ink/[0.14]" />
              <div className="mt-2 h-2 w-1/2 rounded bg-ink/[0.08]" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'gallery') {
    return (
      <div className="relative h-56 overflow-hidden rounded-[1.6rem] bg-blush p-5">
        <div className="flex items-center justify-between"><PawPrint className="text-softred" /><span className="rounded-full bg-paper px-3 py-1 text-[10px] font-black uppercase tracking-widest text-muted">MVC gallery</span></div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <motion.div whileHover={{ y: -4, rotate: item % 2 ? 1 : -1 }} key={item} className="flex aspect-square items-center justify-center rounded-2xl border border-white/80 bg-paper/75 shadow-sm">
              {item % 2 === 0 ? <PawPrint size={24} className="text-softred/70" /> : <Image size={24} className="text-warmyellow" />}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'cocoa') {
    return (
      <div className="relative h-56 overflow-hidden rounded-[1.6rem] bg-[#F4E2C8] p-5">
        <div className="flex items-center justify-between"><BrainCircuit className="text-ink" /><span className="text-xs font-black text-ink/60">MobileNetV3-Large</span></div>
        <div className="relative mt-7 flex items-center justify-center gap-3">
          <motion.div animate={{ rotate: [-12, -7, -12] }} transition={{ duration: 4, repeat: Infinity }} className="h-28 w-20 rounded-[48%_52%_45%_55%] bg-[#70513D] shadow-lg"><div className="mx-auto mt-5 h-16 w-1 rounded-full bg-[#A98467]" /></motion.div>
          <motion.div animate={{ y: [0, -7, 0], rotate: [8, 11, 8] }} transition={{ duration: 4.5, repeat: Infinity }} className="h-32 w-24 rounded-[50%_50%_44%_56%] bg-[#8A634A] shadow-lg"><div className="mx-auto mt-6 h-20 w-1 rounded-full bg-[#C19A7D]" /></motion.div>
          <motion.div animate={{ rotate: [17, 12, 17] }} transition={{ duration: 4, repeat: Infinity }} className="h-24 w-16 rounded-[50%_50%_45%_55%] bg-[#5A4032] shadow-lg"><div className="mx-auto mt-4 h-14 w-1 rounded-full bg-[#8E6C55]" /></motion.div>
        </div>
        <motion.div animate={{ rotate: [0, 15, 0], scale: [1, 1.15, 1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute right-7 top-16"><Sparkles className="text-softred" size={18} /></motion.div>
      </div>
    );
  }

  return (
    <div className="relative h-56 overflow-hidden rounded-[1.6rem] bg-[#EAE6DE] p-5">
      <div className="flex items-center justify-between"><Search className="text-softred" /><Database size={19} className="text-ink/70" /></div>
      <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} className="mt-5 rounded-2xl border border-white/80 bg-paper/[0.85] p-4 shadow-card">
        <div className="grid grid-cols-[1fr_.7fr_.55fr] gap-2 border-b border-line pb-2 text-[9px] font-black uppercase tracking-widest text-muted"><span>Lead</span><span>Category</span><span>Status</span></div>
        {[0, 1, 2, 3].map((row) => (
          <div key={row} className="grid grid-cols-[1fr_.7fr_.55fr] items-center gap-2 border-b border-line/70 py-2 last:border-0">
            <motion.span animate={{ opacity: [0.35, 0.8, 0.35] }} transition={{ duration: 2.2, delay: row * 0.18, repeat: Infinity }} className="h-2 rounded bg-ink/[0.15]" />
            <span className="h-2 rounded bg-warmyellow/[0.35]" /><span className="h-5 rounded-full bg-softred/[0.15]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
