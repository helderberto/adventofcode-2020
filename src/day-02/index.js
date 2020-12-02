import { parseFileToArray } from '../utils/file'

const inRange = (times, count) => {
  const [min, max] = times.split('-')
  return count >= min && count <= max
}

const countOccurrencies = (password, letter) => {
  const regex = new RegExp(letter, 'g')
  return (password.match(regex) || []).length
}

export async function solve() {
  const arr = await parseFileToArray('day-02/input.txt')
  let valids = 0

  arr.forEach((item) => {
    const [policy, password] = item.split(': ')

    if (password) {
      const [times, letter] = policy.split(' ')
      const count = countOccurrencies(password, letter)

      if (inRange(times, count)) {
        valids++
      }
    }
  })

  console.log('day 02 - part 01', valids)
}
