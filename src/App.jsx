import { useState } from 'react'
import './App.css'

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
      <button
        onClick={() => setCount(c => c + 1)}
        className="px-5 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-colors font-medium shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
      >
        Count: {count}
      </button>
      <p className="text-sm text-gray-500">Remove or modify this sample UI as you like.</p>
    </main>
  )
}

export default App
