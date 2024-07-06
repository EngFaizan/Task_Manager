import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => handleNavigation('/')}>Task Manager</div>
      <div className="navbar-links">
        <div onClick={() => handleNavigation('/')}>Home</div>
        <div onClick={() => handleNavigation('/tasks')}>Tasks</div>
        <div onClick={() => handleNavigation('taskform')}>Create Task</div>
        <div onClick={() => handleNavigation('/about')}>About Us</div>
      </div>
    </nav>
  );
};

export default Navbar;
