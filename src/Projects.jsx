import React from 'react'

const Projects = () => {
  return (
    <>
    
  
{/* Projects Section */}
<section className="section" id="projects">

  <p className="section-label">MY WORK</p>

  <h2 className="section-title">Projects</h2>

  <div className="projects-container">

    {/* Project 1 */}
    <div className="project-card">

      <div className="project-image">
        Todo Manager
      </div>

      <div className="project-content">

        <h3>Todo Manager</h3>

        <p>
          A task management application where users can add,
          edit and delete tasks with data stored using
          localStorage.
        </p>

        <div className="project-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Bootstrap</span>
          <span>LocalStorage</span>
        </div>

        <a href="#" className="project-link">
          View Project →
        </a>

      </div>

    </div>


    {/* Project 2 */}
    <div className="project-card">

      <div className="project-image">
        Recipe Finder
      </div>

      <div className="project-content">

        <h3>Recipe Finder</h3>

        <p>
          A recipe search application that fetches recipe
          information from an external API and displays
          recipes dynamically.
        </p>

        <div className="project-tags">
          <span>JavaScript</span>
          <span>API</span>
          <span>Bootstrap</span>
        </div>

        <a href="#" className="project-link">
          View Project →
        </a>

      </div>

    </div>


    {/* Project 3 */}
    <div className="project-card">

      <div className="project-image">
        Movie Finder
      </div>

      <div className="project-content">

        <h3>Movie Details Finder</h3>

        <p>
          A movie search application that allows users to
          search for movies and display detailed information
          using an API.
        </p>

        <div className="project-tags">
          <span>JavaScript</span>
          <span>API</span>
          <span>Bootstrap</span>
        </div>

        <a href="#" className="project-link">
          View Project →
        </a>

      </div>

    </div>


    {/* Project 4 */}
    <div className="project-card">

      <div className="project-image">
        GitHub Profile
      </div>

      <div className="project-content">

        <h3>GitHub Profile Finder</h3>

        <p>
          A GitHub profile application that retrieves user
          information such as repositories, followers,
          following and profile details.
        </p>

        <div className="project-tags">
          <span>JavaScript</span>
          <span>GitHub API</span>
          <span>Bootstrap</span>
        </div>

        <a href="#" className="project-link">
          View Project →
        </a>

      </div>

    </div>


    {/* Project 5 */}
    <div className="project-card">

      <div className="project-image">
        Employee Manager
      </div>

      <div className="project-content">

        <h3>Employee Management System</h3>

        <p>
          A management interface for adding, editing and
          deleting employee information including name,
          department, salary and experience.
        </p>

        <div className="project-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Bootstrap</span>
        </div>

        <a href="#" className="project-link">
          View Project →
        </a>

      </div>

    </div>


    {/* Project 6 */}
    <div className="project-card">

      <div className="project-image">
        Student Manager
      </div>

      <div className="project-content">

        <h3>Student Management System</h3>

        <p>
          A student management application for displaying
          student details such as name, phone number and
          course.
        </p>

        <div className="project-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Bootstrap</span>
        </div>

        <a href="#" className="project-link">
          View Project →
        </a>

      </div>

    </div>

  </div>

</section>


    
    </>
  )
}

export default Projects