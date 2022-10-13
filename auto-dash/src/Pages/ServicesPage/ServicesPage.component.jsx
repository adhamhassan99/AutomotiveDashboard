import React from "react";
import BillItem from "../../components/BillItem/BillItem.component";
import Orders from "../../components/Orders/Orders.component";
import ServiceStation from "../../components/ServiceStation/ServiceStation.component";
import "./ServicesPage.styles.scss";

function ServicesPage() {
  return (
    <div className="services-page-container">
      <div className="left-col-container">
        <ServiceStation />
        <Orders />
      </div>
    </div>
  );
}

export default ServicesPage;
