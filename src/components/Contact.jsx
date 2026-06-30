import Reveal from './Reveal'
import Magnetic from './Magnetic'
import { contact } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <Reveal>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent-soft font-mono text-sm mb-4">
            04. What&apos;s Next?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-text-muted leading-relaxed mb-10">
            I&apos;m currently looking for new opportunities and would love to
            hear from you. Whether you have a question, an idea, or just want to
            say hi, my inbox is always open.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Magnetic>
              <a
                href={`mailto:${contact.email}`}
                className="inline-block px-8 py-4 rounded-md bg-accent text-white hover:bg-accent/85 transition-colors font-mono text-sm"
              >
                Say Hello
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-md border border-border text-text-muted hover:border-accent/60 hover:text-accent-soft transition-colors font-mono text-sm"
              >
                GitHub
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-md border border-border text-text-muted hover:border-accent/60 hover:text-accent-soft transition-colors font-mono text-sm"
              >
                LinkedIn
              </a>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
