const elapsedMs = 55941000


let totalSeconds = elapsedMs/1000
let totalMinutes = 0
let totalHours = 0


if (totalSeconds > 60) {
  totalMinutes = Math.floor(totalSeconds/60)
  console.log(totalMinutes)
  if (totalMinutes > 60) {
    totalHours = Math.floor(totalMinutes/60)
    console.log(totalHours)
    totalMinutes = totalMinutes - totalHours * 60
    totalSeconds = totalSeconds - totalHours * 3600
    console.log(totalMinutes)
  }
  totalSeconds = totalSeconds - totalMinutes * 60
  console.log(totalSeconds)
}

const padNumber = (number) => String(number).padStart(2, '0')

const seconds = padNumber(Math.round(totalSeconds))
const minutes = padNumber(Math.round(totalMinutes))
const hours = padNumber(Math.round(totalHours))

const time = `${hours}:${minutes}:${seconds}`

console.log(time)
