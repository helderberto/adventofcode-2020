import { parseFileToArray } from '../utils/file'
import { multiply, sum } from '../utils/calc'

export const solve = async () => {
  const numbers = await parseFileToArray('day-01/input.txt')
  const when = 2020
  let result

  numbers.some((n1, i) =>
    numbers.slice(i + 1).some((n2) => {
      if (sum(n1, n2) === when) {
        result = multiply(n1, n2)
        return true
      }
      return false
    }),
  )

  console.log('day 01 - part 01', result)

  numbers.some((n1, i) =>
    numbers.slice(i + 1).some((n2, j) =>
      numbers.slice(j + 1).some((n3) => {
        if (sum(n1, n2, n3) === when) {
          result = multiply(n1, n2, n3)
          return true
        }
        return false
      }),
    ),
  )

  console.log('day 01 - part 02', result)
}
