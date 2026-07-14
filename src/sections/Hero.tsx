import { type Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import PhotoCard from '../components/PhotoCard'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const nameWords = ['Md', 'Shahjad']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 py-20 overflow-hidden"
    >
      <motion.div
        className="w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Left Column: Text ── */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <motion.div variants={itemVariants}>
            <span className="inline-block text-xs sm:text-sm px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 tracking-wider uppercase font-semibold">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            variants={itemVariants}
          >
            {nameWords.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-3 sm:mr-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: 'easeOut',
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            variants={itemVariants}
          >
            Building scalable web experiences, with a growing focus on
            cybersecurity
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
            variants={itemVariants}
          >
            <button
              type="button"
              className="px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_24px_rgba(255,80,20,0.45)] active:scale-95"
            >
              View Projects
            </button>
            <button
              type="button"
              className="px-6 py-3 rounded-xl border border-zinc-600 text-zinc-200 font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer hover:border-orange-400/60 hover:text-orange-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,80,20,0.15)] active:scale-95"
            >
              Download Resume
            </button>
          </motion.div>
        </div>

        {/* ── Right Column: PhotoCard ── */}
        <motion.div variants={itemVariants} className="flex-shrink-0">
          <PhotoCard />
        </motion.div>
      </motion.div>

      {/* ── Scroll-down indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="w-4 h-4 text-zinc-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
