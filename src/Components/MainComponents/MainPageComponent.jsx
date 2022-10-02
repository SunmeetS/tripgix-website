import React from 'react'

export const MainPageComponent = () => {
    return (
        <div className='mainMainPageComponent'>
            <div className="mainPage">
                <div className="middle">
                    <div className="tagLine">
                        India's Coolest Travel Community
                        <div className='typewriter'>
                            <h6>Creating Memories</h6>
                        </div>
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
        </div>
    )
}
