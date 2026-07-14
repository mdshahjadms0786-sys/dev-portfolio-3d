import { type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import profileSrc from '../assets/profile.png'

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0)

const orbBaseTransition = {
  repeat: Infinity,
  ease: 'easeInOut' as const,
}

function GlowOrb({
  size,
  positions,
  delay,
  duration,
}: {
  size: string
  positions: string
  delay: number
  duration: number
}) {
  return (
    <motion.div
      className={`absolute z-0 ${size} ${positions}`}
      style={{
        background:
          'radial-gradient(circle, rgba(255,80,20,0.3), rgba(200,40,0,0.1) 40%, transparent 70%)',
        filter: 'blur(60px)',
      }}
      animate={{ y: [0, -24, 0], x: [0, 16, 0] }}
      transition={{ ...orbBaseTransition, delay, duration }}
    />
  )
}

export default function PhotoCard() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const springX = useSpring(mx, { stiffness: 150, damping: 15 })
  const springY = useSpring(my, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [25, -25])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-25, 25])

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

  const touch = isTouchDevice()

  console.log('[PhotoCard] profile image path:', profileSrc)

  return (
    <div className="relative flex items-center justify-center">
      <GlowOrb size="w-72 h-72" positions="-top-24 -left-24" delay={0} duration={7} />
      <GlowOrb size="w-80 h-80" positions="-bottom-28 -right-20" delay={1.5} duration={9} />
      <GlowOrb
        size="w-56 h-56"
        positions="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        delay={0.8}
        duration={6}
      />

      <div className="relative z-10">
        <motion.div
          className="w-72 sm:w-80 rounded-3xl p-[2px] bg-gradient-to-br from-orange-600/35 via-red-500/25 to-amber-700/15"
          style={
            touch
              ? {}
              : {
                  rotateX,
                  rotateY,
                  perspective: 900,
                  transformStyle: 'preserve-3d',
                }
          }
          onMouseMove={touch ? undefined : handleMouseMove}
          onMouseLeave={touch ? undefined : handleMouseLeave}
          animate={{ y: [0, -8, 0] }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.3,
            },
          }}
        >
          <div
            className="w-full rounded-[22px] overflow-hidden"
            style={{
              boxShadow:
                '0 0 18px rgba(255,70,10,0.25), 0 0 45px rgba(200,40,0,0.12), 0 0 80px rgba(150,30,0,0.06)',
            }}
          >
            <img
              src={profileSrc}
              alt="Profile"
              className="w-full h-full aspect-[3/4] object-cover block select-none rounded-[22px]"
              draggable={false}
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
