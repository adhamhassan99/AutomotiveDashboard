import React from "react";
import MainContent from "../../components/MainContent/MainContent.component";
import SideBar from "../../components/SideBar/SideBar.component";
import { useSelector } from "react-redux";

import { getUID, getUserStatus } from "../../features/user/userSlice";

import "./DashboardPage.styles.scss";

const DashboardPage = () => {
  const userLoggedIn = useSelector(getUserStatus);
  const userUID = useSelector(getUID);
  if (!userLoggedIn) {
    return (
      <div className="dashboard-container">
        <SideBar />
        <MainContent />
      </div>
    );
  }
};

export default DashboardPage;
