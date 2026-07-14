import { type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { GitBranch, Briefcase, Mail, MessageCircle, Send } from 'lucide-react'

const socialLinks = [
  { label: 'GitHub', icon: GitBranch, href: 'https://github.com' },
  { label: 'LinkedIn', icon: Briefcase, href: 'https://linkedin.com' },
  { label: 'Email', icon: Mail, href: 'mailto:hello@example.com' },
  { label: 'Twitter / X', icon: MessageCircle, href: 'https://twitter.com' },
]

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    console.log({
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    })
  }

  return (
    <section
      id="contact"
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
            Get In Touch
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

        {/* ── Intro text ── */}
        <motion.p
          className="text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
        >
          Have a project in mind or just want to say hi? I&apos;d love to hear
          from you.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* ── Form ── */}
          <motion.form
            className="lg:col-span-3 space-y-5"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-200 placeholder-zinc-500 text-sm outline-none transition-all duration-300 focus:border-orange-500/50 focus:shadow-[0_0_16px_rgba(255,80,20,0.12)]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-200 placeholder-zinc-500 text-sm outline-none transition-all duration-300 focus:border-orange-500/50 focus:shadow-[0_0_16px_rgba(255,80,20,0.12)]"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-200 placeholder-zinc-500 text-sm outline-none resize-none transition-all duration-300 focus:border-orange-500/50 focus:shadow-[0_0_16px_rgba(255,80,20,0.12)]"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold text-sm transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_24px_rgba(255,80,20,0.45)] active:scale-95"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>

          {/* ── Social links ── */}
          <motion.div
            className="lg:col-span-2 flex flex-row lg:flex-col items-start gap-4 lg:pt-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          >
            <p className="text-sm text-zinc-500 mb-1 hidden lg:block">
              Connect with me
            </p>
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-zinc-400 transition-all duration-300 hover:text-orange-400 hover:scale-105"
                  title={link.label}
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900/60 border border-zinc-800 transition-all duration-300 hover:border-orange-400/40 hover:bg-orange-500/10 hover:shadow-[0_0_16px_rgba(255,80,20,0.12)]">
                    <Icon size={17} />
                  </span>
                  <span className="text-sm hidden lg:inline">{link.label}</span>
                </a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
