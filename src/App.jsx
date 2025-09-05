import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons.jsx'

function App() {
  const [count, setCount] = useState(0)
  const handleclick = () => {
    console.log("Clicked")
  }

  return (
    <Buttons text={"explore"} onClick={handleclick} />
  )
}

export default App