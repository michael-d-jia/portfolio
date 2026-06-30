# Michael Jia — Portfolio

A personal portfolio with two experiences in one site:

- **Terminal mode** (the default landing) — an interactive command line where visitors type commands like `projects`, `experience`, and `contact`.
- **Website mode** — a polished, scrollable site (Spotlight/Linear style: cursor glow, animated gradient-border cards, magnetic buttons, scroll-reveal animations).

Visitors can switch between the two at any time, so the site is both memorable *and* easy to skim.

Built with **React 19 + Vite + Tailwind CSS v4**. No UI dependencies beyond React — all interactions are plain React + CSS.

---

## Quick start

```bash
npm install        # install dependencies (first time only)
npm run dev        # start the dev server at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the production build locally
npm run lint       # run ESLint
```

---

## ⭐ Updating your content (start here)

**Almost everything you'll want to change lives in one file: [`src/data.js`](src/data.js).**

It's the single source of truth shared by *both* the terminal and the website, so editing it once updates both. Here's the map of what lives where:

| What you want to change | Where to edit |
| --- | --- |
| Name, tagline, status | `src/data.js` → `profile` |
| Hero intro paragraph (under your name) | `src/data.js` → `profile.heroIntro` |
| "About Me" paragraphs | `src/data.js` → `profile.about` |
| Which words get highlighted in the bio | `src/data.js` → `profile.highlights` |
| Skills / tech list | `src/data.js` → `skills` |
| Work experience timeline | `src/data.js` → `experience` |
| Projects | `src/data.js` → `projects` |
| Email, GitHub, LinkedIn, resume link | `src/data.js` → `contact` |
| Your photo | replace `public/me.jpg` |
| Your resume | add `public/resume.pdf` |
| Colors / fonts / theme | `src/index.css` |
| Terminal commands | `src/components/Terminal.jsx` |

> **All your text lives in `src/data.js`.** The same `profile.about` paragraphs power both the website's About section and the terminal's `about` command, so you only ever write your bio once.

### Editing `src/data.js`

#### Profile (name, tagline, status, bio)

```js
export const profile = {
  name: 'Michael Jia',
  tagline: 'I build full-stack apps and explore machine learning.',
  location: 'Boston, MA',
  status: 'Looking for Summer 2027 internships',
  heroIntro: 'Short paragraph shown under your name in the hero.',
  about: [
    "First paragraph of your bio…",
    "Second paragraph…",
  ],
  highlights: ['TurboTides', 'Mastercam', 'Summer 2027 internships'],
}
```

- `name` and `tagline` appear in the website hero and the terminal banner.
- `status` shows in the hero (appended to `heroIntro`).
- `heroIntro` is the hero paragraph; `status` is automatically added to the end of it.
- `about` is an array — each string is its own paragraph, shown in both the website About section and the terminal's `about` command.
- `highlights` is a list of phrases — anywhere they appear in `about`, they're shown in the indigo accent color. Add your company names or key phrases here.

#### Skills

Just a list of strings. Add, remove, or reorder freely:

```js
export const skills = ['Python', 'Java', 'JavaScript', 'FastAPI', /* … */]
```

#### Experience (the timeline)

Each role is an object. **List them newest-first** — they render top-to-bottom in that order.

```js
export const experience = [
  {
    period: 'Jul 2026 — Dec 2026',   // shown under the title
    company: 'Mastercam',
    title: 'Software Engineering Co-op',
    location: 'Remote',
    upcoming: true,                  // optional — adds an "Upcoming" badge + accent dot
    points: [
      'A bullet describing what you did.',
      'Another bullet.',
    ],
  },
  // …more roles
]
```

**To add a new job:** copy one of the objects, paste it in the right chronological spot, and edit the fields. Remove the `upcoming` line for past roles (or set it to `false`).

#### Projects

```js
export const projects = [
  {
    title: 'RL Market Maker',
    description: 'One-paragraph description of the project.',
    tech: ['Python', 'NumPy', 'Pandas'],   // shown as the tag row
    github: 'https://github.com/michael-d-jia/rl-market-maker',
  },
  // …more projects
]
```

