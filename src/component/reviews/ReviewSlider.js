import React from "react";
import Slider from "react-slick";
import Reviews from "./Reviews";

export default function ReviewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className="item">
        <Reviews review="Medpau has really good Products and the Service is Excellent" reviewer=" Dr. Ojo" reviewerWork="" />
      </div>
      <div className="item">
        <Reviews review="The prices are really pocket friendly and encouraging" reviewer="Dr. Abene " />
      </div>
      <div className="item">
        <Reviews review="Your team is great. They truly understand the equipment 100%. It's worth doing business with you." reviewer="Dr. Love Grace"  />
      </div>
      <div className="item">
        <Reviews review="Great products and services. The cost of products is reasonable too" reviewer="Dr Umezurike" />
      </div>
     
    </Slider>
  );
}
