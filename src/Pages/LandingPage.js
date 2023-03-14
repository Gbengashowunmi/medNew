import { Modal } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Blog from "../component/blog/Blog";
import Carousel from "../component/Carousel";
import FeaturedSlider from "../component/FeaturedSlider";
import HeadFoot from "../component/HeadFoot";
import Partners from "../component/partner/Partners";
import ReviewSlider from "../component/reviews/ReviewSlider";
import Statistics from "../component/statistics/Statistics";
import "./landing.scss";
export default function LandingPage() {
  const [readMore, setReadMore] = useState(false);

  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleclick = () => {
    setReadMore(!readMore);
  };
  return (
    <HeadFoot
      pageTitle="International Limited Home Page. sales of products, technical solutions, read."
      description="Welcome to medpau international limited, we offer sales of medical equipments and products, technical services solutions and financial support for instalmental purchase of expensive medical equipments/facilities. read">
      <main>
        <Carousel />
      </main>
      <div className="hero-card-wrapper">
        <source type="image/webp" srcSet="image.webp" />
        <img src="/images/background_image_02.jpg" alt="card" />
        <div className="overlay"></div>
        <div className="hero-cards">
          <div
            className="hero-card"
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
            <h3>Explore our Specialized Solutions </h3>
            <p>
              Are you looking to cut cost without compromising value? Explore
              our various solutions to affordability.
            </p>
            <button onClick={handleOpen}>Check it out</button>
          </div>

          {/* MODAL */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <div className="healthvest_wrapper our_specialized">
              <div className="cancel" onClick={handleClose}>
                X
              </div>
              <h2 className="light-blue-bg-text">Our Specialized Solutions </h2>
              <ul className="specialized_solutions">
                <li onClick={handleClose}>Refurbished medical equipment</li>
                <li onClick={handleClose}>Field Mobile Hospitals</li>
                <li onClick={handleClose}>Smart modular solutions </li>
                <li onClick={handleClose}>Special applications</li>
                <li onClick={handleClose}>
                  Hospital Turnkey Project solutions
                </li>
              </ul>
            </div>
          </Modal>
          <div
            className="hero-card"
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
            <h3>Need financing?</h3> <br />
            <p>
              Is your budget restricted? We offer Financing solutions for your
              projects and equipment procurement
            </p>
            <Link to="/financial-support">
              <button>Reach out to us</button>
            </Link>
          </div>
          <div
            className="hero-card"
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
            <h3>Have a technical complain?</h3>
            <p>
              We provide unmatched after sales support, 24/7 online support and
              immediate response to complaints.
            </p>
            <Link to="//forms.gle/aJKSaxz2xyfbnQFy5">
              {" "}
              <button>Contact our Engineers</button>
            </Link>
          </div>
        </div>
      </div>
      <section className="schedule-section">
        <div
          className="work-hour schedule"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true">
          <h3>Working Hours</h3>
          <hr />
          <h6>
            Mon - Wed <span>8AM - 7PM</span>
          </h6>
          <hr />
          <h6>
            Thursday
            <span>8AM - 7PM</span>
          </h6>
          <hr />
          <h6>
            Friday <span>8AM - 7PM</span>
          </h6>
          <hr />
          <h6>
            Sat - Sunday
            <span>CLOSED</span>
          </h6>
          <hr />
          <h6>Time's not Flexible?</h6>
          <p>
            We provide high quality, integrated healthcare services, based on a
            patient - centered
          </p>
          <button>BOOK AN APPOINTMENT</button>
        </div>
        <div
          className="work-hour our-process"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true">
          <div className="img">
            <source type="image/webp" srcSet="image.webp" />
            <img src="/images/turnkey.jpeg" alt="aside" />
          </div>
          <div className="text">
            <h2>Hospital Turnkey Project solutions</h2>
            <p>
              Our commitment to promoting brilliant healthcare innovations, and
              increasing the access to affordable and quality healthcare is
              pivoted at improving the quality of life{" "}
              {readMore ? (
                <ul>
                  <li>
                    Feasibility & Project Master -Planning Architectural
                    Planning
                  </li>
                  <li>Mechanical, Electrical and Plumbing Engineering</li>
                  <li>Hospital Organization and Staffing Project Management</li>
                  <li>
                    Medical Equipment Supply, Installation and after Sales
                    Service and Maintenance contract
                  </li>
                  <li>Technical Training</li>
                  <li>Human Resources Training</li>
                  <li> Education Hospital Management services</li>
                </ul>
              ) : (
                "..."
              )}
              <span className="read-more" onClick={handleclick}>
                {" "}
                {readMore ? "Read Less" : "Read More"}
              </span>
            </p>
          </div>
        </div>
        <div
          className="work-hour our-process"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true">
          <div className="img">
            <source type="image/webp" srcSet="image.webp" />
            <img src="/images/our_process.jpeg" alt="aside" />
          </div>
          <div className="text">
            <h2>Our Process</h2>
            <p>
              We believe in people and partnerships. This is why we invest in
              relationships, develop our team, build capacities and help our
              clients explore vast opportunities. This way we are able to grow
              with our clients, support them and help them build their business
              knowing that a healthy society will translate to better economy
              and quality of live.
            </p>
            {/* <button className="read-more" onClick = {handleclick}>{readMore?"Read Less": "Read More"}</button> */}
          </div>
        </div>
      </section>

      <section className="our-vision">
        <Statistics />
      </section>

      <section className="reviews">
        <h6 className="light-blue-bg-text head">OUR CLIENTS</h6>
        <h3>Our Satisfied Clients' Reviews</h3>
        <div className="reviews-wrapper">
          <div>
            <ReviewSlider />
          </div>
        </div>
      </section>
      <aside className="featured-post">
        <div className="head">
          <h6>FEATURE</h6>
          <h2>Best Sellers </h2>
          <Link to="/shop">
            {" "}
            <button> SEE MORE</button>
          </Link>
        </div>
        <div className="products-container">
          <FeaturedSlider />
        </div>
      </aside>

      <aside className="partnership">
        <div className="head">
          <h6>PARTNERSHIP</h6>
          <h2>Our Partners</h2>
        </div>
        <div className="products-container">
          <div className="partner_wrapper">
            <Partners />
          </div>
        </div>
      </aside>

      {/* <aside className="blogs">
        <div className="head">
          <h6>BLOGS</h6>
          <h2>Our Blogs</h2>
          <Link to="/our-blogs">
            <button> See Blogs</button>
          </Link>
        </div>
        <div className="blogs_container">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </aside> */}
    </HeadFoot>
  );
}
