import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/aa.png';
import bellIcon from '../assets/Group 1000004248.png';
import userIcon from '../assets/doctor-standing-with-folder-stethoscope 1.png';

const Header = ({ searchTerm, setSearchTerm }) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const toggleNotificationDropdown = () => {
    setNotificationDropdownOpen(!notificationDropdownOpen);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(debouncedTerm);
      setLoading(false);
    }, 500); // 500ms debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedTerm, setSearchTerm]);

  const handleInputChange = (e) => {
    setLoading(true);
    setDebouncedTerm(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Unlimi Logo" />
      </div>
      <div className="header-search">
        <input
          type="text"
          placeholder="Search by patients..."
          value={debouncedTerm}
          onChange={handleInputChange}
        />
        
        {loading && <div className="loader"></div>}
      </div>
      <div className="header-profile">
        <div className="notification-dropdown" onClick={toggleNotificationDropdown}>
          <img src={bellIcon} alt="Notification Bell" className="header-icon" />
          {notificationDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">No recent activities</div>
            </div>
          )}
        </div>
        <div className="profile-dropdown" onClick={toggleProfileDropdown}>
          <img src={userIcon} alt="User Profile" className="header-icon" />
          <span>Deko</span>
          <i className={`arrow-down ${profileDropdownOpen ? 'open' : ''}`}></i>
          {profileDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Profile</div>
              <div className="dropdown-item">Settings</div>
              <div className="dropdown-item">Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
