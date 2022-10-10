import React from "react";

import "./ActivityCard.styles.scss";

import GraphPng from "../../Assets/GraphPng.png";

const ActivityCard = () => {
  return (
    <div className="activity-card-container">
      <div className="card-header">
        <strong>Activity</strong>
        <span className="greyed">View All</span>
      </div>
      <div className="card-data">
        <img src={GraphPng} alt="" />
      </div>
    </div>
  );
};
export default ActivityCard;
