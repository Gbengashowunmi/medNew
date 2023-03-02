import React, { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import data from "../Data";
import "./productCard.scss";
export default function ProductCard({ image, productName,id }) {

  return (
      <div className="product-container">
      <div className="sale">
            <p>SALE!</p>
          </div>
        <div className="image">
          	<source type="image/webp" srcSet="image.webp"/>
          <img src={image} alt="product-pic" />
          

          <div className="add-to-cart">
    <Link to={`/details/${id}`}>
            <p>Read More</p>
          </Link>
          </div>
        </div>
        <div className="caption">
          <h5 className="product-name">{productName}</h5>
          <p className='ratings'><BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/></p>
        </div>
      </div>
  );
}
