import React from "react";
import CustomLink from "../../components/CustomLink/CustomLink.component";
import "./SettingsPage.styles.scss";

import { Outlet } from "react-router-dom";

const SettingsPage = () => {
  return (
    <div className="settings-page-container">
      <div className="title">Settings</div>
      <div className="tabs-container">
        <CustomLink to="/home/settings/details">My Details</CustomLink>
        <CustomLink to="/home/settings/profile">Profile</CustomLink>
        <CustomLink to="/home/settings/password">Password</CustomLink>
        <CustomLink to="/home/settings/email">Email</CustomLink>
        <CustomLink to="/home/settings/notification">Notification</CustomLink>
      </div>
      <div className="selected-content">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsPage;
