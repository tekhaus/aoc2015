// --- Part Two ---
// Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.

// For example:

// ) causes him to enter the basement at character position 1.
// ()()) causes him to enter the basement at character position 5.
// What is the position of the character that causes Santa to first enter the basement?

const fs = require('fs')
const input = fs.readFileSync('day1-input.txt', 'utf8')

const whichPosition = instructions => {
  let floor = 0
  for (i = 0; i < instructions.length; i++) {
    floor+= instructions[i] === '(' ? 1 : -1
    if (floor < 0) return i + 1 // puzzle uses 1-based index
  }
  return 'never enters the basement'
}

console.log('expects 1 =>', whichPosition(')'))
console.log('expects 5 =>', whichPosition('()())'))
console.log('puzzle input =>', whichPosition(input))