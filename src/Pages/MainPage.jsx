import React from 'react'
import { ExploreWanderOn } from '../Components/ExploreWanderOn'
import { Footer } from '../Components/Footer'
import HelpDesk from '../Components/HelpDesk'
import { Testimonials } from '../Components/Testimonials'
import { TripList } from '../Components/TripList'

export const MainPage = () => {
    return (
        <div className="fullPage">

            <div className='header'>
                <img src="./tripgixLogo" alt="Logo will come here" />
                <div>
                    <a href="tel:+6199942413">call us!</a>
                </div>
                Menu
            </div>

            <div className="mainPage">

                <div className="middle">
                    <div className="tagLine">
                        India's Coolest Travel Community
                    </div>
                    <div className="searchBar">
                        <input className='searchInput' type="text" />
                        <img className='searchLogo' src="https://wanderon.in/svg/search.svg" alt="" />
                    </div>
                </div>
                <div className="footer">
                    <div>
                        <img src="https://wanderon.in/svg/cover-travellers.svg" alt="" />
                        <p>50,000+ <br />
                        Happy Travellers</p>
                    </div>
                    <div>
                        <img src="https://wanderon.in/svg/cover-travellers.svg" alt="" />
                        <p>50,000+ <br />
                        Happy Travellers</p>
                    </div>
                    <div>
                        <img src="https://wanderon.in/svg/cover-travellers.svg" alt="" />
                        <p>50,000+ <br />
                        Happy Travellers</p>
                    </div>
                </div>
            </div>
            <ExploreWanderOn/>
            <TripList/><TripList/><TripList/><TripList/><TripList/>
            <HelpDesk/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
