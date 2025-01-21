import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';
import resume from './Assets/Harshavardhana_Mudduluru_.pdf'

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-left">
            <h1 className="navbar-name">Harshavardhana Mudduluru</h1>
          </div>
          <div className="navbar-right">
            <ul>
              {/* Use ScrollLink from react-scroll for smooth scrolling */}
              <li><ScrollLink to="home" smooth={true} duration={100}>Home</ScrollLink></li>
              <li><ScrollLink to="projects" smooth={true} duration={100}>Projects</ScrollLink></li>
              <li><ScrollLink to="about" smooth={true} duration={100}>About Me</ScrollLink></li>
              <li><ScrollLink to="skills" smooth={true} duration={100}>Skills</ScrollLink></li>
              {/* Make sure 'education' matches the id of the Education section */}
              <li><ScrollLink to="education" smooth={true} duration={100}>Education</ScrollLink></li> 
              <li><ScrollLink to="contact" smooth={true} duration={100}>Contact</ScrollLink></li>
              <li><a href={resume} className="resume-btn" download="Harshavardhana_Mudduluru_Resume.pdf">Resume</a></li>
            </ul>
          </div>
        </nav>

        {/* Sections with corresponding ids */}
        <div id="home">
          <Home />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        {/* Ensure id is exactly 'education' */}
        <div id="education">
          <Education />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Router>
    </div>
  );
}

export default App;
