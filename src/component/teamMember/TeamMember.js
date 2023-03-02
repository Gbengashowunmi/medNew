import React from 'react'
import "./team-member.scss"
export default function TeamMember({image, name, position}) {
  return (
    <div className='team-member-container'>
<div className='image'>
          	<source type="image/webp" srcSet="image.webp"/>
    <img src={image} alt='member' />
</div>
<hr/>
<h5>{name}</h5>
<p>{position}</p>
    </div>
  )
}
