import React, { useState, useEffect } from 'react'
import Clock from './components/Clock'
import Controls from './components/Controls'
import Time from './components/Time'
import Timer from './components/Timer'
import Log from './components/Log'
import newEntry from './utilities/newEntry'

const App = () => {
  // Current time and date state var
  const [date, setDate] = useState(new Date())
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [log, setLog] = useState([])

  // Calling this function updates 'date'
  const refreshClock = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(() => {refreshClock()}, 1000);
    return () => clearInterval(timerId)
  }, [])

  // Three possible functions: clock in, clock out, and log.
  const handleControlsClick = () => {  
    // Start clock
    if (startTime === null && endTime === null) {
      setStartTime(new Date())
    } 
    // End Clock.
    else if (startTime !== null && endTime === null) {
      setEndTime(new Date())
    } 
    // Save elapsed time to log
    else {
      setLog(log.concat(newEntry(startTime, endTime)))
      handleReset()
    }
  }
  
  // Reset start, end, and elapsed.
  const handleReset = () => {
    setStartTime(null)
    setEndTime(null)
  }

  return (
    <div>
      <h1>Timeclock App</h1>
      <Clock date={date} />
      <Time time={startTime} name="Start time"/>
      <Time time={endTime} name="End time" />
      <Timer startTime={startTime} endTime={endTime} />
      <Controls 
        hasClockedIn={Boolean(startTime)}
        hasClockedOut={Boolean(endTime)}
        handleControlsClick={handleControlsClick} 
      />
      <Log log={log} />

    </div>
  );
}

export default App;
