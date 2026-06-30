import Magnetic from './Magnetic'
import { profile } from '../data'

export default function Hero() {
  return (
    <section id="hero" className="px-6 pt-36 pb-24 md:pt-44 md:pb-28">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-accent-soft font-mono text-sm mb-6">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-text tracking-tighter mb-4">
          {profile.name}.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-text-dim tracking-tight mb-8 max-w-3xl">
          {profile.tagline}
        </h2>
        <p className="text-text-muted max-w-xl text-lg leading-relaxed mb-10">
          {profile.heroIntro} {profile.status}.
        </p>
        <div className="flex flex-wrap gap-4">
          <Magnetic>
            <a
              href="#projects"
              className="inline-block px-6 py-3 rounded-md bg-accent text-white hover:bg-accent/85 transition-colors font-mono text-sm"
            >
              See my work
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-md border border-border text-text-muted hover:border-accent/60 hover:text-accent-soft transition-colors font-mono text-sm"
            >
              Get in touch
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  )
}
