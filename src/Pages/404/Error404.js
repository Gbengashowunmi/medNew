import React from 'react'
import { Link } from 'react-router-dom'
import "./errorpage.scss"

export default function Error404() {
  return (
    <div className='error_body'>
      <img src='/images/WhatsApp_Image_2023-01-23_at_9.13.05_AM-removebg-preview.png' alt="medpau-logo" />
      <h2>Sorry !!!😒😢</h2>
      <h5>Page You requested for was Not Found</h5>

      <Link to="/"><h5>Go Home</h5></Link>
    </div>
  )
}
