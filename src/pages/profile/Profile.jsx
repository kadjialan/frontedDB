import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="dashboard">
      <div className="profile">
        <span>
          <i className="fa-solid fa-user-secret" />
        </span>
        <form>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            required
          />
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
          <button type="submit">Update Account</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
