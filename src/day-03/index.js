import { parseFileToArray } from '../utils/file'

const TREE_CHAR = '#'

const getNextPosition = (line, position, steps = 3) =>
  (position + steps) % line.length

const getCountTrees = (lines, steps, hops = 1) => {
  let position = 0

  return lines.reduce((trees, line, index) => {
    if ((index + 1) % hops === 1) return trees

    position = getNextPosition(line, position, steps)
    return line.charAt(position) === TREE_CHAR ? trees + 1 : trees
  }, 0)
}

export const solve = async () => {
  const arr = await parseFileToArray('day-03/input.txt')
  const [, ...lines] = arr
  const part01 = getCountTrees(lines)

  console.log('day 03 - part 01', part01)

  let part02 = part01

  part02 *= getCountTrees(lines, 1)
  part02 *= getCountTrees(lines, 5)
  part02 *= getCountTrees(lines, 7)
  part02 *= getCountTrees(lines, 1, 2)

  console.log('day 03 - part 02', part02)
}
