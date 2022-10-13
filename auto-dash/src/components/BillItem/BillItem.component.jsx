import React from "react";
import "./BillItem.styles.scss";

function BillItem({ color, name, price, className }) {
  return (
    <div className={`bill-item-container ${className ? className : ""}`}>
      <div className="ind-name-container">
        <div className={`circle-ind ${color}`}></div>
        <div className="name">{name}</div>
      </div>
      <div className="price">${price}</div>
    </div>
  );
}

export default BillItem;
