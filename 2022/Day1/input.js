const fs = require('fs')
const calories = fs.readFileSync('./input.txt', 'utf8' ).split('\n\n')

function part1() {
    const cb = (acc, cal) => {
        const totalCal = cal.split('\n').map(Number).reduce((a, b) => a + b, 0)
        acc.push(totalCal)
        return acc
    }
    const groupCal = calories.reduce(cb, [])
    console.log(`Answer to part 1 is ${Math.max(...groupCal)}`)
}

function part2() {
    const cb = (acc, cal) => {
        const totalCal = cal.split('\n').map(Number).reduce((a, b) => a + b, 0)
        acc.push(totalCal)
        return acc
    }
    const groupCal = calories.reduce(cb, [])
    const [one,two,three] = groupCal.sort((a,b) => b - a)
    console.log(`Answer to part 2 is ${one+two+three}`)
}

part1()
part2()