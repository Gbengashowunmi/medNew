import React from 'react'
import "./statistics.scss"
import CountUp from 'react-countup';

export default function Statistics() {
  return (
    <div className='stat-wrapper'>
        <h2>We Are Leading in</h2>
        <div className='stat-container'>
            <div className='each-stat'>
                <h1><CountUp end={55} duration={3} enableScrollSpy={true}/>+</h1>
                <p>Medical Equipment</p>
            </div>
            <div className='each-stat'>
                <h1><CountUp end={100} duration={3} enableScrollSpy={true}/>%</h1>
                <p>Reliable Solutions</p>
            </div>
            <div className='each-stat'>
                <h1><CountUp end={6} duration={3} enableScrollSpy={true}/>+</h1>
                <p>Countries Reached</p>
            </div>
            <div className='each-stat'>
                <h1><CountUp end={100} duration={3} enableScrollSpy={true}/>%</h1>
                <p>After Sales support</p>
            </div>
        </div>
    </div>
  )
}
