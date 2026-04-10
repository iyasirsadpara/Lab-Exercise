import React from 'react'
import "../Style/Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div>
            <h2>PSDC</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Booking </a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button>Book Now</button>
        </div>
    </nav>
  )
}

export default Navbar
