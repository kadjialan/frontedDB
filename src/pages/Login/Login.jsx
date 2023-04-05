/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import { saveToken } from '../../utils';
import './Login.css';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      emailAddress: target.emailAddress.value,
      password: target.password.value,
    };

    setIsLoading(true);
    setError('');
    try {
      const { data } = await login(user.emailAddress, user.password);
      saveToken(data.token);
      navigate('/dashboard');
    } catch (e) {
      if (e.response.status === 401) {
        setError('Invalid username or password');
      }
    } finally {
      setIsLoading(false);
    }
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
          <button type="button" onClick={() => navigate('/dashboard')}>
            guest
          </button>
        </div>
      </nav>

      <div className="form">
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        <div className="register">
          <form onSubmit={handleSubmit}>
            <h1>
              <i>Login</i>
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
