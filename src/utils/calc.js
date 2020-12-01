export const multiply = (...numbers) =>
  numbers.reduce((a, b) => Number(a) * Number(b), 1)

export const sum = (...numbers) =>
  numbers.reduce((a, b) => Number(a) + Number(b), 0)
