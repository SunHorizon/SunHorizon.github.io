import React, { useState, useEffect } from "react";
import './Projects.css';

const projects = [
  {
    title: 'QR Code File Management App',
    description:`
    I designed and developed a secure full-stack web application using Next.js and TypeScript that allows users to upload files and instantly generate QR codes for simplified access and sharing, significantly improving download efficiency. 
    Supabase Auth and Storage were integrated to manage user sessions and securely host files, with automated QR code generation and access control. The application features a two-view dashboard: one for uploading files and another for managing past uploads with quick navigation. 
    I implemented robust file management tools, including searchable filenames, date range filters, and pagination using skip and take logic to ensure smooth handling of large datasets. QR code functionality includes dynamic previews, downloadable PNGs, printable versions, and modal overlays for focused viewing—powered by the html-to-image library. 
    The user interface was built with Tailwind CSS and includes responsive design elements such as drag-and-drop upload zones, status indicators, modals, and clearly labeled action buttons for printing and downloading, offering a clean and intuitive user experience.
    `,   
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/SunHorizon/qrvault',
    demo: '#', // Add demo link if available
  },
  {
    title: 'MindMaze Game',
    description:`
    I designed and developed MindMaze, a memory-based puzzle game built with React Native and Expo, where players must memorize and navigate invisible paths to reach a goal tile. 
    The game showcases expertise in mobile UI development, game logic, animation handling, and local data persistence. I implemented dynamic tile-based movement, custom path memorization mechanics, and win/loss conditions using a dynamic grid system. 
    A custom D-pad navigation control was created using TouchableOpacity, delivering a modern and responsive user interface. To enhance gameplay immersion, I built a memorization phase that transitions visible tiles to hidden ones with smooth fade-out animations using Animated.timing. 
    I also integrated a real-time game timer and a persistent best-time tracking system using AsyncStorage. The app features a multi-screen navigation structure with React Navigation, including a main menu, level selector, and gameplay screen, with stack control logic such as disabling the back button during gameplay. 
    Levels are loaded from external .json files, enabling scalable content updates and clean separation of game data. Emphasis was placed on clean UX, accessibility, and mobile responsiveness, with features such as visual tile feedback, seamless state transitions, and clear endgame messaging.
    `,   
    tech: ['React Native', 'JavaScript', 'Expo', 'AsyncStorage'],
    github: 'https://github.com/SunHorizon/mindmaze-game',
    demo: '#', // Add demo link if available
  },
  {
    title: 'Wildlife Sighting Tracker',
    description:`
    I developed a feature-rich Android application that enables users to capture and identify wildlife species using custom machine learning models. Built with Java and XML using Android Jetpack components, the app supports both photo capture via CameraX and image selection from the gallery. 
    Species recognition is powered by ML Kit's Custom Image Labeling using a pre-trained TensorFlow Lite model, allowing for accurate identification beyond the limitations of default models.
    Each sighting is logged with rich metadata—including timestamp, GPS coordinates from FusedLocationProviderClient, and user notes—and persisted locally using a Room database. 
    I designed the ImageEntity schema to store relevant details such as image paths, labels, and location data. A RecyclerView-based sightings gallery displays past entries with efficient image loading via Glide and metadata rendering.
    Additionally, I integrated the Google Maps SDK to visualize sightings as clustered interactive pins with info windows. The application features a modern, material-compliant UI with a BottomNavigationView, FloatingActionButton, and intuitive image preview overlays. 
    Users can preview, save, or cancel image entries before committing, and manage their history with deletion options for greater control.
    `,   
    tech: ['Java', 'XML', 'Room', 'ML Kit', 'Maps', "Android Java"],
    github: 'https://github.com/SunHorizon/WildlifeTracker',
    demo: '#', // Add demo link if available
  },
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
    title: 'Unity3D Survival Shooter Game',
    description:
      `Developed a first-person survival shooter game in Unity where players must fend off waves of enemies for as many rounds as possible. 
      Implemented core FPS mechanics including player movement, shooting, and wave-based enemy spawning.  Designed an escalating difficulty system where each round increases in enemy count and aggression. Integrated health and ammo systems, along with visual and audio feedback for immersive gameplay. 
      This project demonstrates foundational game development skills in Unity and C#, including object pooling, basic AI behavior, and UI elements such as health bars and round counters.`,
    tech: ["Unity"],
    github: 'https://github.com/SunHorizon/Unity3D-Survial-Game',
    demo: '#', // Add demo link if available
  },
  {
    title: 'Android Space Shooter Game',
    description:
      `This is a 2D top-down space shooter developed in Java for the Android platform. In this game, players control a spacecraft and must shoot down waves of enemy ships advancing from the top of the screen. The gameplay emphasizes fast reflexes, precision shooting, and survival for as long as possible in a hostile space environment.`,
    tech: ["Java", "Android SDK"],
    github: 'https://github.com/SunHorizon/Andriod-ShooterGame',
    demo: '#', // Add demo link if available
  },
  {
    title: 'GJK Algorithm (C++)',
    description:
      `This project implements the Gilbert–Johnson–Keerthi (GJK) algorithm for detecting collisions between convex shapes using C++. 
      The GJK algorithm is widely used in physics engines and game development due to its efficiency and accuracy in determining intersection between convex objects. 
      Built with SDL (Simple DirectMedia Layer) for rendering, the application visually demonstrates how the GJK algorithm computes the Minkowski difference and identifies whether two shapes intersect in real-time.`,
    tech: ["C++"],
    github: 'https://github.com/SunHorizon/GJK_SarfarazSyed',
    demo: '#', // Add demo link if available
  },
  {
    title: 'Game Engine',
    description:
      `The Custom 2D/3D Game Engine is a modular game development framework built from scratch in C++ with OpenGL for rendering. 
      Designed to support both 2D and 3D graphics, the engine features a real-time rendering pipeline, input handling, and scene management through a scene graph architecture. 
      It allows developers to manage game objects efficiently and  interactively via keyboard and mouse input. The engine's modular structure makes it easily extensible,  allowing integration of additional components like physics engines or scripting systems. 
      A basic shader system using GLSL is also implemented to enable customizable visual effects. This project serves as a strong foundational tool for learning core game engine concepts or for use in building custom games.`,
    tech: ["C++", "OpenGL", "GLSL"],
    github: 'https://github.com/SunHorizon/GameEngine',
    demo: '#', // Add demo link if available
  },
  {
    title: 'Mario Level Recreation in Unity 2D',
    description:
      `This project involves recreating a classic Super Mario Bros. level using Unity's 2D game development tools. It demonstrates fundamental platformer mechanics, including player movement, jumping, enemy interactions, and level progression. 
      The recreation focuses on replicating the original game's physics and aesthetics to provide an authentic gameplay experience. Developed in C#, the project serves as a practical exercise in 2D game development and level design within the Unity engine.`,
    tech: ["Unity 2D", "C#"],
    github: 'https://github.com/SunHorizon/GameEngine',
    demo: '#', // Add demo link if available
  },
  {
    title: 'Chess Game in Java',
    description:
      `This project is a console-based chess game developed in Java, offering a complete implementation of standard chess rules. It allows two players to compete in a text-based interface, handling all core gameplay aspects including move validation, detection of check and checkmate, and special moves such as castling and en passant.`,
    tech: ["Java"],
    github: 'https://github.com/SunHorizon/Chess',
    demo: '#', // Add demo link if available
  },
  {
    title: 'Street Fighter III: New Generation - Browser-Based Fighting Game',
    description:
      `This project is a browser-based fighting game inspired by Street Fighter III: New Generation, developed using HTML, CSS, and JavaScript. It features iconic characters such as Ryu, Chun-Li, Makoto, and Sean, each with unique animations and health indicators. The game offers a one-on-one combat experience with a CPU opponent, complete with a dynamic "VS" screen and a health bar system`,
    tech: ["HTML", "CSS", "JavaScript"],
    github: 'https://github.com/SunHorizon/StreetFighter3_JavaScript',
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