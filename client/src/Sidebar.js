import React from "react";
import harshpic from "./images/harshpic.jpg"; // Replace with your image URL
import linkedinIcon from "./images/linkedin_icon.svg"; // Replace with your LinkedIn icon URL
import githubIcon from "./images/github_icon.svg"; // Replace with your GitHub icon URL
// import resumeIcon from "./images/resume_icon.png"; // Replace with your Resume icon URL
import EmailIcon from "./images/email_icon.svg"; // Import the email icon SVG


function Sidebar() {
  return (
    <div className="sidebar">
    <div className="profile">
      <img src={harshpic} alt="Your Name" className="profile-image" />
    </div>
    <div className="buttons">
      <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" className="icon-link" rel="noreferrer">
        <button className="icon-button">
          <img src={linkedinIcon} alt="Your SVG" className="icons" />
        </button>
      </a>
      <a href="mailto:youremail@example.com" className="icon-link">
        <button className="icon-button">
          <img src={EmailIcon} alt="Your SVG" className="icons" />
        </button>
      </a>
      <a href="https://github.com/yourgithub" target="_blank" className="icon-link" rel="noreferrer">
        <button className="icon-button">
          <img src={githubIcon} alt="Your SVG" />
        </button>
      </a>
      <a href="/path-to-your-resume.pdf" target="_blank" className="resume-button">
        <button className="icon-button">
          <img src={githubIcon} alt="Your SVG" className="icons github" />
          Resume
        </button>
      </a>
    </div>
  </div>
  )  
}

export default Sidebar;
