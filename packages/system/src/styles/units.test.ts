import { getPx, getDuration } from './units'

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

describe('#getDuration', () => {
  it('reads value from theme', () => {
    const props = { theme: { durations: { fast: 200 } } }
    expect(getDuration('fast')(props)).toBe('200ms')
    expect(getDuration('300')(props)).toBe('300ms')
    expect(getDuration('1s')(props)).toBe('1s')
  })
})
