import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import ProductCard from "./productCard/ProductCard";
import data from "./Data"
export default function FeaturedSlider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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


  const [products, setProducts] = useState([])
useEffect(()=>{
setProducts(data)
},[])
return (
  <Slider {...settings}>
    {products.filter(filtered=> filtered.area === "featured").map(product=>{
      return (
        <div className="item" key={product.id}>
          <ProductCard id={product.id} image={product.image}
            productName={product.name}
          />
        </div>
      )
    })}
    
      
    </Slider>
  );
}
