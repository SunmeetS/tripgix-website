import React from 'react'
import { ExploreWanderOn } from '../Components/ExploreWanderOn'
import { Footer } from '../Components/Footer'
import HelpDesk from '../Components/HelpDesk'
import { MainPageComponent } from '../Components/MainPageComponent'
import { Testimonials } from '../Components/Testimonials'
import { TripList } from '../Components/TripList'

export const MainPage = () => {
    return (
        <div className="fullPage">
            <MainPageComponent/>
            <ExploreWanderOn/>
            <TripList/><TripList/><TripList/><TripList/><TripList/>
            <HelpDesk/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
