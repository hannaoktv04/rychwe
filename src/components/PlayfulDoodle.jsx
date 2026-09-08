import { motion } from 'framer-motion';

export default function PlayfulDoodle({ className = '' }) {
  const pathTransition = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

  return (
    <motion.svg
      className={className}
      viewBox="0 0 180 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.path
        d="M18 72C45 52 64 85 88 64C110 45 132 50 158 27"
        stroke="#282522"
        strokeWidth="4"
        strokeLinecap="round"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={pathTransition}
      />
      <motion.path
        d="M23 83C53 67 71 98 98 76"
        stroke="#D9655A"
        strokeWidth="5"
        strokeLinecap="round"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ ...pathTransition, delay: 0.15 }}
      />
      <motion.circle
        cx="147"
        cy="84"
        r="12"
        fill="#E7B84B"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        transition={{ delay: 0.55, type: 'spring', stiffness: 180 }}
      />
      <motion.path
        d="M133 19L137 29L148 31L139 38L141 49L133 43L124 49L127 38L118 31L129 29L133 19Z"
        fill="#F2B5A4"
        variants={{ hidden: { scale: 0, rotate: -20 }, visible: { scale: 1, rotate: 0 } }}
        transition={{ delay: 0.45, type: 'spring', stiffness: 180 }}
      />
      <motion.path
        d="M56 19C61 10 73 9 81 15"
        stroke="#282522"
        strokeWidth="4"
        strokeLinecap="round"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
        transition={{ ...pathTransition, delay: 0.2 }}
      />
      <motion.path
        d="M92 17C102 9 112 11 117 20"
        stroke="#282522"
        strokeWidth="4"
        strokeLinecap="round"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
        transition={{ ...pathTransition, delay: 0.3 }}
      />
    </motion.svg>
  );
}
