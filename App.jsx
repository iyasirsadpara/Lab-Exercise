import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Calculator from './components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Calculator />
    </>
  )
}

export default App
