import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>
        <i>Welcome to your amazing drink DB</i>
        <div className="home__button">
          <button type="button" onClick={() => navigate('/register')}>
            sign up
          </button>
          <button type="button" onClick={() => navigate('/login')}>
            sign in
          </button>
        </div>
      </h1>
    </div>
  );
}

export default Home;
