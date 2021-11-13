const findElapsedTime = (startTime, endTime) => {
  // Initialize elapsed time
  let time = '00:00:00'
  
  if (startTime !== null) {
  
    let elapsedMs = 0
    if (endTime === null) {
      elapsedMs = new Date() - startTime
    } else {
      elapsedMs = endTime - startTime
    }
  
    // The next section turns a number of milliseconds into hr:min:sec
    // I think this could be done better.
  
    let totalSeconds = elapsedMs/1000
    let totalMinutes = 0
    let totalHours = 0
    
    
    if (totalSeconds > 60) {
      totalMinutes = Math.floor(totalSeconds/60)
      if (totalMinutes > 60) {
        totalHours = Math.floor(totalMinutes/60)
        totalMinutes = totalMinutes - totalHours * 60
        totalSeconds = totalSeconds - totalHours * 3600
      }
      totalSeconds = totalSeconds - totalMinutes * 60
    }
    
    const padNumber = (number) => String(number).padStart(2, '0')
    
    const seconds = padNumber(Math.round(totalSeconds))
    const minutes = padNumber(Math.round(totalMinutes))
    const hours = padNumber(Math.round(totalHours))
    
    time = `${hours}:${minutes}:${seconds}`
  }
  
  return(<div>Elapsed time: {time}</div>)
}

export default findElapsedTime
