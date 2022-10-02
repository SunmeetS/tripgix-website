import React from 'react'
import { ExploreWanderOn } from '../Components/MainComponents/ExploreWanderOn'
import { Footer } from '../Components/MainComponents/Footer'
import HelpDesk from '../Components/MainComponents/HelpDesk'
import { MainPageComponent } from '../Components/MainComponents/MainPageComponent'
import { Navbar } from '../Components/MainComponents/Navbar'
import { Testimonials } from '../Components/MainComponents/Testimonials'
import { TripList } from '../Components/MainComponents/TripList'

export const MainPage = () => {
    return (
        <div className="fullPage">
            <Navbar />
            <MainPageComponent />
            <ExploreWanderOn />
            <TripList /><TripList /><TripList /><TripList /><TripList />
            <HelpDesk />
            <Testimonials />
            <Footer />
        </div>
    )
}
