import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import "./shortMessage.scss";
export default function ShortMessage({ description, header }) {
  return (
    <div className="short-message">
        <div className="container">

      <div className="sm-icon">
        <TbTruckDelivery className="icon" />
      </div>
      <h4>{header}</h4>
      <p>{description}.</p>
        </div>
    </div>
  );
}
