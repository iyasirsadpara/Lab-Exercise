import Navbar from './Componets/Navbar'
import './App.css'
import Hero from './Componets/Hero'
import About from './Componets/About'
import Services from './Componets/Services'
import Team, { Journey, Testimonials } from './Componets/Teams'
import Contact from './Componets/Contact'
import Footer from './Componets/Footer'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Journey />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
