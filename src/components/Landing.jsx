import React from "react";
import './Landing.css';


const Landing = () => {

    return (
        <section className="landing" id="landing">
            <div className="intro">
                <h1 className="name">Sarfaraz Syed</h1>
                <p className="title">Software Developer</p>
                <div className="links">
                    <a href="https://github.com/SunHorizon" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>
        </section>
    )
}

export default Landing;