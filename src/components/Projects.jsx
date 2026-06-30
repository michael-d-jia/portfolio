import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { projects } from '../data'

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <SectionHeading number="03" title="Some Things I've Built" />
        </Reveal>
        <ul className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <li className="gradient-border h-full">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 m-px flex h-[calc(100%-2px)] flex-col rounded-[13px] bg-bg-soft p-6 hover:bg-[#16161f] transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-9 h-9 text-accent-soft"
                      aria-hidden="true"
                    >
                      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
                    </svg>
                    <span className="text-text-dim hover:text-accent-soft transition-colors">
                      <GithubIcon />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-4 font-mono text-xs text-text-dim">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
