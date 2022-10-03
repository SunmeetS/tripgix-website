import React from 'react'
import { Footer } from '../Components/MainComponents/Footer'
import { MainPageComponent } from '../Components/MainComponents/MainPageComponent'
import { Navbar } from '../Components/MainComponents/Navbar'
import { Header } from '../Components/TripComponents/Header'
import { Photos } from '../Components/TripComponents/Photos'
import { TripBanner } from '../Components/TripComponents/TripBanner'
import { TripBasicInfo } from '../Components/TripComponents/TripBasicInfo'
import { TripDetails } from '../Components/TripComponents/TripDetails'
import { TripInfoButtons } from '../Components/TripComponents/TripInfoButtons'
import { Video } from '../Components/TripComponents/Video'
import { Videos } from '../Components/TripComponents/Videos'
import MainPage from './MainPage'

export const TripPage2 = () => {
  return (
    <div className='tripPage2'>
      <Navbar />
      <TripBanner backgroundImage={"https://images6.alphacoders.com/521/thumb-1920-521630.jpg"} />
      <div className="middleTripPage2">
        <div className="leftMiddleTripPage2">
          <TripBasicInfo pickupDropPlace={"Bangalore"} cost={"20,000 Rs."} duration={"10 days"} />
          <TripInfoButtons />
          <TripDetails />
          <Videos />
          <Photos />
        </div>
        <div className="rightMiddleTripPage2">
          <div className="videoRightMiddleTripPage2">
            <h4>
              Trips so perfect that Travelers want you to <br /> know more about their experiences!
            </h4>
            <Video />
          </div>
          <div className="getInTouchTripPage2">
            <Header fontSize={"3vw"} heading={"get in touch"} />
            <div className="inputContainerTripPage2">
              <div className="inputGroupTripPage2">
                <h4>Full Name *</h4>
                <input className='inputTripPage2' type="text" />
              </div>
              <div className="inputGroupTripPage2">
                <h4>Contact No. *</h4>
                <input className='inputTripPage2' type="text" />
              </div>
              <div className="inputGroupTripPage2">
                <h4>Email ID *</h4>
                <input className='inputTripPage2' type="text" />
              </div>
              <div className="inputGroupTripPage2">
                <h4>Preferred Destination *</h4>
                <input className='inputTripPage2' type="text" />
              </div>
              <button className='buttonTripPage2'> Submit </button>
            </div>

          </div>
        </div>

      </div>
      <Footer />

    </div>
  )
}
