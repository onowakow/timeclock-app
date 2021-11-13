import findElapsedTime from "./findElapsedTime"

const newEntry = (startTime, endTime) => {

  const elapsedTime = findElapsedTime(startTime, endTime)

  return {
    date: startTime.toString(),
    clockedTime: elapsedTime
  }

}

export default newEntry