import { useState } from 'react'
import './App.css'
import Card from './Componentes/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className="container">
        <Card user='Yasir ' age="18" area="skardu"/>
        <Card user='Ali ' age="19" area="Toba" />
      </div>

    </>
  )
}

export default App
