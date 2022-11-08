import React from "react";

import RecommendedData from "../../Assets/Data/RecommendedData";
import RecommendedCarCard from "../../components/RecommendedCarCard/RecommendedCarCard.component";
import MainContent from "../../components/MainContent/MainContent.component";

// import { useSelector } from "react-redux";
// eslint-disable-next-line
import { getUID, getUserStatus } from "../../features/user/userSlice";

// import { Navigate } from "react-router-dom";

import "./DashboardPage.styles.scss";
import Statistics from "../../components/Statistics/Statistics.component";
import BarChart from "../../components/BarChart/BarChart.component";
import LineAreaChart from "../../components/LineAreaChart/LineAreaChart.component";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <div className="dash-main-section">
        <MainContent />
        <div className="statistics-section">
          <Statistics description="256 Miles" title="Miles">
            <BarChart />
          </Statistics>
          <Statistics orange description="256 Miles" title="Miles">
            <LineAreaChart />
          </Statistics>
        </div>
        <div className="rcmnd-cars">
          {RecommendedData.map((car) => (
            <RecommendedCarCard
              key={car.id}
              percentage={car.percentage}
              car={car.carUrl}
              carName={car.carName}
              price={car.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
