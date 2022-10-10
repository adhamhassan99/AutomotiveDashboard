import React from "react";
import "./Reminder.styles.scss";

import { useState } from "react";

const remindersData = [
  {
    id: 1,
    description: "Urgent Safety Recall",
    due: "06/04/2022",
    overdue: "08/04/2022",
    Notify: "David Demo",
    status: "Completed",
  },
  {
    id: 2,
    description: "Urgent Safety Recall",
    due: "06/04/2022",
    overdue: "08/04/2022",
    Notify: "David Demo",
    status: "Completed",
  },
];

const Reminder = () => {
  const [reminders, setReminders] = useState(remindersData);

  return (
    <div className="reminder-container">
      <div className="container-header">
        <span className="title">Reminder</span>
        <button className="add-btn">+ Add New</button>
      </div>
      <div className="row index">
        <span className="index">Description</span>
        <span className="index">Due</span>
        <span className="index">Overdue</span>
        <span className="index">Notify</span>
        <span className="index">Status</span>
      </div>
      {reminders.map((entry) => {
        return (
          <div key={entry.id} className="row">
            <span className="row">{entry.description}</span>
            <span className="row">{entry.due}</span>
            <span className="row">{entry.overdue}</span>
            <span className="row">{entry.Notify}</span>
            <span className="row">{entry.status}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Reminder;
