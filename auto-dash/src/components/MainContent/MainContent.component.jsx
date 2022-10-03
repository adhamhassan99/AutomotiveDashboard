import React from "react";

import "./MainContent.styles.scss";
import CardMetricData from "../../Assets/Data/CardMetricData";
import MetricCard from "../MetricCard/MetricCard.component";

const MainContent = () => {
  return (
    <div className="main-content-container">
      <div className="metrics-container">
        {CardMetricData.map((e) => (
          <MetricCard
            key={e.id}
            icon={e.icon}
            title={e.title}
            percentage={e.percentage}
            chart={e.chart}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
