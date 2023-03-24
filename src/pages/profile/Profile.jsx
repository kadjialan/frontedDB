import React, { useEffect, useState } from 'react';
import { getCurrentUser, updateUser } from '../../api/auth';

import './Profile.css';

function Profile() {
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
    console.log(update);
    updateUser(update);
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
            placeholder={edit?.firstName}
            name="firstName"
            required
          />
          <input
            type="text"
            placeholder={edit?.lastName}
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
          <input type="phone" placeholder={edit?.phone} name="phone" required />
          <input
            className=" disabled"
            type="password"
            placeholder={edit?.apikey}
            name="apikey"
            disabled
          />
          <div className="actions-buttons">
            <button type="submit">Update</button>
            <button type="button">cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
