import React from "react";
import CarStatisticCard from "../../components/CarStatisticCard/CarStatisticCard.component";

import "./AssetsPage.styles.scss";

const AssetsPage = () => {
  return (
    <div className="assets-page-container">
      <div className="assets-title">
        <h1>Assets</h1>
      </div>
      <div className="statistics-section-container">
        <CarStatisticCard fuel={2800} km={2338} cost={2383} speed={350} />
      </div>
    </div>
  );
};

export default AssetsPage;
