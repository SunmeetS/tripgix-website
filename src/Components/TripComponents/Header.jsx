import React from 'react'

export const Header = ({fontSize, heading}) => {
  return (
    <div style={{fontSize: fontSize}} className='mainHeader'>
        {heading}
        <div style={{fontSize: String(Number(fontSize)/2)}} className="subHeader">
            {heading}
        </div>
    </div>
  )
}
