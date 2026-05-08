export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <p className="text-center text-slate-500 text-xs font-mono">
        Designed &amp; built by Michael Jia · &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
