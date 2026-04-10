import { useState } from 'react'
import Navbar from './Componets/Navbar'
import './App.css'
import Hero from './Componets/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>

    </>
  )
}

export default App
