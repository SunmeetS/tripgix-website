import React from 'react'
import ReactPlayer from 'react-player'


export const Testimonials = () => {

    return (
        <div className='mainTestimonials'>
            <div className="textTestimonials">
                <h3>TESTIMONIALS</h3>
                <p>Awesome experiences! Happy Customers!</p>
            </div>
            <div className="videoContainerTestimonials">
                <i className="fa fa-arrow-left"></i>
                <ReactPlayer className="videoTestimonials" url='https://www.youtube.com/watch?v=6DmmLMhTMHg' />
                <i className="fa fa-arrow-right"></i>
            </div>
        </div>
    )
}
