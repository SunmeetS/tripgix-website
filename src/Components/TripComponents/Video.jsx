import React from 'react'
import ReactPlayer from 'react-player'

export const Video = () => {
    return (
        <div className='mainVideo'>
            <ReactPlayer className='reactPlayerVideo' url="https://youtu.be/ci0QHoN1Zn4" />
        </div>

    )
}
