import React from 'react'

export const TripBanner = ({backgroundImage}) => {
    return (
        <div style={{backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 15%, rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0) 60%), url(${backgroundImage})`}} className='mainTripBanner'>
            <div className="textContentTripBanner">
                <div className="tripTaglineTripBanner">
                    Perfect Backpacking Getaway to Island of The Gods
                </div>
                <span className='tripTitleTripBanner'>
                    Breathtaking Bali with flights
                </span>
                <div className='tripTaglineTripBanner'>
                    Flights From Mumbai
                </div>
            </div>
            <div className="buttonsTripBanner">
                <button>
                    GET ITINERARY
                </button>
                <button>
                    BOOK NOW
                </button>
            </div>
        </div>
    )
}
