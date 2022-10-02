import React, { useState } from 'react'

export const TripBasicInfo = ({duration, cost, pickupDropPlace}) => {

  return (
    <div className='mainTripBasicInfo'>
        <div className="groupTripBasicInfo">
            <img src="https://wanderon.in/svg/clock-quick.svg" alt="" />
            <p>Duration</p>
            <h3>{duration}</h3>
        </div>
        <div className="groupTripBasicInfo">
            <img src="https://wanderon.in/svg/rupee.svg" alt="" />
            <p>Starting Price</p>
            <h3>{cost}</h3>
        </div>
        <div className="groupTripBasicInfo">
            <img src="https://wanderon.in/svg/location-pin.svg" alt="" />
            <p>Pick-up and Drop</p>
            <h3>{pickupDropPlace}</h3>
        </div>
    </div>
  )
}
