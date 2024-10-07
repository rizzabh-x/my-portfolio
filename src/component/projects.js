import React from 'react';
import './styling/Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div>
        <h3>Project 1</h3>
        <p>Description of project 1...</p>
        <a href="https://github.com/[YourUsername]/project1">GitHub Link</a>
      </div>
      <div>
        <h3>Project 2</h3>
        <p>Description of project 2...</p>
        <a href="https://github.com/[YourUsername]/project2">GitHub Link</a>
      </div>
    </section>
  );
}

export default Projects;
