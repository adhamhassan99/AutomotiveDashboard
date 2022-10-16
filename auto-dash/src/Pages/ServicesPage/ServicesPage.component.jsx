import React from "react";
import Orders from "../../components/Orders/Orders.component";
import ServiceStation from "../../components/ServiceStation/ServiceStation.component";
import "./ServicesPage.styles.scss";

import compMetricData from "./compMetricData";

import ServicesDetail from "../../components/ServicesDetail/ServicesDetail.component";
import ScheduleEntry from "../../components/ScheduleEntry/ScheduleEntry.component";
import ComponentMetricState from "../../components/ComponentMetricState/ComponentMetricState.component";
import comMetricData from "./compMetricData";

function ServicesPage() {
  return (
    <div className="services-page-container">
      <div className="row">
        <div className="left-col-container">
          <ServiceStation />
          <Orders />
          <button className="services-pay-btn">Pay $86</button>
        </div>
        <div className="right-col-container">
          <div className="title">Service Required</div>
          <ServicesDetail />
          <div className="title">Service Schedule</div>
          <ScheduleEntry
            title={"Upgrading your favorite car "}
            sub={"Periodically"}
            day={"Today"}
            time={"14.00"}
            price="1,200"
          />
          <ScheduleEntry
            selected={false}
            title={"Buy spare parts for "}
            sub={"suspension"}
            day={"Today"}
            time={"14.00"}
            price="1,200"
          />
        </div>
      </div>
      <div className="metrics-container">
        {comMetricData.map((item) => {
          return <ComponentMetricState key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default ServicesPage;
