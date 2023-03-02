import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
// import ProductCard from "../productCard/ProductCard";
import { partners } from "../Data";
import "./partner.scss"


export default function Partners() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(partners);
  }, []);

  return (
    <Slider {...settings}>
      {products.map(partner=>{
       return ( 
      <div className="partner_image" key={partner.id}>
        <div className="image">
          	<source type="image/webp" srcSet="image.webp"/>
        <img src={partner.image} alt="partner" />
        </div>
      </div>
       ) 
      })}
    </Slider>
  );
}
