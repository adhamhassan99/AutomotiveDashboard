import React from "react";
import Address from "../Address/Address.component";
import ProfileInput from "../ProfileInput/ProfileInput.component";
import SettingsPhoto from "../SettingsPhoto/SettingsPhoto.component";
import "./Profile.styles.scss";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="header">
        <h1 className="title">Profile</h1>
        <span className="sub-title">
          Update your photo and personal details here.
        </span>
        <hr className="horz-line" />
      </div>
      <Address />
      <hr className="horz-line" />
      <SettingsPhoto />
      <hr className="horz-line" />
      <div className="profile-footer-container">
        <h1 className="title">Social Profiles</h1>
        <div className="profiles">
          <ProfileInput inputType="text" placeholder="facebook.com/" />
          <ProfileInput inputType="text" placeholder="twitter.com/" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
