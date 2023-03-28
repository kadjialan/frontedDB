/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home1">
        <nav>
          <div className="nav__links">
            <p onClick={() => navigate('/login')}>Login</p>
            <p onClick={() => navigate('/register')}>Sign up</p>
            <p onClick={() => navigate('/home')}>Guest</p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Landing;
