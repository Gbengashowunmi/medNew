import { Button, TextField } from '@mui/material';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { MdOutlineHome } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import db from '../../component/firebase';
import HeadFoot from '../../component/HeadFoot';

import "./delivery.scss"

export default function DeliveryForm() {

     const [receipientList, setReceipientList] =useState([])

  const [loading, setLoading] =useState(false)
//   const [message, setMessage] =useState("")
    const [input, setInput] = useState({
      fullName:"",
      email:"",
      position:"",
      date:"",
      meansOfID:"",
      signature:""
    });

    // input handler 
    const handleInput = (e) =>{
        setInput({
          ...input,
           [e.target.name] : e.target.value
          })
        }

            console.log(input);


        // fetching data from database 
        useEffect(
          ()=> {
            const collectionRef = collection(db, "receipient-details")
            // order data 
            const q = query(collectionRef, orderBy("timestamp","desc"))
 
            //fecth data
            const unsub = onSnapshot(q, (snapshot)=> setReceipientList(snapshot.docs.map(doc=>doc.data())
            .map(recipients=> recipients)
            )
            )
            // setLoading(false)
            return unsub  
          }


          ,[])

        //submit or add to database
        const handleSubmit = async (e)=>{
            setLoading(true)

          e.preventDefault()
            const payload = {
                position:input.position,
                date:input.date,
                fullName:input.fullName,
                meansOfID:input.meansOfID,
                signature:input.signature,
                timestamp:serverTimestamp()
            };
            const collectionRef = collection(db, "receipient-details");
              const docRef = await addDoc(collectionRef, payload)
              console.log(docRef.id);
            setLoading(false)

              
            }
            console.log(receipientList);



  return (
    <HeadFoot pageTitle="Delivery Form" description={`Delivery form for buyers, clients and recievers to fill for confirmation of received equipment`}>
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
            <h2>Received Form</h2>
            <p>
              <MdOutlineHome />
              <NavLink to="/">
                <span>HOME</span>
              </NavLink>{" "}
              <FaChevronRight />
              <span className="active">Received Form</span>
            </p>
          </div>
        </div>
      </div>
    <div>
        Delivery and receival form
        <form onSubmit={handleSubmit}>
            <h2>CERTIFICATION</h2>
            <p>I hereby certify that the equipment that was delivered  in good condition</p>
            <div className='input_field'>
  <label> <h4>Certified by :</h4></label>

<TextField id="outlined-basic" label="Enter name of recipient" variant="outlined" required type="text" className='input' onChange={handleInput} name="fullName"/>
</div>
   <div className='input_field'>
  <label> <h4>Email :</h4></label>
<TextField id="outlined-basic" label="Enter your email" variant="outlined" required type="email" className='input' onChange={handleInput} name="email"/>
</div>
<div className='input_field'>
            <label> <h4>Position :</h4></label>
<TextField id="outlined-basic" label="Enter position of recipient" variant="outlined" required type="text" className='input' onChange={handleInput} name="position"/>
</div>
<div className='input_field'>
            <label> <h4>Signature :</h4></label>
<TextField id="outlined-basic" label="Enter birth month and day and last 4 digits of your telephone" variant="outlined" required type="number" className='input' onChange={handleInput} name="signature"/>
</div>

<div className='input_field'>
                     <label> <h4>Date :</h4></label>
<TextField id="outlined-basic" label="Enter date" variant="outlined" required type="text" className='input' onChange={handleInput} name="date" />
</div>
<div className='input_field'>
   <label> <h4>Valid means of ID :</h4></label>
<TextField id="outlined-basic" label="Enter valid means of ID" variant="outlined" required type="number" className='input' onChange={handleInput} name="meansOfID"/>
  </div>
<Button type="submit" value="Send">{loading? "please wait...":"Submit"}</Button>
        </form>
    </div>
    </HeadFoot>
  )
}
