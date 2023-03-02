import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import data from "../../component/Data";
import HeadFoot from "../../component/HeadFoot";
import { handlePayment } from "../../component/paymentgateway";
import "./event.scss"
export default function Event() {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    handlePayment(data.email, parseFloat(data.amount), data.purpose);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HeadFoot pageTitle="Events" description="Events page of medpau international Limited">
            <div className="about-head">
        <div className="image">
          <div className="overlay"></div>
          	<source type="image/webp" srcSet="image.webp"/>
          <img src="/images/iwd.jpeg" alt="about-us" />
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
            <h2>IWD</h2>
            <p>
              <MdOutlineHome />
              <NavLink to="/">
                <span>HOME</span>
              </NavLink>{" "}
              <FaChevronRight />
              <span className="active">International Women's Day</span>
            </p>
          </div>
        </div>
      </div>
      <section className="mgtp-section"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
>
<section>
<h3>International Women's Day (IWD)</h3>
        <p>
          International Women's Day (IWD) is celebrated annually on March 8th.
          It is a day to celebrate the social, economic, cultural, and political
          achievements of women and to call for gender equality. The theme for
          International Women's Day changes annually, but the overall goal of
          the day remains the same: to celebrate women's achievements and raise
          awareness about the challenges women still face in achieving equality.
          International Women's Day has been observed since the early 1900s and
          was officially recognized by the United Nations in 1975. Today, IWD is
          celebrated in countries around the world with events, rallies, and
          demonstrations calling for gender equality and women's rights. IWD is
          a reminder that although progress has been made in the fight for
          women's rights, there is still much work to be done. On this day,
          people come together to celebrate the achievements of women and to
          work towards a more equal and just world for all.
        </p>
      </section>
  <div className="payment_form_wrapper iwd_payment">
        <h3 className="light-blue-bg-text">Registration For IWD Event</h3>
        <p>Kindly click on the button below to reserve a space </p>

        <form onSubmit={handleSubmit}>
          {/* <TextField
            id="outlined-search"
            label="Enter your Email"
            type="email"
            onChange={handleChange}
            name="email"
          />
          <TextField
            id="outlined-search"
            label="Purpose of Payment"
            type="text"
            onChange={handleChange}
            name="purpose"
          />
          <TextField
            id="outlined-search"
            label="Enter amount"
            type="number"
            onChange={handleChange}
            name="amount"
          /> */}
          <Link to="//paystack.com/pay/medpau-iwd"> 
            <Button
              className="appointment-btn"
              variant="contained"
              type="submit"
            >
              Book a space
            </Button>
          </Link>
        </form>
      </div>
</section>




    </HeadFoot>
  );
}
