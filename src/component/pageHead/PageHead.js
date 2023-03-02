import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { MdOutlineHome } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import "./pageHead.scss"

export default function PageHead({heading, image, capsHead}) {
  return (
    <div className="about-head">
    <div className="image">
      <div className="overlay"></div>
          	<source type="image/webp" srcSet="image.webp"/>
      <img src={image} alt="about-us" />
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
        <h2>{heading}</h2>
        <p>
          <MdOutlineHome />
          <NavLink to="/">
            <span>HOME</span>
          </NavLink>{" "}
          <FaChevronRight />
          <span className="active">{capsHead}</span>
        </p>
      </div>
    </div>
  </div>
  )
}
