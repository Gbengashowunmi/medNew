import React from "react";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
// import ProductCard from "./productCard/ProductCard";
import TeamMember from "./TeamMember";
export default function TeamSlide() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>

      <div className="item">
        <TeamMember
          image="/images/MD-PIX-2.jpeg"
          name="REJOICE AZODO-PAUL"
          position="MANAGING DIRECTOR"
        />
      </div>

      <div className="item">
        <TeamMember
          image="/images/VianneyMobelus.jpeg"
          name="Vianney Mobelus"
          position="International sales"
        />
      </div>
      <div className="item">
        <TeamMember
          image="/images/DareAfolabi.jpeg"
          name="Dare Afolabi"
          position="Financial Consultant"
        />
      </div>
      <div className="item">
        <TeamMember
          image="/images/ESTHER.jpg"
          name="GODWINS ESTHER"
          position="BUSINESS DEV. MANAGER"
        />
      </div>
    </Slider>
  );
}
