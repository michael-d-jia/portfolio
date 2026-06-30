import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import CursorGlow from './CursorGlow'

export default function Site({ onEnterTerminal }) {
  return (
    <div className="relative">
      <div className="grid-bg pointer-events-none fixed inset-0 z-0 h-[600px]" />
      <CursorGlow />
      <div className="relative z-10">
        <Navbar onEnterTerminal={onEnterTerminal} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
