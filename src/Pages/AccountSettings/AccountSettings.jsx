import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './AccountSettings.css';

const AccountSettings = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    pushNotifications: false
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevState => ({ ...prevState, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword(prevState => ({ ...prevState, [name]: value }));
  };

  const handleNotificationsChange = (e) => {
    const { name, checked } = e.target;
    setNotifications(prevState => ({ ...prevState, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profile);
    console.log("Password updated:", password);
    console.log("Notifications updated:", notifications);
  };

  return (
    <>
    <Navbar />
      <div className="account-settings-container">
      <h2 className="section-title">Manage Account Settings</h2>
      
      {/* Profile Section */}
      <div className="profile-section">
        <h3>Update Profile Details</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={profile.name} 
              onChange={handleProfileChange}
              required 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={profile.email} 
              onChange={handleProfileChange}
              required 
            />
          </label>
          <label>
            Phone:
            <input 
              type="text" 
              name="phone" 
              value={profile.phone} 
              onChange={handleProfileChange} 
            />
          </label>
        </form>
      </div>

      {/* Change Password Section */}
      <div className="password-section">
        <h3>Change Password</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Current Password:
            <input 
              type="password" 
              name="currentPassword" 
              value={password.currentPassword} 
              onChange={handlePasswordChange}
              required 
            />
          </label>
          <label>
            New Password:
            <input 
              type="password" 
              name="newPassword" 
              value={password.newPassword} 
              onChange={handlePasswordChange}
              required 
            />
          </label>
          <label>
            Confirm Password:
            <input 
              type="password" 
              name="confirmPassword" 
              value={password.confirmPassword} 
              onChange={handlePasswordChange}
              required 
            />
          </label>
        </form>
      </div>

      {/* Notification Preferences Section */}
      <div className="notifications-section">
        <h3>Manage Notifications</h3>
        <label>
          <input 
            type="checkbox" 
            name="emailUpdates" 
            checked={notifications.emailUpdates} 
            onChange={handleNotificationsChange} 
          />
          Email Updates
        </label>
        <label>
          <input 
            type="checkbox" 
            name="pushNotifications" 
            checked={notifications.pushNotifications} 
            onChange={handleNotificationsChange} 
          />
          Push Notifications
        </label>
      </div>

      <button className="save-button" onClick={handleSubmit}>Save Changes</button>
    </div>
    <Footer />
    </>
  
  );
};

export default AccountSettings;
