import React from "react";

import "./Statistics.styles.scss";

const Statistics = ({ title, type, description, children, orange }) => {
  return (
    <div className="statistics-container">
      <div className="title">{title} Statistics</div>
      <div className="statistic-selector">
        <div className="btn-container">
          <button className={`selected ${orange ? `orangeColor` : null}`}>
            Day
          </button>
          <button>Week</button>
          <button>Month</button>
        </div>
        <span className="description">{description}</span>
      </div>
      <div className="data-container">{children}</div>
    </div>
  );
};

export default Statistics;
