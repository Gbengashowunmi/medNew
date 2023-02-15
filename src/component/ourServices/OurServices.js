import React from "react";
import "./ourServices.scss";

export default function OurServices({head, decsription}) {
  return (
    <div className="service-container"
    data-aos="zoom-in-right"
    data-aos-offset="50"
    data-aos-delay="10"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    >
      <div className="icon"></div>
      <h4>{head}</h4>
      <p>
        {decsription}
      </p>
      {/* <button className="read-more-btn">READ MORE</button>  */}
    </div>
  );
}
