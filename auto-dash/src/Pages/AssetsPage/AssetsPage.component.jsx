import React from "react";
import ActivityCard from "../../components/ActivityCard/ActivityCard.component";
import CarStatisticCard from "../../components/CarStatisticCard/CarStatisticCard.component";

import Notes from "../../components/Notes/Notes.component";
import Sensors from "../../components/Sensors/Sensors.component";

import "./AssetsPage.styles.scss";

const AssetsPage = () => {
  return (
    <div className="assets-page-container">
      <div className="assets-title">
        <h1>Assets</h1>
      </div>
      <div className="statistics-section-container">
        <CarStatisticCard fuel={2800} km={2338} cost={2383} speed={350} />
        <div className="assets-side-statistics">
          <div className="activity">
            <ActivityCard />
          </div>
          <div className="mid-section">
            <Notes />
            <Sensors />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsPage;
