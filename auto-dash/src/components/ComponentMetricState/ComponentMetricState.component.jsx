import React from "react";
import "./ComponentMetricState.styles.scss";
import LinearProgress from "@mui/material/LinearProgress";

const ComponentMetricState = ({
  icon,
  name,
  carPart,
  state,
  percentage,
  color,
}) => {
  return (
    <div className="comp-metric-state-container">
      <div className="icon">{icon}</div>
      <div className="metric-name">{name}</div>
      <div className="comp-state">
        <span className="car-part">{carPart}</span>
        <div className="vr"></div>
        <span className="part-state">{state}</span>
      </div>
      <LinearProgress
        sx={{
          backgroundColor: `#e0e0e0
`,
          "& .MuiLinearProgress-bar": {
            backgroundColor: `rgb(${color})`,
          },
        }}
        variant="determinate"
        value={percentage}
      />
    </div>
  );
};

export default ComponentMetricState;
