import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.scss"
import HeadFoot from '../../component/HeadFoot';
import { Button, TextField } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineHome } from 'react-icons/md';
import { FaChevronRight } from 'react-icons/fa';
export default function HealthVestForm() {

  const [loading, setLoading] =useState(false)
  const [message, setMessage] =useState("")
  const [disable, setDisable] =useState(true)
  const [input, setInput] = useState({
    full_name:"",
    email:"",
    number:"",
    facility:"",
    position:"",
    equipment:""
  })

const navigate = useNavigate()
  const handleInput = (e)=>{
    setInput({
      ...input, [e.target.name]: e.target.value
    })
      if(input.email && input.equipment && input.facility && input.full_name && input.number && input.position !== ""){
setDisable(false)
}
  }

  const sendEmail = (e) =>{
    setLoading(true);
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    emailjs.sendForm('service_9hc60zg', 'template_92wka7w', e.target, '1C9x_ChYylYmwyitQ')
      .then((result) => {
        setLoading(false)
        setMessage("Details Submitted Succesfully, We'll get in touch with you soon...")

        // to reload after submission
          setTimeout(() => {
            navigate('/', { replace: true });
          }, 4000);
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <HeadFoot pageTitle="HealthVest" description="Financial page || medpau international Limited Healthvest form for instalmental payments, enquiries and outright purchase">
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
            <h2>HealthVest</h2>
            <p>
              <MdOutlineHome />
              <NavLink to="/">
                <span>HOME</span>
              </NavLink>{" "}
              <FaChevronRight />
              <span className="active">Financial Support</span>
            </p>
          </div>
        </div>
      </div>
    <form className="finance-form" onSubmit={sendEmail} >
      <h4>Kindly fill the form below to apply for a HealthVest support</h4>
      <p>{message}</p>
      <input type="hidden" name="contact_number" />
      <TextField id="outlined-basic" label="Full Name" name="full_name" variant="outlined" className='input' onChange={handleInput} />

      <TextField id="outlined-basic" label="Email" name="email" variant="outlined" className='input' onChange={handleInput}/>
      <TextField id="outlined-basic" label="Phone Number" name="number" variant="outlined" className='input' onChange={handleInput}/>
      <TextField id="outlined-basic" label="Name of Facility" name="facility" variant="outlined" onChange={handleInput} className='input' />
      <TextField id="outlined-basic" label="Position" name="position" variant="outlined" className='input' onChange={handleInput} />
      <TextField id="outlined-basic" label="Equipment Needed" name="equipment" variant="outlined" className='input' onChange={handleInput} />
      <Button type="submit" value="Send" disabled={disable}>{loading?"Please wait...":"Submit"}</Button>
      <p className='messag'>{message}</p>

    </form>
    </HeadFoot>
  );
}