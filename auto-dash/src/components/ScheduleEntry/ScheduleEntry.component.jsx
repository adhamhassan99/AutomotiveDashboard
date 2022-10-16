import React from "react";
import "./ScheduleEntry.styles.scss";

const ScheduleEntry = ({ selected = true, title, day, time, price, sub }) => {
  return (
    <div className="schedule-entry-container">
      <div className="border">
        <div className={`circle ${selected ? "selected" : ""}`}></div>
      </div>
      <div className="entry-data">
        <div className="entry-title">
          {title}
          <br></br>
          {sub}
        </div>
        <div className="details">
          <div className="day-time">
            {day},{time}
          </div>
          <div className="vr"></div>
          <div className="price">Fix Price : ${price}</div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEntry;
