import { parseFileToArray } from '../utils/file'

const VALIDATION_KEYS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
const EYE_COLORS = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']

const checkYearRange = (value, start, end) =>
  Number(value) >= start && Number(value) <= end

const parseHeightToNumber = (value, metric = 'cm') =>
  Number(value.replace(metric, ''))

const validateHeight = (value) => {
  if (value.includes('cm')) {
    const cm = parseHeightToNumber(value)
    return cm >= 150 && cm <= 193
  }

  if (value.includes('in')) {
    const number = parseHeightToNumber(value, 'in')
    return number >= 59 && number <= 76
  }
}

const validateValue = (key, value) => {
  switch (key) {
    case 'byr': {
      return checkYearRange(value, 1920, 2002)
    }
    case 'iyr': {
      return checkYearRange(value, 2010, 2020)
    }
    case 'eyr': {
      return checkYearRange(value, 2020, 2030)
    }
    case 'hgt': {
      return validateHeight(value)
    }
    case 'hcl': {
      return !!value.match(/#([a-f]|[0-9]){6}/)
    }
    case 'ecl': {
      return EYE_COLORS.includes(value)
    }
    case 'pid': {
      return value.length === 9
    }
    default: {
      return true
    }
  }
}

export const solve = async () => {
  const arr = await parseFileToArray('day-04/input.txt')
  const PASSPORT_SIZE = VALIDATION_KEYS.length

  let passport = []

  const solution = arr.reduce(
    ({ part1, part2 }, line) => {
      if (line) {
        passport.push(...line.split(' '))
        return { part1, part2 }
      }

      const passportValid = passport.reduce(
        ({ validsPart1, validsPart2 }, item) => {
          const [key, value] = item.split(':')

          return {
            validsPart1: VALIDATION_KEYS.includes(key)
              ? validsPart1 + 1
              : validsPart1,
            validsPart2:
              VALIDATION_KEYS.includes(key) && validateValue(key, value)
                ? validsPart2 + 1
                : validsPart2,
          }
        },
        { validsPart1: 0, validsPart2: 0 },
      )

      passport = []

      return {
        part1: passportValid.validsPart1 === PASSPORT_SIZE ? part1 + 1 : part1,
        part2: passportValid.validsPart2 === PASSPORT_SIZE ? part2 + 1 : part2,
      }
    },
    { part1: 0, part2: 0 },
  )

  console.log('day 04 - part 01', solution.part1)
  console.log('day 04 - part 02', solution.part2)
}
