import React from 'react'
import "./newsletter.scss"
import emailjs from 'emailjs-com';
import { Button, TextField } from '@mui/material';

export default function Newsletter() {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_9hc60zg', 'template_racbhye', e.target, '1C9x_ChYylYmwyitQ')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }

  return (
    <>
    <h4>To receive updates, kindly subscribe to our Newsletter</h4>
    <form className='newsletter' onSubmit={sendEmail}>
        <TextField id="outlined-basic" label="Enter your Email" variant="outlined" required type="email" name="email" className='input'/>
        <Button type="submit"  variant="contained" className="appointment-btn">Subscribe</Button>
    </form>
    </>
  )
}
