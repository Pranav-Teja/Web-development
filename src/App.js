import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/Home';  
import Registration from './Pages/Registration/Registration';
import ConnectPage from './Pages/ConnectPage/ConnectPage';
import CareerDevelopment from './Pages/CareerDevelopment/CareerDevelopment';
import JobOpportunities from './Pages/JobOpportunities/JobOpportunities';
import AcademicEvents from './Pages/AcademicEvents/AcademicEvents';
import MentorshipProgram from './Pages/MentorshipProgram/MentorshipProgram';
import AccountSettings from './Pages/AccountSettings/AccountSettings';
import ContactUs from './Pages/ContactUs/ContactUs';
import Profile from './Pages/Profile/Profile';


import './App.css';  // Global CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/career-development" element={<CareerDevelopment />} />
          <Route path="/job-opportunities" element={<JobOpportunities />} />
          <Route path="/academic-events" element={<AcademicEvents />} />
          <Route path="/mentorship-program" element={<MentorshipProgram />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />

          
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
