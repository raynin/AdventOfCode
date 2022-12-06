const fs = require('fs')
const calories = fs.readFileSync('./sample.txt', 'utf8' ).split('\r\n\r\n')

const cb = (acc, cal) => {
   const totalCal = cal.split('\r\n').map(Number).reduce((a, b) => a + b, 0)
   acc.push(totalCal)
   return acc
}

const groupCal = calories.reduce(cb, [])

console.log(Math.max(...groupCal))