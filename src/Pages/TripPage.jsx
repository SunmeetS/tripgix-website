import React from 'react'
import { Footer } from '../Components/MainComponents/Footer'
import { KeyFeatures } from '../Components/MainComponents/KeyFeatures'
import { MainPageComponent } from '../Components/MainComponents/MainPageComponent'
import { Testimonials } from '../Components/MainComponents/Testimonials'
import { TripList } from '../Components/MainComponents/TripList'

export const TripPage = () => {
  return (
    <div>
        <MainPageComponent/>
        <KeyFeatures/>
        <TripList/><TripList/><TripList/><TripList/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}
