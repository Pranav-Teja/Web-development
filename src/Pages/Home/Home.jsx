import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Campus Connect</h1>
            <p>Your platform for student networking, career growth, and academic collaboration.</p>
            <div className="hero-buttons">
              <Link to="/job-opportunities" className="hero-btn">Explore Jobs</Link>
              <Link to="/mentorship-program" className="hero-btn">Join Mentorship Program</Link>
            </div>
          </div>
        </section>

        {/* Conference Details & Call for Papers */}
        <section className="conference-details">
          <h2>Conference 2024: Call for Papers & Registration</h2>
          <p>Be part of the annual Conference 2024 with opportunities for networking, submitting research papers, and exploring internships.</p>
          <div className="quick-links">
            <Link to="/call-for-papers" className="quick-link">Call for Papers</Link>
            <Link to="/registration" className="quick-link">Register Now</Link>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="news-section">
          <h2>Latest News & Announcements</h2>
          <div className="news-cards">
            <div className="news-card">
              <h3>New Keynote Speaker: Dr. Jane Smith</h3>
              <p>AI Expert Dr. Jane Smith joins the conference as a keynote speaker.</p>
            </div>
            <div className="news-card">
              <h3>Extended Paper Submission Deadline</h3>
              <p>Submit your research by the new deadline: October 15, 2024.</p>
            </div>
            <div className="news-card">
              <h3>Data Science Hackathon</h3>
              <p>Participate in the upcoming Hackathon with top prizes on December 12, 2024.</p>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="quick-links-section">
          <h2>Quick Links</h2>
          <div className="link-cards">
            <div className="link-card">
              <h3>View Jobs and Internships</h3>
              <p>Discover opportunities for career advancement.</p>
              <Link to="/job-opportunities" className="link-button">Explore Now</Link>
            </div>
            <div className="link-card">
              <h3>Mentorship Program</h3>
              <p>Find a mentor to guide your academic and career path.</p>
              <Link to="/mentorship-program" className="link-button">Join Now</Link>
            </div>

            <div className="link-card">
              <h3>Academic Events</h3>
              <p>Get a complete pathway for the academic events.</p>
              <Link to="/academic-events" className="link-button">Check Events</Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default HomePage;
