import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Please login to your account</h1>
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
  );
}

export default Login;
