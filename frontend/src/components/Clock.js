import React from 'react'

const Clock = ({date}) => {
  return (
    <h2>{date.toLocaleTimeString()}</h2>
  )
}

export default Clock