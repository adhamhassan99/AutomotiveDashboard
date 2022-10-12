import React from "react";
import "./SettingsPhoto.styles.scss";

import { useSelector } from "react-redux";

const SettingsPhoto = () => {
  const userImg = useSelector((state) => state.user.userImg);
  console.log(userImg);
  return (
    <div className="settings-photo-container">
      <div className="description">
        <span className="bold">Your Photo</span>
        <div className="subtitle">This will be displayed on your profile.</div>
      </div>
      <img
        referrerPolicy="no-referrer"
        src={userImg}
        alt=""
        className="profile-pic"
      />
      <div className="img-controls">
        <button className="delete-img">Delete</button>
        <div className="control">
          <label htmlFor="profileImg">Update</label>
          <input
            type="file"
            id="profileImg"
            name="profileImg"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
    </div>
  );
};
export default SettingsPhoto;
