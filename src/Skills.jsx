import React from 'react'

const Skills = () => {
  return (
   


    <>
    
    
    {/* Skills Section */}
      <section className="section" id="skills">
        <p className="section-label">MY SKILLS</p>
        <h2 className="section-title">Technologies I Use</h2>

        <div className="skills-container">
          <div className="skill-card">
            <h3>HTML</h3>
            <p>Building structured and semantic web pages.</p>
          </div>

          <div className="skill-card">
            <h3>CSS</h3>
            <p>Creating responsive and attractive designs.</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Adding functionality and interactivity.</p>
          </div>

          <div className="skill-card">
            <h3>React</h3>
            <p>Building modern component-based applications.</p>
          </div>

            <div className="skill-card">
               <h3>Bootstrap</h3> 
               <p> Building responsive and modern websites using Bootstrap components, utilities and responsive layouts. </p>
           </div> 
           
           <div className="skill-card"> 
            <h3>Tailwind CSS</h3>
             <p> Creating modern, responsive and customizable user interfaces using Tailwind CSS utility classes. </p> 
            </div>



        </div>
      </section>
      </>




  )
}

export default Skills