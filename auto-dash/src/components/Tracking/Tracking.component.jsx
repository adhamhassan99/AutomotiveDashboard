import React from "react";
import "./Tracking.styles.scss";

import TrackingImg from "../../Assets/Tracking.png";
const Tracking = () => {
  return (
    <div className="tracking-container">
      <div className="title">Tracking History</div>
      <img src={TrackingImg} alt="" />
    </div>
  );
};

export default Tracking;
