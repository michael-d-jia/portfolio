const skills = [
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

export default function About() {
  return (
    <section id="about" className="pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          <span className="text-blue-300 font-mono mr-3">01.</span>
          About Me
        </h2>
        <div className="h-px bg-slate-800 mb-10" />
        <div className="max-w-3xl space-y-4 text-slate-300 leading-relaxed">
          <p>
            Hi! I&apos;m Michael, a Computer Science major (minor in Math) at
            Northeastern University in Boston. I like turning ideas into clean,
            performant software — especially when it touches databases, APIs,
            or machine learning.
          </p>
          <p>
            I&apos;m currently a Software Engineering Intern at{' '}
            <span className="text-blue-300">TurboTides</span>, where I rebuilt
            the company&apos;s license generation workflow as a multi-user
            FastAPI + PostgreSQL web app, reverse-engineered legacy C#
            HMAC-SHA512 signing logic in Python, and wrote the team&apos;s
            first automated database tests. On the side, I&apos;ve built a
            reinforcement-learning market-making agent and a Discord-based
            personal automation bot running on AWS.
          </p>
          <p>
            This July I&apos;m joining{' '}
            <span className="text-blue-300">Mastercam</span> as a software
            engineering co-op through December. I&apos;m currently looking for{' '}
            <span className="text-white font-medium">
              Summer 2027 internships
            </span>{' '}
            (and Fall 2027 co-ops). A few technologies I&apos;ve been using
            lately:
          </p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm pt-2">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="text-blue-300">▹</span>
                <span className="text-slate-300">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
