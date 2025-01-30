import { Link } from "react-router-dom";
import React from 'react';
import '../css/RightSidebar.css'; // Optional: for custom styling

function RightSidebar() {
  return (
    <div className="sidebar right">
      <h3>Right Sidebar</h3>
      <ul>
        <Link className="nav-link" to="/service">Services</Link>
        <Link className="nav-link" to="/blog">Blog</Link>
        <Link className="nav-link" to="/portfolio">Portfolio</Link>
      </ul>
    </div>
  );
}

export default RightSidebar;
