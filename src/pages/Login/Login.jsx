import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      emailAddress: target.emailAddress.value,
      password: target.password.value,
    };

    console.log(user);
  };
  return (
    <div className="login">
      <nav>
        <div className="nav__left">
          <i className="fa-solid fa-champagne-glasses" />
          <h1>
            <i>Welcome to your drinks DB</i>
          </h1>
        </div>
        <div className="nav__buttons">
          <button type="button" onClick={() => navigate('/register')}>
            sign up
          </button>
          <button type="button">guest</button>
        </div>
      </nav>

      <div className="form">
        <div className="register">
          <form onSubmit={handleSubmit}>
            <h1>
              <i> Please login to your account</i>
            </h1>
            <input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
