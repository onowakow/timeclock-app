import React from 'react'

const Time = ({time, name}) => {
  if (time) {
    return (
      <div>
        {name}: {time.toLocaleTimeString()}
      </div>
    )
  }
  else {
    return <div>{name}: </div>
  }
}

export default Time