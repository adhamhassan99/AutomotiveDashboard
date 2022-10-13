import React from "react";
import BillItem from "../BillItem/BillItem.component";
import OrderChart from "../OrderChart/OrderChart.component";
import "./Orders.styles.scss";

function Orders() {
  return (
    <div className="orders-container">
      <OrderChart />
      <div className="bill-items-container">
        <BillItem color={"green"} name="Brake Fluid Change" price={"32"} />
        <BillItem color={"red"} name="Diagnostics" price={"32"} />
        <BillItem color={"purple"} name="External Washing" price={"10"} />
        <BillItem className="add" name={"Add Services"} />
      </div>
    </div>
  );
}

export default Orders;
