import { sum } from '.'

describe('sum', () => {
  it('should sum 2 + 2 and returns 4', () => {
    const total = sum(2, 2)

    expect(total).toEqual(4)
  })
})
