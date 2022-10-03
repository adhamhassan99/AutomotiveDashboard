import React from "react";

import "./Statistics.styles.scss";

const Statistics = ({ title, type, description }) => {
  return (
    <div className="statistics-container">
      <div className="title">{title} Statistics</div>
      <div className="statistic-selector">
        <div className="btn-container">
          <button className="selected">Day</button>
          <button>Week</button>
          <button>Month</button>
        </div>
        <span className="description">{description}</span>
      </div>
      <div className="data-container"></div>
    </div>
  );
};

export default Statistics;
