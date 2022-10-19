import React from "react";
import "./CarStatisticCard.styles.scss";

import CarImg from "../../Assets/CarImg.png";

const CarStatisticCard = ({ fuel, km, cost, speed }) => {
  return (
    <div className="car-statistic-card-container">
      <div className="statistic-row">
        <div className="row-entry">
          <span className="entry-title">Fuel Usage</span>
          <span className="entry-value">{fuel} Ltr</span>
        </div>
        <div className="row-entry vr"></div>
        <div className="row-entry">
          <span className="entry-title">KM Driven</span>
          <span className="entry-value">{km} KMs</span>
        </div>
      </div>
      <div className="statistic-row">
        <div className="row-entry">
          <span className="entry-title">Total Cost</span>
          <span className="entry-value">${cost}</span>
        </div>
        <div className="row-entry vr"></div>
        <div className="row-entry">
          <span className="entry-title">Top Speed</span>
          <span className="entry-value">{speed} KM/h</span>
        </div>
      </div>

      <div className="car-img-container">
        <img className="img-element" src={CarImg} alt="" />
      </div>
    </div>
  );
};

export default CarStatisticCard;
