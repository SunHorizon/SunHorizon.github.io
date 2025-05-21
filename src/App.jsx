import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container">
      <img src="/profile.jpg" alt="Profile" className="profile-pic" />
      <h1>Sarfaraz Khan</h1>
      <p>Software Developer | Problem Solver | Game Programmer</p>
      <div className="links">
        <a href="https://github.com/SunHorizon" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  );
}

export default App
