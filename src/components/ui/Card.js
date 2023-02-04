import React from "react";
import "./Card.css";

// This component is a wrapper for other components
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
