import React from 'react'

export const Navbar = () => {
  return (
    <div className='mainNavbar'>
      
        <div className='header'>
                <img src="./tripgixLogo" alt="Logo will come here" />
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
