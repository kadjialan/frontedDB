import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, updateUser } from '../../api/auth';

import './Profile.css';

function Profile() {
  const navigate = useNavigate();
  const [edit, setEdit] = useState();

  useEffect(() => {
    getCurrentUser().then(setEdit);
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    const { target } = e;
    const update = {
      id: edit.id,
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      phone: target.phone.value,
    };
    updateUser(update);
    navigate('/dashboard');
  };
  return (
    <div className="dashboard">
      <div className="profile">
        <form onSubmit={handleUpdate}>
          <span>
            <i className="fa-solid fa-user-secret" />
          </span>
          <input
            type="text"
            defaultValue={edit?.firstName}
            name="firstName"
            required
          />
          <input
            type="text"
            defaultValue={edit?.lastName}
            name="lastName"
            required
          />
          <input
            className=" disabled"
            type="email"
            placeholder={edit?.emailAddress}
            name="emailAddress"
            disabled
          />
          <input
            type="phone"
            defaultValue={edit?.phone}
            name="phone"
            required
          />
          <input
            className=" disabled"
            type="password"
            placeholder={edit?.apikey}
            name="apikey"
            disabled
          />
          <div className="actions-buttons">
            <button type="submit">Update</button>
            <button type="button" onClick={() => navigate('/dashboard')}>
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
