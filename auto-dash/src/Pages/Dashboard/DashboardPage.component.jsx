import React from "react";

import RecommendedData from "../../Assets/Data/RecommendedData";
import RecommendedCarCard from "../../components/RecommendedCarCard/RecommendedCarCard.component";
import MainContent from "../../components/MainContent/MainContent.component";
import SideBar from "../../components/SideBar/SideBar.component";
import NavBar from "../../components/NavBar/NavBar.component";

import { useSelector } from "react-redux";
import { getUID, getUserStatus } from "../../features/user/userSlice";

import "./DashboardPage.styles.scss";
import Statistics from "../../components/Statistics/Statistics.component";

const DashboardPage = () => {
  const userLoggedIn = useSelector(getUserStatus);
  const userUID = useSelector(getUID);
  if (!userLoggedIn) {
    return (
      <div className="dashboard-container">
        <SideBar />
        <div className="main-section">
          <NavBar notf={true} imageUrl="nth" />
          <MainContent />
          <div className="statistics-section">
            <Statistics description="256 Miles" title="Miles" />
            <Statistics description="256 Miles" title="Miles" />
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
  }
};

export default DashboardPage;
