export default function Hero() {
  return (
    <section
      id="hero"
      className="px-6 pt-28 pb-16"
    >
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <p className="text-blue-300 font-mono text-sm mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
            Michael Jia.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 tracking-tight mb-6">
            I build full-stack apps and explore machine learning.
          </h2>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed mb-8">
            CS + Math student at Northeastern University. Currently a software
            engineering intern at TurboTides; joining Mastercam as a SWE co-op
            this July. Looking for Summer 2027 internships.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md border border-blue-300 text-blue-300 hover:bg-blue-400/10 transition-colors font-mono text-sm"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors font-mono text-sm"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div
            className="w-56 h-56 rounded-full shadow-2xl shadow-blue-500/30 ring-2 ring-blue-300/30"
            style={{
              background:
                'url("/me.jpg") center/cover no-repeat, linear-gradient(to bottom right, #60a5fa, #1e293b)',
            }}
            aria-label="Michael Jia"
            role="img"
          />
        </div>
      </div>
    </section>
  )
}
