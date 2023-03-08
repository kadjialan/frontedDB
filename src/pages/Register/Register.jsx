import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      emailAddress: target.emailAddress.value,
      phone: target.phone.value,
      password: target.password.value,
      passwordConfirmation: target.passwordConfirmation.value,
    };

    console.log(data);
  };
  return (
    <div className="home">
      <div className="home__content">
        <div className="register">
          <form onSubmit={handleSubmit}>
            <h1>
              <i> Please create your account</i>
            </h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              required
            />
            <input type="phone" placeholder="Phone Number" name="phone" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <input
              type="password"
              placeholder="Password Confirmation"
              name="passwordConfirmation"
              required
            />
            <button type="submit">Create Account</button>
            <div className="account">
              <h3>
                <i>Already have an account</i>
              </h3>
              <button type="button" onClick={() => navigate('/')}>
                sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
