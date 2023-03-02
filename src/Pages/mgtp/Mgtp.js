import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
import HeadFoot from "../../component/HeadFoot";
import "./mgtp.scss"
export default function Mgtp() {
  return (
    <HeadFoot pageTitle="MGTP" description="medpau Graduate Trainee Program">
      <div className="about-head">

        <div className="image">
          <div className="overlay"></div>
          	{/* <source type="image/webp" srcset="image.webp"/> */}
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
            <h2>MGTP</h2>
            <p>
              <MdOutlineHome />
              <NavLink to="/">
                <span>HOME</span>
              </NavLink>
              <FaChevronRight />
              <span className="active">MGTP</span>
            </p>
          </div>
        </div>
      </div>
          	{/* <source type="image/webp" srcset="image.webp"/> */}
<img  src="/images/MGTP-EDIT-01-1-1024x576.png" alt="mgtp logo" className="hero-image" />
<h3>MEDPAU GRADUATE TRAINEE PROGRAM (MGTP)</h3>

<section className="mgtp-section"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
>
  <div className="image">
          	{/* <source type="image/webp" srcset="image.webp"/> */}
  <img src="/images/DSC3954-1-1024x731.jpg" alt="team" />
  </div>
  <p>The Medpau Graduate Trainee Program (MGTP) is the starting point for a fulfilling career in the healthcare industry. It also offers the platform to kick start your own healthcare business for those who would want to become independent business owners. <br />
It is highly participatory and has been well structured to equip you with skills and unparalleled training needed to get ahead in your career or build your own business. <br />
You will embark on various virtual teaching and learning from different departments, gain valuable professional experiences, and systematically explore every aspect of healthcare business operations. <br/>
You will engage in intelligent conversations, complete challenging hands-on roles, group projects and have unlimited opportunities to design solutions that will shape Africa's healthcare business space. <br/>
All the while, our faculty of global instructors, who will guide you all through the program and provide you with constructive feedback will support you needed to bring out the best in you, as you spend 3 months with us virtually
<br />
This program will expose you to unlimited opportunities for personal and professional growth so you can excel, whether within our organization or elsewhere. 
<br />
And if you are looking to build your own healthcare business, then you will also find the platform and partnership you need to grow and thrive with us.</p>
</section>
<section className="mgtp-section"
           data-aos="zoom-in"
           data-aos-offset="20"
           data-aos-delay="30"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false"
 >
 <div>
  <h4>WHY MEDPAU GRADUATE TRAINEE PROGRAM
</h4>
<ul>
  <li>Well Structured Syllabus</li>
  <p>We have a carefully selected syllabus of courses that will empower you with the
knowledge and skills set needed to excel in the healthcare industry</p>

<li>Highly Participatory</li>
<p>We will expose you to challenging tasks, group projects, hands-on exercises and on-site
training designed to equip you with the practical business skills</p>

<li> Global Faculty of Instructors</li>
<p>We have a faculty of healthcare professionals from all around the world with years of
industry experience who will tutor and provide you feedback</p>

<li>Unparallel Opportunities for Growth</li>
<p>We bring out the best in you through constructive feedback. You will also network and engage in intelligent conversations with other young professional.</p>
</ul>

<h4>WE ARE LOOKING OUT FOR INDIVIDUALS WHO ARE:
</h4>

<ul>
  <li>Passionate about achieving big results</li>
  <li>Persistent, strong willed and self motivated</li>
  <li>Very committed and dedicated to delivering results</li>
  <li>Creative and innovate</li>
  <li>Able to develop original solutions to solve problems in the Healthcare industry</li>
  <li>Able to work with little or no supervision and achieve set goals</li>
  <li>Able to motivate others to achieve results</li>
</ul>
<h4>ELIGIBILITY</h4>
<ul>
  <li>Those resident in an African country</li>
  <li>Be below 30 years old</li>
  <li>Have a minimum of 5 O' level credits at ONE sitting</li>
  <li>Have graduated from the University, Polytechnics, or College of Education with a minimum of Second Class (Lower Division)</li>
  <li>Have what is takes to work in a fast-paced innovative environment</li>
</ul>
</div>
<div className="image">
          	<source type="image/webp" srcSet="image.webp"/>
 <img src="/images/WhatsApp-Image-2022-03-15-at-9.12.00-AM.jpeg" alt="" />
 </div>
</section>

<section className="note"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
>
  <div className="note1">
<p><strong>NOTE</strong></p>
<ul>
<li> This internship is not a paid internship but part of our CSR to equip the next generation of healthcare professionals with the knowledge and skills needed to excel in the healthcare business space.</li>
<li>Application will be in three stages and only candidates who were successful in each stage will make it to the next.</li>
<li>Lecturers will be virtual for all three months to enable young professionals from all over Africa benefit from them. You will be invited to the to a virtual classroom if you have been successful in the final of application.</li>
<li>MGTP does not guarantee you automatic employment with MedPau. Only high performers will gain full time and contract employment with us. Others will be rewarded with cash prices and products to start their own independent businesses.</li>

</ul>
</div>
<div className="note2">
<h6>MGTP does not guarantee you automatic employment with MedPau. Only high performers will  gain full time and contract employment with us. Others will be rewarded with cash prices, and products to start their own independent businesses.</h6>
</div>
</section>
    </HeadFoot>
  );
}
