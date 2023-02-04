import React from "react";
import "./AddressCard.css";

const AddressCard = (props) => {
  return (
    <div className="address-card">
      <p>Connected to: {props.address}</p>
      <button onClick={props.disconnect}>Disconnect</button>
    </div>
  );
};

export default AddressCard;
