import { Link } from "react-router-dom";
import React from 'react';
import '../css/LeftSidebar.css'; // Optional: for custom styling

function LeftSidebar() {
  return (
    <div className="sidebar left">
      <h3>Left Sidebar</h3>
      <ul>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact-form">Contact</Link>
      </ul>
    </div>
  );
}

export default LeftSidebar;
