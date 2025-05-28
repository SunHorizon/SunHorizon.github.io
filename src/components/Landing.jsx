import React from "react";
import './Landing.css';


const Landing = () => {
  return (
    <section className="landing" id="landing">
      <div className="content fade-in">
        <h1>Hi, I'm Sarfaraz Syed</h1>
        <h2>Software Developer | Problem Solver | Fast Learner</h2>
        <p className="tagline">
          Transforming ideas into clean, efficient, and impactful code.
        </p>


        <div className="buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#about" className="btn btn-outline">About Me</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/SunHorizon" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sarfaraz-syed32/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:sarfaraz.m.syed123@gmail.com">Email</a>
        </div>
      </div>
      <div className="scroll-down">↓</div>
    </section>
  );
};

export default Landing;