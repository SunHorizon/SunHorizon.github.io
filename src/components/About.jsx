import React from "react";
import './About.css';

const About = () => {

    return (
        <section className="about" id="about">
            <h2>About Me</h2>
            <div className="content">
                <p>
                    Hi! I'm Sarfaraz Syed, a passionate software developer with a love for solving complex problems and building interactive digital experiences.
                    I specialize in full-stack development, game programming, and creating efficient, user-friendly applications.
                </p>
                <p>
                    With a strong foundation in languages like Java, C++, and JavaScript, and hands-on experience in tools like React, Next.js, and Unity,
                    I enjoy turning ideas into code that makes an impact. Whether it's web development or game design, I approach every project with curiosity and creativity.
                </p>
            </div>

            <div className="skills-section">
                <h3>Skills & Tools</h3>
                <ul className="skills-list">
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>Dart</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node/Express</li>
                    <li>Flutter</li>
                    <li>FireBase</li>
                </ul>
            </div>
        </section>
    )
}

export default About;