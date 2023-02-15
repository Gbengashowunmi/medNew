import React from "react";
import "./reviews.scss";
export default function Reviews({review, reviewer, reviewerWork}) {
  return (
    <div className="review-container">
      <p>
        {review}
      </p>
      <hr/>

      <div className="reviewer">
        {/* <div className="reviewer-img">
          <img src="/images/user-profile-2.png" alt="user" />
        </div> */}
        <div className="reveiwer-info">
          <h6 className="name">{reviewer}</h6>
          <p className="job">{reviewerWork}</p>
        </div>
      </div>
    </div>
  );
}