import React from "react";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h1>My Projects</h1>
        <div className="project-grid">
          <div className="project-card">
            <h3>Personal Portfolio</h3>
            <p>A React-based portfolio with Vite, featuring a cosmic gradient theme and responsive design.</p>
          </div>
          <div className="project-card">
            <h3>Blog Platform</h3>
            <p>A Django-powered blog with user authentication, rich text editing, and comment functionality.</p>
          </div>
          <div className="project-card">
            <h3>E-Commerce Prototype</h3>
            <p>A Bootstrap-styled e-commerce site with React frontend and mock API integration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;