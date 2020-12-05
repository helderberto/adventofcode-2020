import { parseFileToArray } from '../utils/file'

const VALIDATION_KEYS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

export const solve = async () => {
  const arr = await parseFileToArray('day-04/input.txt')
  const PASSPORT_SIZE = VALIDATION_KEYS.length

  let passport = []

  const part01 = arr.reduce((passportValids, line) => {
    if (line) {
      passport.push(...line.split(' '))
      return passportValids
    }

    const passportValid = passport.reduce((valids, item) => {
      const [key] = item.split(':')
      return VALIDATION_KEYS.includes(key) ? valids + 1 : valids
    }, 0)

    passport = []

    return passportValid === PASSPORT_SIZE ? passportValids + 1 : passportValids
  }, 0)

  console.log('day 04 - part 01', part01)
}

solve()
