import React from 'react';
import './styling/resume.css';
import resume from './image/my_resume.pdf'

function Resume() {
  return (
    <section className="resume">
      <div className="resume-content">
        <h2>Download My Resume</h2>
        <p>If you'd like to learn more about my skills and experience, feel free to download my resume below.</p>
        <a href={resume} download className="resume-download-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
