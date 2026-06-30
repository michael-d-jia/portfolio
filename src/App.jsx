import { useState } from 'react'
import Terminal from './components/Terminal'
import Site from './components/Site'

export default function App() {
  const [mode, setMode] = useState('terminal')

  return mode === 'terminal' ? (
    <Terminal onExit={() => setMode('site')} />
  ) : (
    <Site onEnterTerminal={() => setMode('terminal')} />
  )
}
