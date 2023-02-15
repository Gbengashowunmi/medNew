import React from 'react'
import { Link } from 'react-router-dom'
import "./consumeable.scss"
export default function Consumeables({image,productName, id}) {
  return (
    <div className='consumeable_container'>
        <div className='image'>
          <Link to={`/details/${id}`}>  <img src={image} alt="product" />
          </Link>
        </div>
        <div className='description'>

        <p className='item-name'>{productName}</p>
        </div>
         <div className='discount'>%565 off</div>
        
    </div>
  )
}
