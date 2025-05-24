import React from "react";
import './Projects.css';

const projects = [
  {
    title: 'E-Commerce Web App',
    description:
      'A full-stack online store built with Next.js, TypeScript, and Tailwind, integrated with Wix SDK for checkout and product management.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Wix SDK'],
    github: 'https://github.com/SunHorizon/next-ecommerce',
    demo: '#', // Add demo link if available
  },
  {
    title: 'Billiards Game',
    description:
      'A physics-based billiards game with a C backend, Python-based game state manager, and a web interface using HTML/CSS/JavaScript.',
    tech: ['C', 'Python', 'SQLite', 'JavaScript'],
    github: 'https://github.com/SunHorizon/BilliardsGame',
    demo: '#',
  },
  {
    title: 'Mancala Game',
    description:
      'A classic board game implementation in Java with AI logic and a polished GUI for gameplay.',
    tech: ['Java', 'Swing'],
    github: 'https://github.com/SunHorizon/Mancala-Game',
    demo: '#',
  },
];

const Projects = () => {

    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack"> 
                            {project.tech.map((tech, i) => (
                                <span key={i}>{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            {project.demo !== '#' && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>    
        </section>
    )

}

export default Projects;