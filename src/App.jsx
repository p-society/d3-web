import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100 p-6">
      <div className="text-center space-y-3">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Tailwind <span className="text-indigo-500">Ready</span>
        </h1>
        <p className="text-gray-400 max-w-md">
          This project is now configured with Tailwind CSS. Edit{' '}
          <code className="px-1 rounded bg-gray-800 text-indigo-300">App.jsx</code> and start
          building.
        </p>
      </div>
      <div className="w-44 h-16">
        <Buttons text="explore" />
      </div>
      
      <p className="text-sm text-gray-500">Remove or modify this sample UI as you like.</p>
    </main>
  )
}

export default App
