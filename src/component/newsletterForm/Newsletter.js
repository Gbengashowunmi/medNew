import React, { useState } from 'react'
import "./newsletter.scss"
import emailjs from 'emailjs-com';
import { Button, TextField } from '@mui/material';

export default function Newsletter() {

    const [showMessage, setShowMessage]= useState(false)
    const [message, setMessage]= useState("")

    
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_9hc60zg', 'template_racbhye', e.target, '1C9x_ChYylYmwyitQ')
          .then((result) => {
              setShowMessage(true)
              setMessage("Thank You for subscribing to our Newsletter")
              setInterval(() => {
               setShowMessage(false)
               //    to reload after success message 
                  window.location.reload()
           }, 3000);
        }, (error) => {
          setMessage(`${error.text}, Try again`)
              console.log(error.text);
          });
      }

  return (
    <>
    <h4>To receive updates, kindly subscribe to our Newsletter</h4>
    {showMessage && <p className='message'>{message}</p>}
    <form className='newsletter' onSubmit={sendEmail}>
        <TextField id="outlined-basic" label="Enter your Email" variant="outlined" required type="email" name="email" className='input' />
        <Button type="submit"  variant="contained" className="appointment-btn">Subscribe</Button>
    </form>
    </>
  )
}
