import React from "react";

import "./OffersCard.styles.scss";

import circPrice from "../../Assets/circPrice.png";
import { ReactComponent as CarIcon } from "../../Assets/CarIcon.svg";
import { ReactComponent as MoneyIcon } from "../../Assets/MoneyIcon.svg";
import { ReactComponent as ArrowIcon } from "../../Assets/ArrowIcon2.svg";
import CarWidget from "../CardWidget/CarWidget.component";

const OffersCard = ({ name, price, chart }) => {
  return (
    <div className="offers-card-container">
      <div className="details">
        <div className="name">{name}</div>
        <div className="price">
          ${price} <span className="sub">average price</span>
        </div>
        <div className="sub">
          market average is <span className="bold">$16,224</span>
        </div>
        <button className="arrowbtn">➝</button>
      </div>

      <div className="rate">
        {chart}
        <span className="sub-chart">Impression Share</span>
      </div>

      <img src={circPrice} alt="" />

      <CarWidget
        color="blue"
        icon={<CarIcon />}
        price="1,174"
        subtitle="Model Spend"
      />
      <CarWidget
        color="hotred"
        icon={<ArrowIcon />}
        price="6969"
        subtitle="Model Spend"
      />
      <CarWidget
        color="purple"
        icon={<MoneyIcon />}
        price="811"
        subtitle="Spend per Unit Turned"
      />
    </div>
  );
};

export default OffersCard;
