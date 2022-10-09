import React from "react";
import "./Sensors.styles.scss";

import { ReactComponent as GraphSvg } from "../../Assets/GraphSvg.svg";
import { ReactComponent as GraphSvgOff } from "../../Assets/GraphSvgOff.svg";

import { useState } from "react";

import ArrowImg from "../../Assets/ArrowImg.png";

var sensorData = [
  {
    id: 1,
    title: "Asset - Fuel Consumed",
    unit: "(10)",
    checked: false,
  },
  {
    id: 2,
    title: "Asset - Odometer",
    unit: "(km)",
    checked: false,
  },
  {
    id: 3,
    title: "Asset - Runtime",
    unit: "(km)",
    checked: false,
  },
  {
    id: 4,
    title: "Asset - Speed",
    unit: "(hr)",
    checked: false,
  },
  {
    id: 5,
    title: "Engine Temperature",
    unit: "(deg C)",
    checked: false,
  },
];

function Sensors() {
  const [sensorState, setSensorState] = useState(sensorData);

  const handleCheck = (e) => {
    const id = parseInt(e.target.id);
    var filteredArray = sensorData.filter((e) => {
      if (e.id === id) {
        e.checked = !e.checked;
      }
      return e;
    });

    setSensorState(filteredArray);
  };

  return (
    <div className="sensors-container">
      <div className="sensors-header">
        <strong className="title">Available Sensors</strong>
        <span className="drop-down">
          Assets <img src={ArrowImg} alt="alo" />
        </span>
      </div>
      <hr />
      <div className="sensor-list-container">
        {sensorState.map((entry) => (
          <div
            key={entry.id}
            className={`list-entry ${entry.checked ? "checked" : ""}`}
          >
            {entry.checked ? (
              <input
                onChange={handleCheck}
                type="checkbox"
                id={entry.id}
                name={entry.title}
                checked
              />
            ) : (
              <input
                onChange={handleCheck}
                type="checkbox"
                id={entry.id}
                name={entry.title}
              />
            )}

            <label className="sensor-label" htmlFor={entry.id}>
              {entry.title}
            </label>
            {entry.checked ? (
              <GraphSvg className="graph-icon" />
            ) : (
              <GraphSvgOff />
            )}
          </div>
        ))}
      </div>
      <button className="sensor-btn">See All</button>
    </div>
  );
}

export default Sensors;
