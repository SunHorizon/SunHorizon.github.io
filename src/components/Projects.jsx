import React, { useState, useEffect } from "react";
import './Projects.css';

const projects = [
  {
    title: 'Health Services Locator Web App',
    description:`
    I designed and developed a responsive web application that enables users to locate nearby health services—such as clinics, hospitals, and pharmacies—by leveraging real-time geolocation and advanced search filtering. 
    To enhance usability and interactivity, I integrated the Google Maps JavaScript and Places APIs, implementing custom map markers and autocomplete functionality for location search.  
    The application features dynamic UI components, including distance sliders, service category toggles, and a directions panel that supports real-time route generation and reset logic.     
    I utilized React hooks such as useState and useEffect to manage state efficiently and ensure responsive rendering during user interactions.    
    To further improve performance and user experience, I implemented manual pagination, deduplication of results, and a mobile-friendly interface with custom map styling.
    `,   
    tech: ['React', 'Google Maps API', 'Places API', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/SunHorizon/HealthFinder',
    demo: '#', // Add demo link if available
  },
  {
    title: 'Volunteer Event Management Platform',
    description:
      `I engineered a full-stack event management platform that allows organizers to create and manage volunteer-driven events, featuring shift scheduling and real-time status filtering. 
      The platform includes role-based dashboards built with the React Context API and protected routes, providing personalized user experiences for both organizers and volunteers. 
      I integrated Firebase Authentication to enable secure user registration, login, and session management, with access control enforced across all views. On the back end, I developed and consumed RESTful APIs using Express.js and Mongoose to support CRUD operations for events and volunteer shifts. 
      The front end features a responsive and modular UI built with CSS Modules and React components, ensuring compatibility and accessibility across a variety of devices.`,
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Authentication', 'Mongoose', "Axios"],
    github: 'https://github.com/SunHorizon/HelpHub',
    demo: '#', // Add demo link if available
  },
  {
    title: 'GryphSync',
    description:
      `I developed a full-stack mobile application aimed at centralizing academic collaboration at the University of Guelph, allowing students to explore courses, share notes, and engage in real-time chat and discussion threads. 
      The app features secure user authentication through Firebase, restricting access to verified university members. I built interactive course pages that include previous outlines, textbook rankings, pros and cons, student reviews, and preparation resources. 
      To support peer-to-peer communication, I integrated real-time group chat and threaded discussions within individual courses. Users can upload and share lecture notes and documents through Firebase Storage, while dynamic course data and user-generated content are stored and retrieved using Firebase Firestore. 
      I designed a custom user dashboard that displays selected courses, personalized details, and quick access to key features, alongside a search function that allows students to discover courses by name or code. Additionally, I implemented a user profile page to summarize user activity and preferences. 
      Throughout the development process, I tackled technical challenges such as designing a scalable chat system, creating an intuitive UI/UX, and ensuring secure document uploads. The project was completed in a collaborative team environment using Git for version control and agile development methodologies.`,
    tech: ['Flutter', 'Firebase (Auth, Firestore, Storage)', 'SQLite', 'Dart', 'Git'],
    github: 'https://github.com/SunHorizon/gryphsync',
    demo: '#', // Add demo link if available
  },
  {
    title: 'E-Commerce Platform',
    description:
      `I developed a full-stack e-commerce application using Next.js and TypeScript, featuring a responsive user interface styled with Tailwind CSS. 
      The application includes essential shopping features such as dynamic product pages, cart functionality, variant selection, search and filter capabilities, and paginated navigation to enhance user experience. 
      On the back end, I integrated the Wix SDK and API to handle operations like user authentication, profile management, and secure retrieval of product data.`,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Wix SDK/API'],
    github: 'https://github.com/SunHorizon/next-ecommerce',
    demo: '#', // Add demo link if available
  },
  {
    title: 'Netflix Clone',
    description:
      `I built a Netflix-inspired front-end application using React that dynamically displays categorized movie content by integrating the TMDB REST API. 
      Asynchronous data fetching was handled using Axios, and responsive design principles were applied to ensure a seamless viewing experience across various devices. 
      To provide an authentic browsing experience, I recreated key Netflix UI elements such as interactive carousels and genre-based filtering.`,
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'REST API'],
    github: 'https://github.com/SunHorizon/Netflix-Clone',
    demo: '#', // Add demo link if available
  },
  {
    title: 'WhatsApp Clone',
    description:
      `I engineered a full-stack real-time chat application replicating core WhatsApp functionality using React and Firebase. 
      The application features Google OAuth integration for secure user authentication and leverages Firebase Firestore to enable real-time message synchronization and efficient chat room management. 
      I utilized React Router for seamless client-side navigation and incorporated Material UI to deliver a responsive, modern user interface.`,
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'REST API',"Firebase", 'Material UI'],
    github: 'https://github.com/SunHorizon/WhatsApp-Clone',
    demo: '#', // Add demo link if available
  },
  {
    title: 'Mancala Game',
    description:
      `I developed a feature-rich Mancala game in Java, applying robust object-oriented programming principles such as encapsulation, inheritance, and polymorphism. 
      The game features an intuitive and interactive graphical user interface designed with event-driven programming. I implemented save and load functionality using Java Serialization, allowing players to preserve and resume their game progress. 
      To ensure stability and correctness, I conducted thorough testing through both unit tests and manual scenarios, resulting in a reliable and engaging user experience.`,
    tech: ['Java', "AWT"],
    github: 'https://github.com/SunHorizon/Mancala-Game',
    demo: '#', // Add demo link if available
  },
  {
    title: 'Billiards Game',
    description:
      `I built a 2D billiards game in C featuring a custom physics engine, utilizing object-oriented design and precise memory management to ensure high-performance computations. 
      To support real-time game state persistence and rule enforcement, I integrated a Python-based local server that connected the C backend to a SQLite database. 
      The front end was fully interactive, developed using HTML, CSS, and JavaScript, and included a responsive billiard table interface with animated cues and balls. 
      I also implemented asynchronous communication using JavaScript Promises for handling GET and POST requests, enabling smooth interaction between client-side gameplay and backend logic.`,
    tech: ['C', "Python", "HTML", "CSS", "JavaScript", "SQLite"],
    github: 'https://github.com/SunHorizon/BilliardsGame',
    demo: '#', // Add demo link if available
  },
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    const closeModal = () => setActiveProject(null);
    
     return (
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p className="project-description">
                {project.description.length > 200
                  ? project.description.slice(0, 180) + '...'
                  : project.description}
              </p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                {project.demo !== '#' && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
              <div className="card-button">
                <button onClick={() => setActiveProject(project)}>Read More</button>
              </div>
            </div>
          ))}
        </div>

        {activeProject && (
          <div className="modal-backdrop" onClick={closeModal}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>×</button>
              <h2>{activeProject.title}</h2>
              {activeProject.description.split('\n').map((para, idx) => (
                <p key={idx}>{para.trim()}</p>
              ))}
              <div className="tech-stack">
                {activeProject.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="modal-links">
                <a href={activeProject.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                {activeProject.demo !== '#' && (
                  <a href={activeProject.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
  );

}

export default Projects;