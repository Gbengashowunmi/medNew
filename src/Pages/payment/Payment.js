import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import HeadFoot from '../../component/HeadFoot'
import HandlePayment, { handlePayment } from '../../component/paymentgateway'
import "./payment.scss"
export default function Payment() {
const [data, setData] = useState({})

const handleSubmit =(e)=>{
e.preventDefault();
if (data.email===""){
  setError("Please Enter valid email");
  console.log(error)
  }
  else if(data.amount <= 0){
  setError("Please Enter Amount")
  }
  
  else if(data.purpose === ""){
  setError("Please select a purpose of payment")
  }
  else{
    handlePayment(data.email, parseFloat(data.amount), data.purpose)
  }
}

const handleChange = (e)=>{
  setData({
    ...data, [e.target.name]:e.target.value
  })
}

const [error, setError] =useState("")


  return (
    <HeadFoot pageTitle="Payment" description="medpau international Limited Payment page">
    <div className="payment_form_wrapper">
      <h3 className='light-blue-bg-text'>Payment Page</h3>
      <p>Kindly enter your details below to make payment </p>

      <p>{error}</p>
      <form onSubmit={handleSubmit}>
      <TextField id="outlined-search" label="Enter your Email" type="email" onChange={handleChange} name='email' />
      <TextField id="outlined-search" label="Purpose of Payment" type="text" onChange={handleChange} name='purpose' />
      <TextField id="outlined-search" label="Enter amount" type="number" onChange={handleChange} name='amount'/>
{/* 
        <input type='email' name='email' placeholder='enter email' required onChange={handleChange}/>
        <input type='text' name='purpose' placeholder='payment purpose' required onChange={handleChange}/>
        <input type='tel'  name="amount" placeholder='amount' required onChange={handleChange}/> */}
        <Button className="appointment-btn" type='submit'>submit</Button>
      </form>
    </div>
    </HeadFoot>
  )
}
