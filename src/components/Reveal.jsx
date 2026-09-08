import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, className = '', direction = 'up' }) {
  const offset = {
    up: { x: 0, y: 34 },
    left: { x: -34, y: 0 },
    right: { x: 34, y: 0 },
    none: { x: 0, y: 0 },
  }[direction] || { x: 0, y: 34 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
