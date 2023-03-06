import React from 'react';
import './Register.css';

function Register() {
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
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Please create your account</h1>
        <input type="text" placeholder="First Name" name="firstName" required />
        <input type="text" placeholder="Last Name" name="lastName" required />
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
      </form>
    </div>
  );
}

export default Register;
