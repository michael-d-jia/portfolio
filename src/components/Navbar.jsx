const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ onEnterTerminal }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg/70 border-b border-border/60">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-semibold tracking-tight text-text hover:text-accent-soft transition-colors"
        >
          MJ
        </a>
        <ul className="flex items-center gap-7 text-sm">
          {links.map((link, i) => (
            <li key={link.href} className="hidden sm:block">
              <a
                href={link.href}
                className="text-text-muted hover:text-text transition-colors"
              >
                <span className="text-accent-soft font-mono text-xs mr-1.5">
                  0{i + 1}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={onEnterTerminal}
              className="px-3 py-1.5 rounded-md border border-green-800 text-term hover:bg-green-950 transition-colors font-mono text-xs"
              aria-label="Switch to terminal mode"
            >
              {'>_'} Terminal
            </button>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-md border border-accent/50 text-accent-soft hover:bg-accent/10 transition-colors font-mono text-xs"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
