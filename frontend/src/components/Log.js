import React from 'react'

const Log = ({log}) => {
  return(
    <div>
      <h2>Time log</h2>
      {log.map((entry, i) => {
        return <div key={i}>{entry.date} {entry.clockedTime}</div>
      })}
    </div>
  )
}

export default Log