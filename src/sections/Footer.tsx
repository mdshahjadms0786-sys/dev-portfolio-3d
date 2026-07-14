import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800/60 px-6 lg:px-20 py-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="text-sm text-zinc-500">
          &copy; {year} Md Shahjad. All rights reserved.
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-all duration-300 cursor-pointer hover:text-orange-400 hover:scale-105"
        >
          <ArrowUp size={16} />
          <span className="hidden sm:inline">Back to top</span>
        </button>
      </div>
    </footer>
  )
}
