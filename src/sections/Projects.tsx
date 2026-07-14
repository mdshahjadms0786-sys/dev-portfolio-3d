import { type MouseEvent } from 'react'
import { type Variants } from 'framer-motion'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'

interface Project {
  title: string
  description: string
  techTags: string[]
  liveUrl?: string
  githubUrl?: string
  gradient: string
}

const projects: Project[] = [
  {
    title: 'HabitFlow',
    description:
      'A production-ready habit tracker SaaS built with React, Vite, and Supabase. Features authentication, real-time habit tracking, and mobile support via Capacitor. Deployed on Vercel with CI/CD.',
    techTags: ['React', 'Vite', 'Supabase', 'Tailwind CSS'],
    liveUrl: 'https://habit-tracker-phi-ruddy.vercel.app',
    githubUrl: 'https://github.com',
    gradient: 'from-orange-600/30 via-red-500/20 to-amber-600/30',
  },
  {
    title: 'Zerodha Clone',
    description:
      'A full-stack clone of the Zerodha trading platform, featuring a React frontend and Node.js backend with proper component architecture.',
    techTags: ['React', 'Node.js', 'Express'],
    gradient: 'from-blue-600/30 via-purple-500/20 to-pink-600/30',
  },
]

function ProjectCard({ project }: { project: Project }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const springX = useSpring(mx, { stiffness: 200, damping: 20 })
  const springY = useSpring(my, { stiffness: 200, damping: 20 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(x)
    my.set(y)
  }

  const handleMouseLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)

  return (
    <motion.div
      className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden"
      style={
        isTouchDevice
          ? {}
          : {
              rotateX,
              rotateY,
              perspective: 1100,
              transformStyle: 'preserve-3d',
            }
      }
      onMouseMove={isTouchDevice ? undefined : handleMouseMove}
      onMouseLeave={isTouchDevice ? undefined : handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* ── Gradient placeholder ── */}
      <div
        className={`w-full aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
      >
        <span className="text-2xl sm:text-3xl font-bold text-white/20 select-none">
          {project.title}
        </span>
      </div>

      {/* ── Card body ── */}
      <div className="p-5 lg:p-6 space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 rounded-full text-xs font-medium text-orange-300 bg-orange-500/10 border border-orange-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,80,20,0.4)] active:scale-95"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-600 text-zinc-200 text-sm font-semibold transition-all duration-300 hover:border-orange-400/60 hover:text-orange-300 hover:scale-105 hover:shadow-[0_0_16px_rgba(255,80,20,0.15)] active:scale-95"
            >
              <GitBranch size={15} />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 lg:px-20 py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Heading ── */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Projects
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

        {/* ── Project grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
