// --- Day 3: Perfectly Spherical Houses in a Vacuum ---
// Santa is delivering presents to an infinite two-dimensional grid of houses.

// He begins by delivering a present to the house at his starting location, and then an elf at the North Pole calls him via radio and tells him where to move next. Moves are always exactly one house to the north (^), south (v), east (>), or west (<). After each move, he delivers another present to the house at his new location.

// However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once. How many houses receive at least one present?

// For example:

// > delivers presents to 2 houses: one at the starting location, and one to the east.
// ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
// ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.

const fs = require('fs')
const input = fs.readFileSync('day3-input.txt', 'utf8')

const receivedPresents = ([...movements]) => {
  const location = {
    x: 1,
    y: 1,
  }
  const visited = new Set([JSON.stringify(location)])
  movements.map(direction => {
    switch (direction) {
      case '^':
        location.y++
        break
      case 'v':
        location.y--
        break
      case '>':
        location.x++
        break
      case '<':
        location.x--
        break
    }
    visited.add(JSON.stringify(location))
  })
  return visited.size
}

console.log('expects 2 =>', receivedPresents('>'))
console.log('expects 4 =>', receivedPresents('^>v<'))
console.log('puzzle input =>', receivedPresents(input))