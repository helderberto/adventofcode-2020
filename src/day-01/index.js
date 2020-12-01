import { readFile } from '../utils/file'
import { multiply, sum } from '../utils/calc'

export const solve = async () => {
  const file = await readFile('day-01/input.txt')
  const arr = file.split('\n')
  const when = 2020

  arr.forEach((n1, i) => {
    arr.slice(i + 1).forEach((n2, j) => {
      if (sum(n1, n2) === when) {
        console.log('day 01 - part 01 | result', multiply(n1, n2))
      }

      arr.slice(j + 1).forEach((n3) => {
        if (sum(n1, n2, n3) === when) {
          return console.log('day 01 - part 02 | result', multiply(n1, n2, n3))
        }
      })
    })
  })
}
