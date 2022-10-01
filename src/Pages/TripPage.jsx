import React from 'react'
import { Footer } from '../Components/Footer'
import { KeyFeatures } from '../Components/KeyFeatures'
import { MainPageComponent } from '../Components/MainPageComponent'
import { Testimonials } from '../Components/Testimonials'
import { TripList } from '../Components/TripList'

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
