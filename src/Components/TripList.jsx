import React from 'react'
import { TripInfo } from './TripInfo'

export const TripList = () => {
    return (
        <div className='mainContainerTripList'>
            <div className="headingTripList">
                <h1>Upcoming Trips</h1>
                <select className='selectTripList' name="" id="">
                    <option value="Oct '22">Oct '22</option>
                </select>
            </div>
            <div className="tripInfoTripList">
                <TripInfo />
                <TripInfo />
                <TripInfo />
                <TripInfo />
            </div>
        </div>
    )
}
