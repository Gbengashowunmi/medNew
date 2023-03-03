import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { MdOutlineHome } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import Blog from '../../component/blog/Blog'
import HeadFoot from '../../component/HeadFoot'
import "./ourblogs.scss"

export default function OurBlogs() {
  return (
    <HeadFoot pageTitle="Services" description="service page of medpau international Limited. List of Technical services offered by medpau">
     <div className="about-head">

        <div className="image">
          <div className="overlay"></div>
          	<source type="image/webp" srcSet="image.webp"/>
          <img src="/images/breadcrumb-image-1.jpg" alt="about-us" />
          <div
            className="texts"
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2>Our Blogs</h2>
            <p>
              <MdOutlineHome />
              <NavLink to="/">
                <span>HOME</span>
              </NavLink>{" "}
              <FaChevronRight />
              <span className="active">OUR BLOGS</span>
            </p>
          </div>
        </div>
      </div>

      <div className='all_blogs'>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
        </div>
    </HeadFoot>
  )
}
