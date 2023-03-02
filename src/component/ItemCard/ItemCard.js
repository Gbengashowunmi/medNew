import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import "./itemCard.scss"
export default function ItemCard({image,productName, id}) {
  return (
    <div className='item_container'>
        <div className='image'>
          <Link to={`/details/${id}`}>  
          	<source type="image/webp" srcSet="image.webp"/>
          
          <img src={image} alt="product" />
          </Link>
        </div>
        <div className='description'>

        <p className='item-name'>{productName}</p>
        <p className='ratings'><BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/></p>
        {/* <p className='price'>$689  */}
        {/* <span><button className='add-to-cart'><h5>+</h5></button></span> */}
        {/* </p> */}
        </div>
        {/* <div className='discount'>%565 off</div> */}
        
    </div>
  )
}
