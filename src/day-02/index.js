import { parseFileToArray } from '../utils/file'

const isBetween = ({ first, last, count }) => count >= first && count <= last

const hasOneOccurrenceOfLetter = ({ first, last, password, letter }) =>
  (password.charAt(first) === letter && !(password.charAt(last) === letter)) ||
  (password.charAt(last) === letter && !(password.charAt(first) === letter))

const countOccurrencies = (password, letter) =>
  (password.match(new RegExp(letter, 'g')) || []).length

export async function solve() {
  const arr = await parseFileToArray('day-02/input.txt')
  let part01 = 0
  let part02 = 0

  arr.forEach((item) => {
    const [policy, password] = item.split(': ')

    if (password) {
      const [times, letter] = policy.split(' ')
      const count = countOccurrencies(password, letter)
      const [first, last] = times.split('-')

      if (isBetween({ first, last, count })) {
        part01++
      }

      if (
        hasOneOccurrenceOfLetter({
          first: first - 1,
          last: last - 1,
          password,
          letter,
        })
      ) {
        part02++
      }
    }
  })

  console.log('day 02 - part 01', part01)
  console.log('day 02 - part 02', part02)
}
