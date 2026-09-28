import React from 'react'

const Contact = () => {
  return (
   <>
   
    {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <p className="section-label">CONTACT</p>
        <h2 className="section-title">Let's Work Together</h2>

        <p className="contact-text">
          Have a project or opportunity? Feel free to get in touch with me.
        </p>

        <div className="contact-info">
          <p>📧 gaurimkumar4002@email.com</p>
          <p>📱 +91 87145 96234</p>
          <p>📍 Kerala, India</p>
        </div>


        <div className="social-links">
          
           <a href="https://github.com/gaurimkumar" target="_blank" rel="noopener noreferrer" > github.com/gaurimkumar </a>
           
            <a href="https://www.linkedin.com/in/gauri-m-kumar/" target="_blank" rel="noopener noreferrer" > linkedin.com/in/gauri-m-kumar </a> </div>

        <button className="contact-btn">Get In Touch</button>
      </section>

      
   
   </>
  )
}

export default Contact