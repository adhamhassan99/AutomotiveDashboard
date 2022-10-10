import React from "react";
import "./CarWidget.styles.scss";

const CarWidget = ({ icon, price, subtitle, color }) => {
  return (
    <div className={`car-widget-container`}>
      <div className="icon">{icon}</div>
      <div className={`widget-price ${color}`}>${price}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
};

export default CarWidget;
