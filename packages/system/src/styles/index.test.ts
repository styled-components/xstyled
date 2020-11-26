import { system } from '.'

describe('#system', () => {
  it('generates style', () => {
    expect(system({ m: 1 })).toEqual({ margin: '1px' })
  })
})
