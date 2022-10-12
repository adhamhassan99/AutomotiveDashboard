import React from "react";
import "./CalendarPage.styles.scss";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";

const CalenderPage = () => {
  return (
    <div className="calender-page-container">
      <div className="calender-events-container">
        <div className="title">Calender</div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          views={"monthGridYear"}
        />
        <FullCalendar plugins={[timeGridPlugin]} initialView="timeGridDay" />
      </div>
      <div className="expanded-calender-container">
        <FullCalendar plugins={[timeGridPlugin]} initialView="timeGridDay" />
      </div>
    </div>
  );
};

export default CalenderPage;
