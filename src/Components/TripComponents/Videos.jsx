import React from 'react'
import ReactPlayer from 'react-player'
import { Header } from './Header'
import { Video } from './Video'


export const Videos = () => {
    return (
        <div className='mainVideos'>
            <Header heading="Videos" />
            <div className="containerVideos">
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
            </div>

        </div>
    )
}
