import React from "react";
import "./OrderChart.styles.scss";

import OrderChartIcon from "../../Assets/OrderChartIcon.png";

const OrderChart = () => {
  return (
    <div className="order-chart-container">
      <div className="title">Your Order</div>
      <div className="order-metric">
        <div className="img-container">
          <img src={OrderChartIcon} alt="" />
        </div>
        <span className="metric-name">Service</span>
        <span className="metric-name">Time</span>
        <span className="metric-value">5, 2h</span>
      </div>
    </div>
  );
};

export default OrderChart;
