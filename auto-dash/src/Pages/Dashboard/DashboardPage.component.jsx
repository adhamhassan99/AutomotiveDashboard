import React from "react";
import MainContent from "../../components/MainContent/MainContent.component";
import MetricCard from "../../components/MetricCard/MetricCard.component";
import SideBar from "../../components/SideBar/SideBar.component";

import "./DashboardPage.styles.scss";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <SideBar />
      <MainContent />
    </div>
  );
};

export default DashboardPage;
