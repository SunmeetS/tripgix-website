import React from 'react'
import { Router, useNavigate } from 'react-router-dom'

export const TripInfo = () => {
    let route = useNavigate()
    return (
        <div onClick={()=>route("trippage2")} className='mainTripInfo'>
            <img className='mainImageTripInfo' src="https://media.istockphoto.com/photos/pura-ulun-danu-bratan-temple-in-bali-picture-id675172642?b=1&k=20&m=675172642&s=170667a&w=0&h=IgKlfRYs9bs6bq3fx0WOCqdgWY3WW2-_2PKBMCcREj0=" alt="" />
            <div className='infoContainerTripInfo'>
                <div className='infoGroupTripInfo'>
                    <img className='infoIconTripInfo' src="https://wanderon.in/svg/clock.svg" alt="" />
                     6N-7D  
                </div>
                <div className='infoGroupTripInfo'>
                    <img className='infoIconTripInfo' src="https://wanderon.in/svg/clock.svg" alt="" />
                    Mumbai
                </div>
            </div>
        </div>
    )
}
