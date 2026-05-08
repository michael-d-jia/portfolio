const projects = [
  {
    title: 'RL Market Maker',
    description:
      'Simulated limit order book environment built from scratch to train a reinforcement-learning agent on optimal bid-ask pricing. MDP formulation with Q-learning and DQN, evaluated against a random baseline over 1,000 episodes. Led a team of 3.',
    tech: ['Python', 'OpenAI Gym', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/michael-d-jia/rl-market-maker',
  },
  {
    title: 'Personal Automation Agent',
    description:
      'Discord bot deployed as a systemd service on AWS EC2 that automates technical interview prep and academic task tracking. Gemini API parses syllabus PDFs into SQLite tasks; a daily cron generates type-hinted LeetCode starter files and commits them to GitHub.',
    tech: ['Python', 'SQLite', 'Discord.py', 'Gemini API', 'AWS EC2'],
    github: 'https://github.com/michael-d-jia/openclaw',
  },
  {
    title: 'Pathfinding Visualizer',
    description:
      'Interactive pathfinding algorithm visualizer — compare BFS, DFS, Dijkstra, and A* in real time on a weighted grid with maze generation.',
    tech: ['JavaScript', 'React', 'Vite'],
    github: 'https://github.com/michael-d-jia/pathfinding-visualizer',
  },
]

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
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          <span className="text-blue-300 font-mono mr-3">02.</span>
          Some Things I&apos;ve Built
        </h2>
        <div className="h-px bg-slate-800 mb-10" />
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <li
              key={project.title}
              className="group flex flex-col p-6 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-blue-400/40 hover:-translate-y-1 transition-all"
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
                  className="w-10 h-10 text-blue-300"
                  aria-hidden="true"
                >
                  <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
                </svg>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="text-slate-400 hover:text-blue-300 transition-colors"
                >
                  <GithubIcon />
                </a>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-4 font-mono text-xs text-slate-500">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
