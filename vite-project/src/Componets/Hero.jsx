// src/Components/Hero.jsx
import React from 'react'
import '../Style/Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Dental Care</h1>
        <p>Your smile is our priority</p>
        <button className="cta-button">Book Appointment</button>
      </div>
    </section>
  )
}

export default Hero
