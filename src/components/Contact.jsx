export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-blue-300 font-mono text-sm mb-4">03. What&apos;s Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get In Touch
        </h2>
        <p className="text-slate-400 leading-relaxed mb-10">
          I&apos;m currently looking for new opportunities and would love to hear
          from you. Whether you have a question, an idea, or just want to say hi,
          my inbox is always open.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:jia.mich@northeastern.edu"
            className="px-8 py-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors font-mono text-sm"
          >
            Say Hello
          </a>
          <a
            href="https://github.com/michael-d-jia"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-md border border-slate-700 text-slate-200 hover:border-blue-300 hover:text-blue-300 transition-colors font-mono text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/micha-jia"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-md border border-slate-700 text-slate-200 hover:border-blue-300 hover:text-blue-300 transition-colors font-mono text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
