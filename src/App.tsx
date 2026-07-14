import { Scene } from './three'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Scene />
      </div>

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
