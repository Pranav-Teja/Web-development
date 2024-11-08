import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './JobOpportunities.css';

const jobData = [
  { title: 'Software Engineer', company: 'TechCorp', location: 'New York, NY', type: 'Full-time', link: '#' },
  { title: 'AI Research Intern', company: 'Innovate Labs', location: 'San Francisco, CA', type: 'Internship', link: '#' },
  { title: 'Cybersecurity Analyst', company: 'SecureTech', location: 'Remote', type: 'Full-time', link: '#' },
  { title: 'Marketing Intern', company: 'Creative Inc.', location: 'Chicago, IL', type: 'Internship', link: '#' },
  { title: 'Frontend Developer', company: 'Web Solutions', location: 'Austin, TX', type: 'Full-time', link: '#' },
];

const JobOpportunities = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredJobs = jobData.filter((job) => {
    if (filter === 'All') return true;
    return job.type === filter;
  });

  return (
    <>
      <Navbar />
      <div className="job-container">
        <h1 className="job-title">Job and Internship Opportunities</h1>
        
        {/* Job Filter Section */}
        <div className="filter-section">
          <label htmlFor="jobFilter">Filter by:</label>
          <select id="jobFilter" value={filter} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Full-time">Full-time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Job Listing Section */}
        <div className="job-list">
          {filteredJobs.map((job, index) => (
            <div key={index} className="job-card">
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p><strong>{job.type}</strong></p>
              <a href={job.link} className="apply-button">Apply Now</a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobOpportunities;
