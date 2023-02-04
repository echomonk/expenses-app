import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  // Sets the height of the bar fill initially to 0
  let barFillHeight = "0%";

  // If the max value is greater than 0, calculates the height of the bar fill
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}>
          {}
        </div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
