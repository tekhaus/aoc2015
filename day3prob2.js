// --- Part Two ---
// The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him.

// Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), then take turns moving based on instructions from the elf, who is eggnoggedly reading from the same script as the previous year.

// This year, how many houses receive at least one present?

// For example:

// ^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.
// ^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.
// ^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.

const fs = require('fs')
const input = fs.readFileSync('day3-input.txt', 'utf8')

const receivedPresents = ([...movements]) => {
  const locations = {
    santa: {
      x: 1,
      y: 1,
    },
    robot: {
      x: 1,
      y: 1,
    },
  }
  const visited = new Set([JSON.stringify(locations.santa)])
  movements.map((direction, idx) => {
    const location = idx % 2 ? locations.santa : locations.robot
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

console.log('expects 3 =>', receivedPresents('^v'))
console.log('expects 3 =>', receivedPresents('^>v<'))
console.log('expects 11 =>', receivedPresents('^v^v^v^v^v'))
console.log('puzzle input =>', receivedPresents(input))