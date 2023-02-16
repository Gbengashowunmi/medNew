import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import data from "./Data";
import ProductCard from "./productCard/ProductCard";

export default function CenterSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    {products.filter(filtered=> filtered.category === "ICU Equipment").map(product=>{
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
