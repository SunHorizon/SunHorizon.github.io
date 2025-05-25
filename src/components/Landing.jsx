import React from "react";
import './Landing.css';


const Landing = () => {
  return (
    <section className="landing" id="landing">
      <div className="content fade-in">
        <h1>Hi, I'm Sarfaraz Syed</h1>
        <h2>Software Developer | Problem Solver | Game Programmer</h2>
        <p className="tagline">
          Transforming ideas into clean, efficient, and impactful code.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/SunHorizon" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sarfaraz-syed-3ba02014a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:sarfaraz.m.syed123@gmail.com">Email</a>
        </div>
      </div>
      <div className="scroll-down">↓</div>
    </section>
  );
};

export default Landing;