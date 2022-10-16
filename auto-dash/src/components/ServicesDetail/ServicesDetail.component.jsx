import React from "react";
import "./ServicesDetail.styles.scss";
import Entry1 from "../../Assets/Entry1.png";
import Entry2 from "../../Assets/Entry2.png";
import Entry3 from "../../Assets/Entry3.png";
import Divider1 from "../../Assets/Divider1.png";
import Divider2 from "../../Assets/Divider2.png";
import ServiceDetailEntry from "../ServiceDetailEntry/ServiceDetailEntry.component";

const ServicesDetail = () => {
  return (
    <div className="services-detail-container">
      <ServiceDetailEntry
        img={Entry1}
        title="Center Care"
        price="48"
        hours="1"
      />
      <img className="divider" src={Divider1} alt="" />
      <ServiceDetailEntry
        img={Entry2}
        title="Diagnostics"
        price="78"
        hours="2"
      />
      <img className="divider" src={Divider2} alt="" />
      <ServiceDetailEntry
        img={Entry3}
        title="Inner Cleaning"
        price="78"
        hours="1"
      />
    </div>
  );
};
export default ServicesDetail;
