import { parseFileToArray } from '../utils/file'

const getNextPosition = (line, position, steps = 3) =>
  (position + steps) % line.length

export const solve = async () => {
  const arr = await parseFileToArray('day-03/input.txt')
  const [, ...lines] = arr
  const treeChar = '#'
  let position = 0

  const countTrees = lines.reduce((trees, line) => {
    position = getNextPosition(line, position)
    return line.charAt(position) === treeChar ? trees + 1 : trees
  }, 0)

  console.log('day 03 - part 01', countTrees)
}
