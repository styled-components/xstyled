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
      expect(
        scope('a.b.c')({ theme: { scope: { a: { b: { c: 'd' } } } } }),
      ).toBe('d')
    })

    it('uses default value when `true`', () => {
      const scope = themeGetter<{ scope: { default: string } }, 'scope'>({
        key: 'scope',
      })
      expect(scope(true)({ theme: { scope: { default: 'foo' } } })).toBe('foo')
    })

    it('supports shorthand', () => {
      const scope = themeGetter({ key: 'scope', shorthand: true })
      expect(scope('1 value 2')({ theme: { scope: { value: 'foo' } } })).toBe(
        '1 foo 2',
      )
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
      const scope = themeGetter({
        key: 'scope',
        transform: x => (typeof x === 'number' ? x + 1 : x),
      })
      const theme = { scope: [1] }
      expect(scope(10)({ theme })).toBe(11)
      expect(scope(0)({ theme })).toBe(2)
    })

    it('supports transform func from theme', () => {
      const scope = themeGetter({
        key: 'scope',
        name: 'getter',
        transform: x => (typeof x === 'number' ? x + 1 : x),
      })
      const theme = {
        scope: [1],
        transformers: {
          getter: (x: string | number) => (typeof x === 'number' ? x + 2 : x),
        },
      }
      expect(scope(10)({ theme })).toBe(12)
      expect(scope(0)({ theme })).toBe(3)
    })
  })

  describe('#style', () => {
    it('works without any theme', () => {
      expect(fontFamily({ fontFamily: 'title' })).toEqual({
        fontFamily: 'title',
      })
    })

    it('works with states', () => {
      expect(fontFamily({ hoverFontFamily: 'title' })).toEqual({
        '&:hover': {
          fontFamily: 'title',
        },
      })
      expect(fontFamily({ motionReduceFontFamily: { md: 'title' } })).toEqual({
        '@media (prefers-reduced-motion: reduce)': {
          '@media (min-width: 768px)': { fontFamily: 'title' },
        },
      })
    })

    it('returns empty object if style is not valid', () => {
      expect(fontFamily({ fontFamily: () => {} })).toEqual({})
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
      interface Theme {
        arial: string
      }
      expect(
        fontFamily({
          fontFamily: 'title',
          theme: {
            arial: 'arial',
            fonts: { title: ({ theme }: { theme: Theme }) => theme.arial },
          },
        }),
      ).toEqual({
        fontFamily: 'arial',
      })
    })
  })
})
