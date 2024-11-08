import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom'; // Import the Link component
import './ConnectPage.css'; // Create a new CSS file for this page

const ConnectPage = () => {
  return (
    <>
      <Navbar />
      <div className="connect-container">
        <h1 className="connect-title">Connect Graduate Students and Academics</h1>
        
        {/* Discussion Groups Section */}
        <div className="discussion-groups">
          <h2>Interest-Based Discussion Groups</h2>
          <p>Join groups based on your research interests and academic fields:</p>
          <ul className="group-list">
            <li><Link to={''} >Artificial Intelligence</Link></li>
            <li><Link to={''} >Machine Learning</Link></li>
            <li><Link to={''} >Cybersecurity</Link></li>
            <li><Link to={''} >Quantum Computing</Link></li>
            <li><Link to={''} >Data Science</Link></li>
            <li><Link to={''} >Robotics</Link></li>
          </ul>
        </div>

        {/* Additional Section: Join Group CTA */}
        <div className="cta-section">
          <h2>Join a Group Today</h2>
          <p>Stay updated on the latest research and connect with professionals in your field. It's fast, easy, and free!</p>
          <button className="cta-button">Join Now</button>
        </div>

        {/* Public Forums Section */}
        <div className="public-forums">
          <h2>Public Academic Forums</h2>
          <p>Engage in discussions and share knowledge with fellow academics:</p>
          <ul className="forum-list">
            <li><Link to={''} >General Academic Discussions</Link></li>
            <li><Link to={''}  >Research Collaboration Opportunities</Link></li>
            <li><Link to={''} >Grant Writing and Funding</Link></li>
            <li><Link to={''} >Publishing Tips and Best Practices</Link></li>
            <li><Link to={''} >Academic Job Market Insights</Link></li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConnectPage;
