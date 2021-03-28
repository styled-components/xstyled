import { container, getInset } from './layout'

const theme = {
  states: {
    hover: '&:hover',
  },
  screens: {
    _: 0,
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
}

describe('#container', () => {
  it('works with `true`', () => {
    expect(container({ container: true, theme })).toEqual({
      width: '100%',
      '@media (min-width: 640px)': { maxWidth: 640 },
      '@media (min-width: 768px)': { maxWidth: 768 },
      '@media (min-width: 1024px)': { maxWidth: 1024 },
      '@media (min-width: 1280px)': { maxWidth: 1280 },
      '@media (min-width: 1536px)': { maxWidth: 1536 },
    })
  })

  it('works with breakpoints', () => {
    expect(container({ container: { md: true }, theme })).toEqual({
      width: '100%',
      '@media (min-width: 768px)': {
        '@media (min-width: 640px)': { maxWidth: 640 },
        '@media (min-width: 768px)': { maxWidth: 768 },
        '@media (min-width: 1024px)': { maxWidth: 1024 },
        '@media (min-width: 1280px)': { maxWidth: 1280 },
        '@media (min-width: 1536px)': { maxWidth: 1536 },
      },
    })
  })
})

describe('#getInset', () => {
  it('gets a value and transforms it according to spec.', () => {
    const props = {}
    expect(getInset(1)(props)).toEqual('1px')
    expect(getInset(2)(props)).toEqual('2px')
    expect(getInset(-2)(props)).toEqual('-2px')
    expect(getInset(10)(props)).toEqual('10px')
    expect(getInset(-10)(props)).toEqual('-10px')
    expect(getInset('50%')(props)).toEqual('50%')
  })

  it('gets value from the theme', () => {
    const props = { theme: { inset: [0, 10, 20, 30, 40] } }
    expect(getInset(1)(props)).toEqual('10px')
    expect(getInset(2)(props)).toEqual('20px')
    expect(getInset(-2)(props)).toEqual('-20px')
    expect(getInset(10)(props)).toEqual('10px')
    expect(getInset(-10)(props)).toEqual('-10px')
    expect(getInset('50%')(props)).toEqual('50%')
  })

  it('gets objects value from the theme', () => {
    const props = { theme: { inset: { md: 10 } } }
    expect(getInset('md')(props)).toEqual('10px')
    expect(getInset('-md')(props)).toEqual('-10px')
    expect(getInset('-10')(props)).toEqual('-10px')
    expect(getInset('-10px')(props)).toEqual('-10px')
  })
})
