import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="user">
          <span>
            <i className="fa-solid fa-user" />
            <div className="identifier">
              <h3>kadji alan</h3>
              <p>alankadji@gmail.com</p>
            </div>
          </span>
        </div>

        <h3>categories</h3>
        <ul>
          <li>
            <input type="checkbox" />
            Beer
          </li>
          <li>champagne</li>
          <li>whisky</li>
          <li>juice</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
