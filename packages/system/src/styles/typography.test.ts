import { getFontSize } from './typography'

describe('#getFontSize', () => {
  it('gets a value and transforms it according to spec.', () => {
    const props = {}
    expect(getFontSize(1)(props)).toEqual('12px')
    expect(getFontSize(2)(props)).toEqual('14px')
    expect(getFontSize(10)(props)).toEqual('10px')
    expect(getFontSize('50%')(props)).toEqual('50%')
  })

  it('gets value from the theme', () => {
    const props = { theme: { fontSizes: [0, 10, 20, 30, 40] } }
    expect(getFontSize(1)(props)).toEqual('10px')
    expect(getFontSize(2)(props)).toEqual('20px')
    expect(getFontSize(10)(props)).toEqual('10px')
    expect(getFontSize('50%')(props)).toEqual('50%')
  })
})
