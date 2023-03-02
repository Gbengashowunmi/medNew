import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../component/Data";
import HeadFoot from "../../component/HeadFoot";
import ItemCard from "../../component/ItemCard/ItemCard";
import "./ProductDetails.scss";

export default function ProductDetail() {
  const [products, setProducts] =useState([])
  const [active, setActive] = useState("feature")
  const [tab, setTab] = useState("feature")

  const handleClick = (tab)=>{
    setTab(tab)
    setActive(tab)
  }

  useEffect(()=>{
  setProducts(data)
  },[])
  const {id} = useParams()
  const [product] = data.filter(singleProduct => singleProduct.id === +id)

  return (
    <HeadFoot pageTitle={id | product.name} description={`Detail page for ${product.name} with id ${id} product from medpau international Limited`}>
      <div className="product-page">
        <section className="hero-section">
          <div className="product-img">
          	<source type="image/webp" srcSet="image.webp"/>
              <img
                src={product.image}
                alt="product"
              />
          </div>
          <div className="product-info">
            <h2>{product.name}</h2>
           {product.brand && <p>
              Brand: <span>{product.brand}</span>
            </p>
}
           {product.description && <p>
              Decsription: <span>{product.description}</span>
            </p>
}
            <p>Stock Available</p>
            <Link to ={`//api.whatsapp.com/send?phone=2349085323596&text=Hi+MedPau+International.+I'm+interested+in+buying+${product.name}.+How+much+does+it+cost?`} target="blank" rel="noopener noreferrer"
            // "//paystack.com/pay/medpau-buy-item"
            ><Button variant="contained" className="addtocart-btn">
              Place Order
            </Button>
            </Link>
          </div>
        </section>
        <div className="head">
          <p onClick={()=>handleClick("feature")} className={active==="feature"? "active": ""}>Feature</p>
          {product.specifications&&<p onClick={()=>handleClick("specification")} className={active==="specification"? "active": ""}>Techincal Specification</p>}
         {product.review && <p onClick={()=>handleClick("review")} className={active==="review"? "active": ""}>Review</p>}
        </div>
        <hr />

        <div className="specification" hidden={tab!=="feature"}>
          <ul>
            {product.features&&product.features.map(feature=>{
              return (<li>{feature}</li>);
            })}
          </ul>
        </div>
        <div className="specification" hidden={tab!=="specification"}>
        <ul>
            {product.specifications&&product.specifications.map(specification=>{
              return (<li>{specification}</li>);
            })}
          </ul>
        </div>
        {product.review && <div className="specification" hidden={tab!=="review"}>
          <p>Feature: FM Radio, Card Supported (Micro SD / TF) Made in China</p>
          <p>FM Frequency Response: 87.5 - 108 MHz</p>
          <p>Model: S450</p>
          <p>Wireless Bluetooth Headset</p>
          <p>Brand: Beats</p>
        </div>}

        <div className=" related-products">
          <h3>Related Products</h3>
          <div className="item-cards">

            {products.filter(eachProduct=> eachProduct.category === product.category).map(relatedProduct=><div className="item" key={relatedProduct.id}>
              <ItemCard
              id={relatedProduct.id}
                image={relatedProduct.image}
                productName={relatedProduct.name}
              />
            </div>)}

          </div>
        </div>
      </div>
    </HeadFoot>
  );
}
