export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <p className="text-center text-text-dim text-xs font-mono">
        Designed &amp; built by Michael Jia · &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
