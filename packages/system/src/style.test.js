import { style, themeGetter } from './style'

describe('#style', () => {
  const fontFamily = style({
    prop: 'fontFamily',
    key: 'fonts',
  })

  describe('#themeGetter', () => {
    it('reads from theme', () => {
      const scope = themeGetter({ key: 'scope' })
      expect(scope('value')({ theme: { scope: { value: 'foo' } } })).toBe('foo')
    })

    it('uses defaultVariants', () => {
      const scope = themeGetter({
        key: 'scope',
        defaultVariants: { foo: 'bar' },
      })
      const theme = { scope: { x: 'y' } }
      expect(scope('foo')({})).toBe('bar')
      expect(scope('x')({ theme })).toBe('y')
    })

    it('supports transform func', () => {
      const scope = themeGetter({ key: 'scope', transform: x => x + 1 })
      const theme = { scope: [1] }
      expect(scope(10)({ theme })).toBe(11)
      expect(scope(0)({ theme })).toBe(2)
    })
  })

  describe('#style', () => {
    it('works without any theme', () => {
      expect(fontFamily({ fontFamily: 'title' })).toEqual({
        fontFamily: 'title',
      })
    })

    it('returns null if style is not valid', () => {
      expect(fontFamily({ fontFamily: () => {} })).toBe(null)
    })

    it('works with breakpoints', () => {
      expect(fontFamily({ fontFamily: { xs: 'title' } })).toEqual({
        fontFamily: 'title',
      })
      expect(fontFamily({ fontFamily: { md: 'title' } })).toEqual({
        '@media (min-width: 768px)': {
          fontFamily: 'title',
        },
      })
    })

    it('works with a theme', () => {
      expect(
        fontFamily({
          fontFamily: 'title',
          theme: { fonts: { title: 'arial' } },
        }),
      ).toEqual({
        fontFamily: 'arial',
      })
    })

    it('works with theme functions', () => {
      expect(
        fontFamily({
          fontFamily: 'title',
          theme: {
            arial: 'arial',
            fonts: { title: ({ theme }) => theme.arial },
          },
        }),
      ).toEqual({
        fontFamily: 'arial',
      })
    })
  })
})
