import React from 'react'

const Homepage = ({openModal}) => {
  return (
    <div className='homepage'>
    <button onClick = {openModal} className = "button">
      Show Login Page
    </button>
    </div>
  )
}

export default Homepage