**To add a project:** copy a block, edit the fields. The website shows them as cards (2 per row); the terminal lists them under the `projects` command. Both update automatically.

#### Contact

```js
export const contact = {
  email: 'jia.mich@northeastern.edu',
  github: 'https://github.com/michael-d-jia',
  linkedin: 'https://www.linkedin.com/in/micha-jia',
  resume: '/resume.pdf',   // file lives in public/ — see below
}
```

### Swapping your photo and resume

- **Photo:** replace `public/me.jpg` with your own (keep the same filename, or update the path in [`About.jsx`](src/components/About.jsx)). A square image works best.
- **Resume:** drop your PDF at `public/resume.pdf`. The "Resume" button and the terminal's `resume` command both point there. To use a different filename, update `contact.resume` in `src/data.js` and the `href` in [`Navbar.jsx`](src/components/Navbar.jsx).

---

## Customizing the look

### Colors and fonts

All theme tokens are defined once at the top of [`src/index.css`](src/index.css) in the `@theme` block:

```css
@theme {
  --color-bg: #0a0a0f;          /* page background */
  --color-accent: #6366f1;      /* indigo accent (buttons, highlights) */
  --color-accent-soft: #a5b4fc; /* lighter accent (labels, links) */
  --color-term: #86efac;        /* terminal green text */
  /* …and more */
}
```

Change a value here and it updates everywhere (used as Tailwind classes like `bg-bg`, `text-accent`, `text-term`). Fonts (`Inter` + `JetBrains Mono`) are loaded in [`index.html`](index.html) and set as `--font-sans` / `--font-mono`.

### Which mode loads first

The default is terminal-first. To change it, edit the initial state in [`src/App.jsx`](src/App.jsx):

```js
const [mode, setMode] = useState('terminal')  // change 'terminal' to 'site'
```

---

## Terminal commands

Commands are handled by the `run()` function's `switch` statement in [`src/components/Terminal.jsx`](src/components/Terminal.jsx). To **add a command**, add a `case`:

```js
case 'fun':
  print([
    { t: 'out', c: 'Your output line here.' },
    { t: 'gap' },
  ])
  break
```

Line `t` (type) options: `out` (normal), `dim` (muted green), `accent` (indigo), `cmd` (echoes input), `kv` (two-column, uses `k`/`v`), `gap` (blank line), `banner` (ASCII art).

The clickable command chips below the terminal are defined in the `chips` array in the same file — add your new command there to make it discoverable. The built-in list shown by `help` is the `HELP` array near the top.

---

## Project structure

```
portfolio/
├─ public/
│  ├─ me.jpg              # your photo
│  ├─ resume.pdf          # your resume (add this)
│  └─ favicon.svg
├─ src/
│  ├─ data.js             # ⭐ all your content lives here
│  ├─ App.jsx             # mode switch (terminal ↔ site)
│  ├─ main.jsx            # React entry point
│  ├─ index.css           # theme tokens + global styles
│  └─ components/
│     ├─ Terminal.jsx     # interactive terminal mode
│     ├─ Site.jsx         # website mode shell (grid bg + cursor glow + sections)
│     ├─ Navbar.jsx       # site nav + "Terminal" toggle
│     ├─ Hero.jsx         # site hero
│     ├─ About.jsx        # site about section (renders profile.about)
│     ├─ Experience.jsx   # site timeline (from data.js)
│     ├─ Projects.jsx     # site project cards (from data.js)
│     ├─ Contact.jsx      # site contact section
│     ├─ Footer.jsx
│     ├─ SectionHeading.jsx  # numbered "01. About Me" headings
│     ├─ Reveal.jsx          # scroll-reveal wrapper
│     ├─ Magnetic.jsx        # magnetic-hover button wrapper
│     └─ CursorGlow.jsx      # cursor-following spotlight glow
├─ index.html
└─ package.json
```

---

## Deploy (Vercel)

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), click **Add New → Project** and import the repo.
3. Vercel auto-detects Vite — keep the defaults (build command `npm run build`, output directory `dist`) and click **Deploy**.

Any static host works too (Netlify, GitHub Pages, Cloudflare Pages) — just serve the `dist/` folder produced by `npm run build`.
```
