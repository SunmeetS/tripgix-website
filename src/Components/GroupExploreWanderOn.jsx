import React from 'react'
import { useNavigate } from 'react-router-dom'

export const GroupExploreWanderOn = () => {
    let navigate = useNavigate()
    return (
        <div onClick={()=>{navigate("/trippage")}} className='groupExploreWanderOn'>
            <img src="https://wanderon.in/svg/ny-trips.svg" alt="" />
            <p>Xmas & NY Trips</p>
        </div>
    )
}
