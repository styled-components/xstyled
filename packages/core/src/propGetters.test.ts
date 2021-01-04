import { propGetters } from './propGetters'

describe('#propGetters', () => {
  it('handles simple values', () => {
    expect(propGetters['border-radius']('10')({})).toBe('10px')
    expect(propGetters['font-size']('10')({})).toBe('10px')
  })

  it('handles multiple dimensions', () => {
    expect(propGetters['border-radius']('1 2')({})).toBe('1px 2px')
  })

  it('handles multiple values', () => {
    expect(
      propGetters['box-shadow']('theme-shadow, 1px 0 0 red')({
        theme: { shadows: { 'theme-shadow': '10px black' } },
      }),
    ).toBe('10px black,1px 0 0 red')
  })

  it('handles theme', () => {
    expect(
      propGetters['border-radius']('md')({ theme: { radii: { md: 10 } } }),
    ).toBe('10px')
    expect(
      propGetters['border-radius']('md md')({ theme: { radii: { md: 10 } } }),
    ).toBe('10px 10px')
  })
})
