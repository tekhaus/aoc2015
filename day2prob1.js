// The elves are running low on wrapping paper, and so they need to submit an order for more. They have a list of the dimensions (length l, width w, and height h) of each present, and only want to order exactly as much as they need.

// Fortunately, every present is a box (a perfect right rectangular prism), which makes calculating the required wrapping paper for each gift a little easier: find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l. The elves also need a little extra paper for each present: the area of the smallest side.

// For example:

// A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58 square feet.
// A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43 square feet.
// All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?

const fs = require('fs')
const input = fs.readFileSync('day2-input.txt', 'utf8').split('\n')

const sqftPaperNeeded = boxes => {
  return boxes.reduce((total, box) => {
    const [ l, w, h ] = box.split('x').map(Number)
    const sides = [l * w, w * h, h * l]
    const thisBox = 2 * sides.reduce((sum, side) => sum + side)
    const slack = Math.min(...sides)
    return total + thisBox + slack
  }, 0)
}

console.log('expects 58 =>', sqftPaperNeeded(['2x3x4']))
console.log('expects 43 =>', sqftPaperNeeded(['1x1x10']))
console.log('puzzle input =>', sqftPaperNeeded(input))