import React from "react";
import StationCard from "../StationCard/StationCard.component";
import "./ServiceStation.styles.scss";
import stationData from "./stationData";

function ServiceStation() {
  return (
    <div className="service-station-container">
      <div className="title">Service Station</div>
      <div className="station-data">
        <div className="station-row">
          {stationData.A.map((item) => {
            return <StationCard key={item.id} cardProps={item} />;
          })}
        </div>
        <div className="station-row">
          {stationData.B.map((item) => {
            return <StationCard key={item.id} cardProps={item} />;
          })}
        </div>
      </div>
      <div className="legend-container">
        <div className="legend-item">
          <div className="circle-ind clear"></div>
          <span className="ind-name">Ready</span>
        </div>
        <div className="legend-item">
          <div className="circle-ind red"></div>
          <span className="ind-name">Booked</span>
        </div>
        <div className="legend-item">
          <div className="circle-ind purple"></div>
          <span className="ind-name">Current Station</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceStation;
