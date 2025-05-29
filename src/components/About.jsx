import React from "react";
import './About.css';

const About = () => {

    return (
        <section className="about" id="about">
            <h2>About Me</h2>
            <div className="content">
                <p>
                    Hi! I'm Sarfaraz Syed, a Computer Science student at the University of Guelph with a strong background in software and game development.
                    I enjoy building scalable web apps, designing intuitive user interfaces, and solving complex technical challenges.
                </p>
                <p>
                    My experience spans full-stack development, game engines, and automation tools using technologies such as React, Next.js, Java, C/C++, and Unity.
                    I've completed multiple co-op terms as a SharePoint Developer and Software Developer Intern, working on real-world systems in both academic and enterprise settings.
                    I'm constantly seeking opportunities to grow as a developer and create meaningful digital solutions.
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