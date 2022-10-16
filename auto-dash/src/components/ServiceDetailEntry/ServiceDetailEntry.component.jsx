import React from "react";
import "./ServiceDetailEntry.styles.scss";

const ServiceDetailEntry = ({ img, title, price, hours }) => {
  return (
    <div className="service-detail-entry">
      <img src={img} alt="" />
      <div className="detail-values">
        <span className="title">{title}</span>
        <div className="detail-footer">
          <span className="price">Price: ${price}</span>
          <div className="vr"></div>
          <span className="hours">Processing: {hours} hours</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailEntry;
