import React from "react";

import "./MetricCard.styles.scss";

const MetricCard = ({ title, percentage, icon, chart }) => {
  return (
    <div className="metric-card-container">
      <div className="icon">{icon}</div>
      <div className="title"> {title}</div>
      <div className="perc">{percentage}%</div>
      <div className="chart">{chart}</div>
    </div>
  );
};

export default MetricCard;
