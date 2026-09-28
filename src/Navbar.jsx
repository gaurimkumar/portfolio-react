import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    
    
     <nav className="navbar">
        <h2 className="logo">Portfolio</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
           <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>



  )
}

export default Navbar