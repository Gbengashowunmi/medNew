import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import data from '../../component/Data'
import HeadFoot from '../../component/HeadFoot'
import ItemCard from '../../component/ItemCard/ItemCard'
import PageHead from '../../component/pageHead/PageHead'
import "./category.scss"
export default function Category() {
  const [products, setProducts] =useState([])

    useEffect(()=>{
        setProducts(data)
        },[])
        const {category} = useParams()

        // console.log(useParams());
        const product = data.filter(singleProduct => singleProduct.category === category)
  return (
    <HeadFoot pageTitle={category} description={`${category} category in medpau online store`}>
<PageHead heading={category} image="/images/breadcrumb-image-1.jpg" capsHead ={category}/>
<div className="products_wrapper">
{product.map(eachProduct=>{
    return (
    <div key={eachProduct.id}>
        <ItemCard id={eachProduct.id} image={eachProduct.image}
    productName={eachProduct.name}
  /></div>
    )})}
    </div>

    </HeadFoot>

  )
}
