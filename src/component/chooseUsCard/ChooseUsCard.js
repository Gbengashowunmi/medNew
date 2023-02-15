import React from "react";
import "./chooseUsCard.scss";
export default function ChooseUsCard({title, details, image}) {
  return (
    <div className="choose-us-container">
        <div className="chooseUS-image">
            <img src={image} alt="choose" />
        </div>
        <div className="info">
      <h3>{title}</h3>
      <p>
        {details}
      </p>
      </div>
    </div>
  );
}
