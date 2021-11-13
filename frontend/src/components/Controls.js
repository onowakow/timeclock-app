import React from 'react'

const Controls = ({handleControlsClick, hasClockedIn, hasClockedOut}) => {
  const buttonTitle = hasClockedIn && hasClockedOut ? "Save to log"
    : hasClockedIn && !hasClockedOut ? "Clock out"
    : "Clock in"
    
  return (
    <div>
      <button onClick={handleControlsClick}>{buttonTitle}</button>
    </div>
  )
}

export default Controls