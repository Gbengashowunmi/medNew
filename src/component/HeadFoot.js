import React, { useEffect, useState } from "react";
import "../component/headFoot.scss";
import { HiMenuAlt3 } from "react-icons/hi";

import {
  FaChevronRight,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import Newsletter from "./newsletterForm/Newsletter";
import { Helmet } from "react-helmet";

export default function HeadFoot({ children, pageTitle, description }) {
  const [isOpen, setIsOpen] = useState(false);
// show and hide shop Category handler and state 
const [showShopCategory, setShowShopCategory] = useState(false);
const handleShop = ()=>{
  setShowShopCategory(!showShopCategory)
}
// const {id} = useParams()
  // terms and cndition
const [showTerms, setShowTerms] = useState(false)
const handleTerms =() =>{
  setShowTerms(true)
}
  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  setShowTerms(false)
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowShopCategory(false)
  };
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".nav");
    const scrollTop = window.scrollY;
    scrollTop >= 40
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <div className="head-foot-wrapper">
      <Helmet>
        <title>Medpau {pageTitle}</title>
        <meta name='description' content={description} />

      </Helmet>
      <div
        onClick={handleToggle}
        className={`${isOpen ? "overlay" : "show"}`}
      ></div>
      <header className="nav">
        <div className="comapany-icon">
          <div className="logo">
            <Link to="/">
          	<source type="image/webp" srcSet="image.webp"/>

              <img
                src="/images/WhatsApp_Image_2023-01-23_at_9.13.05_AM-removebg-preview.png"
                alt="logo"
              />
            </Link>{" "}
          </div>

          <div onClick={handleToggle}>
            <HiMenuAlt3 className={`nav-bar ${isOpen ? "white" : ""}`} />
          </div>
        </div>
        <ul className={`navbar-content ${isOpen ? "open" : ""}`}>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <div className="shop_dropdown_wrapper">
            <li onClick={handleShop}>Shop</li>
          </div>
            {showShopCategory?<div className="shop_dropdown">
  <ul>
    <NavLink to="/shop">
    <li onClick={handleShop}>See All Products</li>
    </NavLink>
     <NavLink to ="/shop/Hemodialysis">
     <li onClick={handleShop}>Go to Hemodialysis</li>
     </NavLink>

    <NavLink to="/shop/ICU Equipment">
       <li onClick={handleShop}>Go to ICU Equipment</li>
    </NavLink>
    <NavLink to="/shop/Diagnostic Imaging Equipment">
    <li onClick={handleShop}>Go to Diagnostic Imaging Equipment</li>
    </NavLink>

    <NavLink to="/shop/Operating Theatre Equipment">
    <li onClick={handleShop}>Go to Operating Theater Equipment</li>
    </NavLink>


  </ul>
</div>:""}
          {/* </NavLink> */}
          <NavLink to="/service">
            <li>Service</li>
          </NavLink>
          <NavLink to="/our-blogs">
          <li>Our Blog</li>
          </NavLink>
          <NavLink to="/mgtp">
          <li>Careers</li>
          </NavLink>
          <NavLink to="/event">
          <li>IWD</li>
          </NavLink>
          <Button variant="contained" className="appointment-btn" onClick={handleOpen}>Healthvest</Button>

        </ul>

        {/* modal for healthvest  */}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="healthvest_wrapper">
          <div className="cancel" onClick={handleClose}>X</div> 
           {!showTerms? <>  <h2 className="light-blue-bg-text">What is Health Vest?</h2>
            <p>Health Vest is a medical equipment financing platform which facilitates convenient way for individuals and businesses to purchase the necessary goods they need without breaking their bank. With this platform, users are able to spread out payments over a length of time up to five years at competitive interest rates with no hidden costs. This makes it easier for consumers or companies who didn't have the money upfront, but still needed these products, to acquire them - especially those that can be quite costly such as medical imaging devices, diagnostic instruments, ventilators and more. Furthermore, customers have access to quality refurbished items which would further lower cost and allow buyers affordable payment options while adhering to regulatory industry standards we must meet in order achieve safe use and maintenance of our products.</p> <div className="modal-btns">
            <Button className="appointment-btn" onClick={handleTerms}>Terms and Conditions</Button>
            <Link to="/financial-support">
            <Button variant="contained" className="appointment-btn" onClick={handleClose}>Apply for healthvest</Button>
            </Link>
            </div></> : <><h2 className="light-blue-bg-text">Terms and Condition</h2> <p> terms and condition loading....</p> <div className="modal-btns">
            <Button variant="contained" className="appointment-btn" onClick={handleClose}>Close</Button>
            <Link to="/financial-support">
            <Button variant="contained" className="appointment-btn" onClick={handleClose}>Apply for healthvest</Button>
            </Link>
            </div> </> }

        </div>
      </Modal>
      </header>

      {children}

      {/* FOOTER */}
     <div className="footer_newsletter">
      <Newsletter/></div> 
      <footer>
        <div
          className="about"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <h3>MEDPAU</h3>
          <p>
            At MedPau, we believe smart innovations in healthcare is key to
            advancement of a society which translates to better economy and
            quality of life. Professionalism.
          </p>
          <ul>
            <Link to="//www.facebook.com/Medpau1" target="_blank">
              <li>
                <FaFacebookF />
              </li>
            </Link>
            <a href="mailto:Info@medpau.net">
              <li>
                <FaGooglePlusG />
              </li>
            </a>
            <Link to="//linkedin.com/company/medpau/" target="_blank">
              <li>
                <FaLinkedinIn />
              </li>
            </Link>
            <Link
              to="//twitter.com/medpauintl?s=11&t=zBroa9mFl_fitJFK1HbUcQ"
              target="_blank"
            >
              <li>
                <FaTwitter />
              </li>
            </Link>
          </ul>
        </div>
        <div
          className="courses"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className="head">
            <h3>Medpau Impact Projects </h3>
            <hr />
          </div>
          <ul>
            
            <NavLink to="//medpauimpacts.com/womens-network/" target="blank" rel="noopener noreferrer">
              {" "}
              <li>
                <FaChevronRight />
                Medpau Women Network
              </li>
            </NavLink>
            <NavLink to="//medpauimpacts.com/mgtp/" target="blank" rel="noopener noreferrer">
              <li>
                <FaChevronRight />
                Medpau Graduate Training Program
              </li>
            </NavLink>
            <NavLink to="//medpauimpacts.com/wkd/" target="blank" rel="noopener noreferrer">
              {" "}
              <li>
                <FaChevronRight />
                World Kidney Day
              </li>
            </NavLink>
            <NavLink to="/event">
            <li>
              <FaChevronRight />
              Events - International Women's Day
            </li>
            </NavLink>
            <NavLink to="/faq">
            <li>
              <FaChevronRight />
              FAQ
            </li>
            </NavLink>

          </ul>
        </div>
        <div
          className="recent-posts"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className="head">
            <h3>Recent Posts</h3>
            <hr />
          </div>
        </div>
        <div
          className="contact-us"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className="head">
            <h3>Contact Us</h3>
            <hr />
          </div>
          <ul>
            <li>
              <FaPhone /> <a href="tel:+2349085323596"><span>+234908 532 3596</span> </a> 
            </li>
            <a href="tel:+233256885072"><li> <FaPhone /> <span>+23325 688 5072</span> </li>
            </a>

            <a href="mailto:Info@medpau.net">
            <li>
              <MdEmail /> <span>Info@medpau.net</span>
            </li>
            </a>
            <li>
              <MdLocationPin />
              <span>
                3, Tunde Gafar Close, Off Adeniyi Jones, Ikeja, Lagos
              </span>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
