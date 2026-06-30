import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    function move(e) {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      el.style.opacity = '1'
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-30 h-[500px] w-[500px] opacity-0 transition-opacity duration-500"
      style={{
        background:
          'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 60%)',
      }}
    />
  )
}
