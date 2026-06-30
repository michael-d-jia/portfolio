import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { profile, skills } from '../data'

function highlight(text, terms) {
  if (!terms || terms.length === 0) return text
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const re = new RegExp(`(${escaped.join('|')})`, 'g')
  return text.split(re).map((part, i) =>
    terms.includes(part) ? (
      <span key={i} className="text-accent-soft">
        {part}
      </span>
    ) : (
      part
    )
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <SectionHeading number="01" title="About Me" />
        </Reveal>
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <Reveal delay={100}>
            <div className="space-y-4 text-text-muted leading-relaxed">
              {profile.about.map((para, i) => (
                <p key={i}>{highlight(para, profile.highlights)}</p>
              ))}
              <p>A few technologies I&apos;ve been using lately:</p>
              <ul className="flex flex-wrap gap-2 pt-1">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 rounded-full border border-border text-text-muted font-mono text-xs hover:border-accent/50 hover:text-accent-soft transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={200} className="order-first md:order-last">
            <div
              className="w-44 h-44 md:w-52 md:h-52 rounded-2xl ring-1 ring-border grayscale hover:grayscale-0 transition-all duration-300"
              style={{
                background:
                  'url("/me.jpg") center/cover no-repeat, linear-gradient(to bottom right, #6366f1, #141414)',
              }}
              aria-label="Michael Jia"
              role="img"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
