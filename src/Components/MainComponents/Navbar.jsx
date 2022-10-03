import React from 'react'

export const Navbar = ({background}) => {
  return (
    <div className='mainNavbar'>
      
        <div style={{background: background}} className='header'>
                <img className='navbarLogo' src="https://wanderon.in/wanderon-logo.svg" alt="Logo will come here" />
                <div>
                    <a href="tel:+6199942413">call us!</a>
                </div>
                <a onClick={()=>{
                  document.querySelector("*").style.backgroundColor = "black"
                  document.querySelector("body").style.color = "white"
                }}>Dark Mode</a>
                <a onClick={()=>{
                  document.querySelector("*").style.backgroundColor = "white"
                  document.querySelector("body").style.color = "black"
                }}>Light Mode</a>
            </div>
    </div>
  )
}
