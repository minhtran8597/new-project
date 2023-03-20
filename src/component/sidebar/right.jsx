import React from 'react';
import './right.css';

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="sidebar-header">
        <h2>Categories</h2>
      </div>
      <div className="sidebar-content">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default RightSidebar;
