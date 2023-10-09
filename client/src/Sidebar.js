import React from "react";
import harshpic from "./images/harshpic.jpg"; // Replace with your image URL
import linkedinIcon from "./images/linkedin_icon.svg"; // Replace with your LinkedIn icon URL
import githubIcon from "./images/github_icon.svg"; // Replace with your GitHub icon URL
// import resumeIcon from "./images/resume_icon.png"; // Replace with your Resume icon URL
import EmailIcon from "./images/email_icon.svg"; // Import the email icon SVG

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  darkButton: {
    backgroundColor: '#333',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
   // fontFamily: 'Arial, sans-serif', // Set the desired font family
   border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  buttonText: {
    fontFamily: 'Open Sans, sans-serif', // Set the desired font family
    fontSize: '16px', // Set the desired font size
    textTransform: 'none', 
    
  },
}));
function Sidebar() {
  const classes = useStyles();
  return (
    <div className="sidebar">
    <div className="profile">
      <img src={harshpic} alt="Your Name" className="profile-image" />
    </div>
    <div className="buttons">
      <a href="https://www.linkedin.com/in/harshsingh0310/" target="_blank" className="icon-link" rel="noreferrer">
      <Button className={classes.darkButton} variant="contained" >
      <img src={linkedinIcon} alt="Your SVG" className="linkedinicon"/>
    </Button>
      </a>
      <a href="mailto:harsh.singh0310@gmail.com" className="icon-link">
      <Button className={classes.darkButton} variant="contained" >
      <img src={EmailIcon} alt="Your SVG"  className="emailicon"/>
    </Button>
      </a>
      <a href="https://github.com/lives-in-virgosupercluster" target="_blank" className="icon-link" rel="noreferrer">
      <Button className={classes.darkButton} variant="contained" >
      <img src={githubIcon} alt="Your SVG" />
    </Button>
        {/* <button className="icon-button">
          
        </button> */}
      </a>
     
    </div>
  </div>
  )  
}

export default Sidebar;
