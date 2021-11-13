import React from 'react'
import findElapsedTime from '../utilities/findElapsedTime'

const Timer = ({startTime, endTime}) => {
  const elapsedTime = findElapsedTime(startTime, endTime)
  return(
    <div>
      {elapsedTime}
    </div>
  )
}

export default Timer