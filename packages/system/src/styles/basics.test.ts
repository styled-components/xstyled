import { getPx } from './basics'

describe('#getPx', () => {
  it('supports various kind of units', () => {
    const props = {}
    expect(getPx(1)(props)).toBe('1px')
    expect(getPx('1')(props)).toBe('1px')
    expect(getPx('1px')(props)).toBe('1px')
    expect(getPx('1em')(props)).toBe('1em')
    expect(getPx('1%')(props)).toBe('1%')
    expect(getPx('1rpx')(props)).toBe('0.0625rem')
  })

  it('allows configuring rootFontSize', () => {
    const props = { theme: { settings: { rootFontSize: 12 } } }
    expect(getPx('12rpx')(props)).toBe('1rem')
  })
})
