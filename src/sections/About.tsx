import { type Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import {
  Code2,
  Server,
  Database,
  Zap,
  Globe,
  Shield,
  GitBranch,
  FileCode,
  Layout,
} from 'lucide-react'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string; size?: number }>
}

interface SkillCategory {
  title: string
  categoryIcon: React.ComponentType<{ className?: string; size?: number }>
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    categoryIcon: Layout,
    skills: [
      { name: 'React', icon: FileCode },
      { name: 'TypeScript', icon: Code2 },
      { name: 'Tailwind CSS', icon: Globe },
      { name: 'Framer Motion', icon: Zap },
    ],
  },
  {
    title: 'Backend',
    categoryIcon: Server,
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express', icon: FileCode },
    ],
  },
  {
    title: 'Database',
    categoryIcon: Database,
    skills: [
      { name: 'Supabase', icon: Database },
      { name: 'PostgreSQL', icon: Database },
    ],
  },
  {
    title: 'Tools & Other',
    categoryIcon: Zap,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Vite', icon: Zap },
      { name: 'DSA (C++)', icon: Code2 },
      { name: 'Cybersecurity Basics', icon: Shield },
    ],
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 lg:px-20 py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Heading ── */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            About Me
          </h2>
          <motion.div
            className="h-1 w-20 rounded-full mt-3"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,80,20,0.8), rgba(255,80,20,0.2))',
            }}
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          />
        </motion.div>

        {/* ── Bio ── */}
        <motion.p
          className="text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          I&apos;m a self-taught developer on the path to becoming a full-stack
          engineer, with a growing interest in cybersecurity. I enjoy building
          real-world projects — from SaaS habit trackers to trading platform
          clones — and I&apos;m currently strengthening my foundations in DSA
          and system design while exploring ethical hacking through platforms
          like TryHackMe and HackTheBox.
        </motion.p>

        {/* ── Skills ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.categoryIcon

            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 lg:p-6"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400">
                    <CategoryIcon size={18} />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon

                    return (
                      <motion.span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-200 bg-zinc-800/60 border border-zinc-700/50 transition-all duration-300 cursor-default hover:scale-105 hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-orange-300 hover:shadow-[0_0_16px_rgba(255,80,20,0.15)]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        <SkillIcon size={14} />
                        {skill.name}
                      </motion.span>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
