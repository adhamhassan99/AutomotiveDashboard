import React from "react";
import "./CarDisplayCard.styles.scss";

const CarDisplayCard = ({ carName, carImg }) => {
  return (
    <div className="car-display-container">
      <div className="title">{carName}</div>
      <img src={carImg} alt="" />
    </div>
  );
};

export default CarDisplayCard;
