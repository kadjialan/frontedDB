import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../../api/auth';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState();

  useEffect(() => {
    getCurrentUser().then(setUser);
  });
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="user">
          <span>
            <i className="fa-solid fa-user" />
            <div className="identifier">
              <p>
                {user?.firstName} {user?.lastName}
              </p>
              <p>{user?.emailAddress}</p>
            </div>
          </span>
        </div>
        <div className="content">
          <h2>Categories</h2>

          <h2>Glasses</h2>

          <h2>Ingredients</h2>

          <h2>Alcoholic</h2>

          <div className="end">
            <i className="fa-solid fa-right-from-bracket" />
            <p>log out</p>
          </div>
        </div>
      </div>
      <h3 className="admin">ADMIN</h3>

      <table className="ingredient-table">
        <caption>ingredients</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Freecode Camp</td>
            <td>Freecode Camp</td>
          </tr>
          <tr>
            <td>Freecode Camp</td>
            <td>Freecode Camp</td>
          </tr>
          <tr>
            <td>Freecode Camp</td>
            <td>Freecode Camp</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
