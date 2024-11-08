import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './MentorshipProgram.css';

const MentorshipProgram = () => {
  return (
    <>
      <Navbar />
      <div className="mentorship-container">
        <h1 className="mentorship-title">Join Our Mentorship Program</h1>

        {/* Program Introduction */}
        <div className="mentorship-intro">
          <p>
            Our Mentorship Program connects students and professionals with experienced mentors in various academic
            fields. Through personalized guidance, mentors help students develop their careers, overcome academic
            challenges, and achieve their personal and professional goals.
          </p>
          <p>
            Whether you’re looking for advice on research, publishing, career development, or work-life balance, our
            mentors are here to support you.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mentorship-benefits">
          <h2>Program Benefits</h2>
          <ul>
            <li>Personalized guidance from experienced mentors</li>
            <li>Career development and networking opportunities</li>
            <li>Help with research and publishing strategies</li>
            <li>Access to workshops and academic resources</li>
            <li>Support in finding internships and job opportunities</li>
          </ul>
        </div>

        {/* Application Process Section */}
        <div className="application-process">
          <h2>Application Process</h2>
          <ol>
            <li>Fill out the online application form with your academic and career interests.</li>
            <li>We will match you with a mentor based on your area of study and professional goals.</li>
            <li>Once matched, you'll receive an email with your mentor's contact information.</li>
            <li>Start your mentorship journey with a first meeting, either online or in person.</li>
          </ol>
          <p>
            <strong>Application Deadline:</strong> November 30, 2024
          </p>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <p>Ready to grow and learn with our mentors? Apply now!</p>
          <button className="apply-button">Apply for Mentorship</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MentorshipProgram;
