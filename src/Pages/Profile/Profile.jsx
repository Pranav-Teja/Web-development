import React from 'react';
import './Profile.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Profile = () => {
  return (
    <>
    
    <Navbar />
    <div className="profile-container">
      
      
      {/* Profile Info Section */}
      <div className="profile-info">
        {/* Profile Picture */}
        <div className="profile-picture">
          <img src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=1024x1024&w=is&k=20&c=8mgK2Kq73o8DIjazvLmEGkhx2p_7P5r3mvpbIM6q5cA=" alt="Profile" />
        </div>

        {/* Basic Info */}
        <div className="profile-details">
          <h1>John Doe</h1>
          <h2>Software Engineer | Full-Stack Developer</h2>
          <p>Location: San Francisco, CA</p>
          <p>Email: john.doe@example.com</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="bio-section">
        <h2>About Me</h2>
        <p>
          Passionate software engineer with 5+ years of experience in developing 
          high-quality web applications using the MERN stack. Enthusiastic about 
          learning new technologies and building scalable software solutions.
        </p>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills & Endorsements</h2>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML/CSS</li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="experience-section">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Engineer at ABC Corp</h3>
          <p>January 2020 - Present</p>
          <p>Working on building scalable web applications and contributing to full-stack development using React, Node.js, and MongoDB.</p>
        </div>
        <div className="experience-item">
          <h3>Front-End Developer at XYZ Inc</h3>
          <p>June 2017 - December 2019</p>
          <p>Developed and optimized UI components using React and managed state using Redux. Contributed to the company’s growth with various projects.</p>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>BS in Computer Science</h3>
          <p>FAST University, 2016 - 2020</p>
        </div>
      </div>

    </div>

    <Footer />
    </>
  );
};

export default Profile;
