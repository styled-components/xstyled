import { getFontSize, text } from './typography'

describe('#getFontSize', () => {
  it('gets a value and transforms it according to spec.', () => {
    const props = {}
    expect(getFontSize(1)(props)).toEqual('1px')
    expect(getFontSize(2)(props)).toEqual('2px')
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

describe('#text', () => {
  it('gets value from the theme and transforms it', () => {
    const theme = {
      texts: { custom: { fontSize: 10, lineHeight: 1.5 } },
    }
    expect(text({ text: 'custom', theme })).toEqual({
      fontSize: '10px',
      lineHeight: 1.5,
    })
    expect(text({ text: 'xs', theme })).toEqual({})
  })
})
