import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <SectionHeading number="02" title="Where I've Worked" />
        </Reveal>
        <ol className="relative border-l border-border ml-2 md:ml-3">
          {experience.map((role, i) => (
            <Reveal
              key={role.period + role.title}
              delay={i * 80}
            >
              <li className="relative pl-8 md:pl-10 pb-12 last:pb-0">
                <span
                  className={`absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full ring-4 ring-bg ${
                    role.upcoming ? 'bg-accent' : 'bg-text-dim'
                  }`}
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="text-lg font-semibold text-text">
                    {role.title}{' '}
                    <span className="text-accent-soft">@ {role.company}</span>
                  </h3>
                  {role.upcoming && (
                    <span className="px-2 py-0.5 rounded-full bg-accent/15 text-accent-soft font-mono text-[10px] uppercase tracking-wider">
                      Upcoming
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs text-text-dim mb-3">
                  {role.period} · {role.location}
                </p>
                <ul className="space-y-1.5 text-text-muted text-sm leading-relaxed">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-accent-soft mt-0.5 shrink-0">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
