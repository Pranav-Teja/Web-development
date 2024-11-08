import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './CareerDevelopment.css';
import { Link } from 'react-router-dom';

const CareerDevelopment = () => {
  return (
    <>
      <Navbar />
      <div className="career-container">
        <h1 className="career-title">Career Development Resources</h1>
        
        {/* Articles Section */}
        <div className="career-section">
          <h2>Career Growth Articles</h2>
          <p>Explore our curated list of articles that provide insights and tips for professional development:</p>
          <ul className="career-list">
            <li><Link to={''}>How to Build a Successful Career in AI</Link></li>
            <li><Link to={''}>Networking Strategies for Graduate Students</Link></li>
            <li><Link to={''}>Top 10 Skills for the Tech Industry in 2024</Link></li>
            <li><Link to={''}>Balancing Academic Research and Industry Work</Link></li>
            <li><Link to={''}>Preparing for a Career in Cybersecurity</Link></li>
          </ul>
        </div>

        {/* Mentorship Programs Section */}
        <div className="career-section">
          <h2>Mentorship Programs</h2>
          <p>Join one of our mentorship programs to gain personalized guidance from experienced professionals:</p>
          <ul className="career-list">
            <li><Link to={''}>AI and Machine Learning Mentorship Program</Link></li>
            <li><Link to={''}>Cybersecurity Career Mentorship</Link></li>
            <li><Link to={''}>Women in STEM Mentorship</Link></li>
            <li><Link to={''}>Graduate Student Career Coaching</Link></li>
          </ul>
          <button className="cta-button">Join a Mentorship Program</button>
        </div>

        {/* Career Tools Section */}
        <div className="career-section">
          <h2>Career Tools and Resources</h2>
          <p>Access a variety of tools designed to help you advance your career:</p>
          <ul className="career-list">
            <li><Link to={''}>Resume Builder</Link></li>
            <li><Link to={''}>Interview Preparation Resources</Link></li>
            <li><Link to={''}>Job Search Platforms</Link></li>
            <li><Link to={''}>Career Development Webinars</Link></li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareerDevelopment;
