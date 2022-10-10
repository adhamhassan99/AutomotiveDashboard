import React from "react";
import CarDisplayCard from "../../components/CarDisplayCard/CarDisplayCard.component";
import "./SellPage.styles.scss";

import { ReactComponent as Chart1 } from "../../Assets/chartRate45.svg";
import { ReactComponent as Chart2 } from "../../Assets/chartRate55.svg";
import AudiA4 from "../../Assets/AudiA4Card.png";
import Tracking from "../../components/Tracking/Tracking.component";
import OffersCard from "../../components/OffersCard/OffersCard.component";

const SellPage = () => {
  return (
    <div className="sell-page-container">
      <div className="title">Sell Cars</div>

      <div className="cars-container">
        <CarDisplayCard carName="2022 Audi A5" carImg={AudiA4} />
        <Tracking />
      </div>
      <div className="filter">
        <div className="title">Offers</div>
      </div>
      <div className="offers-container">
        <OffersCard name="Adham Hassan" price="120,690" chart={<Chart1 />} />
        <OffersCard name="Adham Hassan" price="120,690" chart={<Chart2 />} />
      </div>
    </div>
  );
};

export default SellPage;
