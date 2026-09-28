import React from 'react'
import { Link } from 'react-router-dom'
import gauriImage from './assets/gauri.jpeg'


const Home = () => {
  return (

     <div>


      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-text">HELLO, I'M</p>

          <h1>Gauri M Kumar</h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-text">
            I create modern, responsive and user-friendly websites
            using HTML, CSS, JavaScript and React.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn primary-btn">
              View Projects
            </Link>

            <Link to="/contact" className="btn secondary-btn">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-circle">
            <img src={gauriImage} alt="Gauri M Kumar" />
          </div>
        </div>
      </section>



      


     
    </div>


  )
}

export default Home