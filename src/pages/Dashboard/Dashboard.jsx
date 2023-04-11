/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../api/auth';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

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

          <h2 onClick={() => navigate('ingredients')}>Ingredients</h2>

          <h2>Alcoholic</h2>

          <div className="end">
            <i className="fa-solid fa-right-from-bracket" />
            <p>log out</p>
          </div>
        </div>
      </div>
      <h3 className="admin">ADMIN</h3>
      <Outlet />
      {/*  <AddIngredients /> */}
    </div>
  );
}

export default Dashboard;
