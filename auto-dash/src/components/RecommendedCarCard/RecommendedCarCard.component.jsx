import React from "react";

import "./RecommendedCarCard.styles.scss";

import { ReactComponent as ArrowIcon } from "../../Assets/ArrowIcon.svg";

const RecommendedCarCard = ({ percentage, car, carName, price }) => {
  return (
    <div className="recommend-container">
      <div className="card-header">
        <ArrowIcon className="icon-arrow" />
        <span>{percentage}% Recommended</span>
      </div>
      <img src={car} alt="" />
      <h1>{carName}</h1>
      <div className="car-details">
        <div className="features">
          <span>a</span>
          <span>b</span>
          <span>c</span>
          <span>d</span>
        </div>
        <span className="price">${price}/h</span>
      </div>
    </div>
  );
};

export default RecommendedCarCard;
