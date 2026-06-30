import { useEffect, useRef, useState } from 'react'
import { profile, skills, experience, projects, contact } from '../data'

const HELP = [
  ['help', 'show this list of commands'],
  ['about', 'who I am'],
  ['experience', 'where I have worked'],
  ['projects', 'things I have built'],
  ['skills', 'technologies I use'],
  ['contact', 'how to reach me'],
  ['resume', 'open my resume (PDF)'],
  ['github / linkedin', 'open my profiles'],
  ['clear', 'clear the screen'],
  ['website', 'switch to the graphical site'],
]

function Line({ children, className = '' }) {
  return <div className={`whitespace-pre-wrap leading-relaxed ${className}`}>{children}</div>
}

function Link({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-term-bright underline underline-offset-2 hover:text-white"
    >
      {children}
    </a>
  )
}

export default function Terminal({ onExit }) {
  const [history, setHistory] = useState([])
  const [booted, setBooted] = useState(false)
  const [input, setInput] = useState('')
  const [cmdLog, setCmdLog] = useState([])
  const [logIdx, setLogIdx] = useState(-1)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  const boot = [
    { t: 'dim', c: 'michael-os v2.0.1 — booting…' },
    { t: 'dim', c: 'loading profile ......... ok' },
    { t: 'dim', c: 'mounting /projects ...... ok' },
    { t: 'dim', c: 'establishing uplink ..... ok' },
    { t: 'gap' },
    { t: 'banner' },
    { t: 'gap' },
    {
      t: 'out',
      c: (
        <>
          Welcome. Type <span className="text-term-prompt">help</span> to explore, or{' '}
          <button
            onClick={onExit}
            className="text-accent-soft underline underline-offset-2 hover:text-white"
          >
            [ view as website → ]
          </button>
        </>
      ),
    },
    { t: 'gap' },
  ]

  useEffect(() => {
    let i = 0
    const timers = []
    const step = () => {
      if (i >= boot.length) {
        setBooted(true)
        return
      }
      const item = boot[i]
      setHistory((h) => [...h, item])
      i += 1
      timers.push(setTimeout(step, item.t === 'dim' ? 230 : 120))
    }
    timers.push(setTimeout(step, 250))
    return () => timers.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history, booted])

  function print(lines) {
    setHistory((h) => [...h, ...lines])
  }

  function run(raw) {
    const cmd = raw.trim().toLowerCase()
    print([{ t: 'cmd', c: raw }])
    if (!cmd) return

    setCmdLog((l) => [raw, ...l])

    switch (cmd) {
      case 'help':
        print([
          { t: 'out', c: 'available commands:' },
          ...HELP.map(([c, d]) => ({
            t: 'kv',
            k: c,
            v: d,
          })),
          { t: 'gap' },
        ])
        break
      case 'about':
      case 'whoami':
        print([
          { t: 'out', c: `${profile.name} — ${profile.location}` },
          { t: 'gap' },
          ...profile.about.map((b) => ({ t: 'out', c: b })),
          { t: 'gap' },
        ])
        break
      case 'experience':
      case 'work':
        print([
          ...experience.flatMap((r) => [
            {
              t: 'out',
              c: (
                <>
                  <span className="text-term-bright">{r.title}</span> @ {r.company}
                  {r.upcoming && <span className="text-accent-soft"> [upcoming]</span>}
                </>
              ),
            },
            { t: 'dim', c: `  ${r.period} · ${r.location}` },
            ...r.points.map((p) => ({ t: 'out', c: `  ▹ ${p}` })),
            { t: 'gap' },
          ]),
        ])
        break
      case 'projects':
        print([
          ...projects.flatMap((p, i) => [
            {
              t: 'out',
              c: (
                <>
                  <span className="text-term-prompt">{i + 1}.</span>{' '}
                  <Link href={p.github}>{p.title}</Link>
                </>
              ),
            },
            { t: 'dim', c: `  ${p.description}` },
            { t: 'dim', c: `  [ ${p.tech.join(' · ')} ]` },
            { t: 'gap' },
          ]),
        ])
        break
      case 'skills':
        print([
          { t: 'out', c: 'technologies I have been using lately:' },
          { t: 'out', c: `  ${skills.join('  ·  ')}` },
          { t: 'gap' },
        ])
        break
      case 'contact':
        print([
          {
            t: 'out',
            c: (
              <>
                email&nbsp;&nbsp;&nbsp;&nbsp;<Link href={`mailto:${contact.email}`}>{contact.email}</Link>
              </>
            ),
          },
          {
            t: 'out',
            c: (
              <>
                github&nbsp;&nbsp;&nbsp;<Link href={contact.github}>{contact.github}</Link>
              </>
            ),
          },
          {
            t: 'out',
            c: (
              <>
                linkedin&nbsp;<Link href={contact.linkedin}>{contact.linkedin}</Link>
              </>
            ),
          },
          { t: 'gap' },
        ])
        break
      case 'resume':
        window.open(contact.resume, '_blank', 'noopener')
        print([{ t: 'out', c: 'opening resume.pdf …' }, { t: 'gap' }])
        break
      case 'github':
        window.open(contact.github, '_blank', 'noopener')
        print([{ t: 'out', c: 'opening github …' }, { t: 'gap' }])
        break
      case 'linkedin':
        window.open(contact.linkedin, '_blank', 'noopener')
        print([{ t: 'out', c: 'opening linkedin …' }, { t: 'gap' }])
        break
      case 'clear':
        setHistory([])
        break
      case 'website':
      case 'gui':
      case 'exit':
        onExit()
        break
      case 'sudo':
        print([{ t: 'accent', c: 'nice try 😏' }, { t: 'gap' }])
        break
      case 'ls':
        print([{ t: 'out', c: 'about  experience  projects  skills  contact  resume' }, { t: 'gap' }])
        break
      default:
        print([
          { t: 'out', c: `command not found: ${cmd}` },
          { t: 'dim', c: "type 'help' for a list of commands" },
          { t: 'gap' },
        ])
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') {
      run(input)
      setInput('')
      setLogIdx(-1)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(logIdx + 1, cmdLog.length - 1)
      if (cmdLog[next] !== undefined) {
        setLogIdx(next)
        setInput(cmdLog[next])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = logIdx - 1
      if (next < 0) {
        setLogIdx(-1)
        setInput('')
      } else {
        setLogIdx(next)
        setInput(cmdLog[next])
      }
    }
  }

  const chips = ['about', 'experience', 'projects', 'skills', 'contact', 'help']

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-8"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="w-full max-w-3xl">
        <div className="rounded-xl border border-green-900/60 bg-[#08120d] shadow-[0_0_60px_-15px_rgba(34,197,94,0.25)] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-green-900/60 bg-[#0a1a12]">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 font-mono text-xs text-green-500/80">
              michael@portfolio ~ %
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onExit()
              }}
              className="ml-auto font-mono text-[11px] text-accent-soft hover:text-white transition-colors"
            >
              view as website →
            </button>
          </div>
          <div
            ref={scrollRef}
            className="scanlines font-mono text-sm text-term px-5 py-4 h-[60vh] min-h-[360px] overflow-y-auto"
          >
            {history.map((item, i) => {
              if (item.t === 'gap') return <div key={i} className="h-3" />
              if (item.t === 'banner')
                return (
                  <pre
                    key={i}
                    className="text-term-prompt text-[10px] sm:text-xs leading-tight overflow-hidden"
                  >{String.raw` __  __ _      _                _   _ _
|  \/  (_) ___| |__   __ _  ___| | | (_) __ _
| |\/| | |/ __| '_ \ / _\` |/ _ \ | | | |/ _\` |
| |  | | | (__| | | | (_| |  __/ | | | | (_| |
|_|  |_|_|\___|_| |_|\__,_|\___|_|_|/ |_|\__,_|
                                  |__/`}</pre>
                )
              if (item.t === 'cmd')
                return (
                  <Line key={i}>
                    <span className="text-term-prompt">$</span> {item.c}
                  </Line>
                )
              if (item.t === 'dim')
                return (
                  <Line key={i} className="text-green-700/70">
                    {item.c}
                  </Line>
                )
              if (item.t === 'accent')
                return (
                  <Line key={i} className="text-accent-soft">
                    {item.c}
                  </Line>
                )
              if (item.t === 'kv')
                return (
                  <Line key={i}>
                    <span className="text-term-prompt inline-block w-44">{item.k}</span>
                    <span className="text-green-700/80">{item.v}</span>
                  </Line>
                )
              return (
                <Line key={i} className="text-term-bright">
                  {item.c}
                </Line>
              )
            })}

            {booted && (
              <div className="flex items-center gap-2">
                <span className="text-term-prompt">$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  autoFocus
                  spellCheck="false"
                  autoComplete="off"
                  className="flex-1 bg-transparent outline-none text-term caret-green-400"
                  aria-label="terminal input"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {chips.map((c) => (
            <button
              key={c}
              onClick={() => {
                run(c)
                inputRef.current?.focus()
              }}
              className="font-mono text-[11px] text-green-400 border border-green-900 rounded-md px-2.5 py-1 hover:bg-green-950 hover:text-term-bright transition-colors"
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
