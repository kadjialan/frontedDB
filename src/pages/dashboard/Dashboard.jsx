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
          <ul>
            <li>
              <input type="checkbox" />
              Beer
            </li>
            <li>
              <input type="checkbox" />
              Champagne
            </li>
            <li>
              <input type="checkbox" />
              Whisky
            </li>
            <li>
              <input type="checkbox" />
              Juice
            </li>
            <li>
              <input type="checkbox" />
              Water
            </li>
            <li>
              <input type="checkbox" />
              Tea
            </li>
          </ul>

          <h2>Glasses</h2>
          <ul>
            <li>
              <input type="checkbox" />
              Tall
            </li>
            <li>
              <input type="checkbox" />
              Medium
            </li>
            <li>
              <input type="checkbox" />
              small
            </li>
          </ul>

          <h2>Ingredients</h2>
          <ul>
            <li>
              <input type="checkbox" />
              Corn flour
            </li>
            <li>
              <input type="checkbox" />
              Fruits
            </li>
            <li>
              <input type="checkbox" />
              yeast
            </li>
            <li>
              <input type="checkbox" />
              sugar
            </li>
            <li>
              <input type="checkbox" />
              Water
            </li>
            <li>
              <input type="checkbox" />
              Caffeine
            </li>
          </ul>

          <h2>Alcoholic</h2>
          <ul>
            <li>
              <input type="checkbox" />
              Yes
            </li>
            <li>
              <input type="checkbox" />
              No
            </li>
          </ul>

          <div className="end">
            <i className="fa-solid fa-right-from-bracket" />
            <p>log out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
