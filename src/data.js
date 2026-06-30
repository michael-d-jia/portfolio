export const profile = {
  name: 'Michael Jia',
  tagline: 'I build full-stack apps and explore machine learning.',
  location: 'Boston, MA',
  status: 'Looking for Summer 2027 internships',
  // The short paragraph under your name in the website hero.
  // The `status` line above is automatically appended to it.
  heroIntro:
    'CS + Math student at Northeastern University. Software engineering intern at TurboTides, joining Mastercam as a SWE co-op this July.',
  // The bio paragraphs. Shown in the website About section AND the terminal's
  // `about` command. Each string is its own paragraph.
  about: [
    "Hi! I'm Michael, a Computer Science major (minor in Math) at Northeastern University in Boston. I like turning ideas into clean, performant software — especially when it touches databases, APIs, or machine learning.",
    "I'm currently a Software Engineering Intern at TurboTides, where I rebuilt the company's license generation workflow as a multi-user FastAPI + PostgreSQL web app, reverse-engineered legacy C# HMAC-SHA512 signing logic in Python, and wrote the team's first automated database tests. On the side, I've built a reinforcement-learning market-making agent and a Discord-based personal automation bot running on AWS.",
    "This July I'm joining Mastercam as a software engineering co-op through December. I'm currently looking for Summer 2027 internships (and Fall 2027 co-ops).",
  ],
  // Any phrase listed here is highlighted (indigo) wherever it appears in the
  // About paragraphs. Add or remove phrases freely.
  highlights: ['TurboTides', 'Mastercam', 'Summer 2027 internships'],
}

export const skills = [
  'Python',
  'Java',
  'JavaScript',
  'SQL / PostgreSQL',
  'FastAPI',
  'TensorFlow / Keras',
  'NumPy',
  'AWS (EC2, RDS)',
  'Docker',
  'Git',
]

export const experience = [
  {
    period: 'Jul 2026 — Dec 2026',
    company: 'Mastercam',
    title: 'Software Engineering Co-op',
    location: 'Remote',
    upcoming: true,
    points: [
      'Building API integrations and internal tooling for the CAD/CAM platform.',
    ],
  },
  {
    period: 'Jan 2026 — Jun 2026',
    company: 'TurboTides',
    title: 'Software Engineering Intern · Part-time',
    location: 'Remote',
    points: [
      'Continued development on the licensing platform part-time while in school.',
    ],
  },
  {
    period: 'Jun 2025 — Sep 2025',
    company: 'TurboTides',
    title: 'Software Engineering Intern',
    location: 'Remote',
    points: [
      'Rebuilt the license generation workflow as a multi-user FastAPI + PostgreSQL web app.',
      'Reverse-engineered legacy C# HMAC-SHA512 signing logic in Python.',
      "Wrote the team's first automated database tests.",
    ],
  },
]

export const projects = [
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

export const contact = {
  email: 'jia.mich@northeastern.edu',
  github: 'https://github.com/michael-d-jia',
  linkedin: 'https://www.linkedin.com/in/micha-jia',
  resume: '/resume.pdf',
}
