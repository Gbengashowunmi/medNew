import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./blog.scss"
export default function Blog() {
  return (
   <Link to ="/our-blogs"> 
   <div className='blog_wrapper'>
        <img src='/images/fitness.jpg_BJFwyf5Mo.jpg' alt='blog'/>
        <section className='description'>
        <h4>Title of blog</h4>
        <p>Short description Short description Short description Short description</p>
        <p>date published</p>
       <span> <p>Read more</p> <FaChevronRight /> </span>
        </section>
    </div>
    </Link>
  )
}
