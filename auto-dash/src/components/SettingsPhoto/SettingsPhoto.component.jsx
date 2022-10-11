import React from "react";
import "./SettingsPhoto.styles.scss";

const SettingsPhoto = () => {
  return (
    <div className="settings-photo-container">
      <div className="description">
        <span className="bold">Your Photo</span>
        <div className="subtitle">This will be displayed on your profile.</div>
      </div>
      <img src="" alt="alo" className="profile-pic" />
    </div>
  );
};
export default SettingsPhoto;
