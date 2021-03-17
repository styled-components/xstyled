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

    it('supports second arg default', () => {
      const scope = themeGetter({
        key: 'scope',
      })
      expect(scope('no-value', 'this-one')({ theme: { scope: {} } })).toBe(
        'this-one',
      )
    })

    it('uses first as default without second arg', () => {
      const scope = themeGetter({
        key: 'scope',
      })
      expect(scope('no-value')({ theme: { scope: {} } })).toBe('no-value')
    })

    it('uses "default" value in theme when `true`', () => {
      const scope = themeGetter({
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

    it('supports array', () => {
      const scope = themeGetter({ key: 'scope' })
      expect(
        scope('value')({ theme: { scope: { value: ['foo', 'bar'] } } }),
      ).toBe('foo,bar')
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
        transform: (x) => (typeof x === 'number' ? x + 1 : x),
      })
      const theme = { scope: [1] }
      expect(scope(10)({ theme })).toBe(11)
      expect(scope(0)({ theme })).toBe(2)
    })

    it('supports transform func from theme', () => {
      const scope = themeGetter({
        key: 'scope',
        name: 'getter',
        transform: (x) => (typeof x === 'number' ? x + 1 : x),
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

    it('works with variants', () => {
      const theme = {
        states: { hover: '&:hover', first: '&:first-child' },
        screens: { _: 0, md: 400 },
      }
      expect(fontFamily({ fontFamily: { hover: 'title' }, theme })).toEqual({
        '&:hover': {
          fontFamily: 'title',
        },
      })
      expect(
        fontFamily({
          fontFamily: { hover: { md: 'title' } },
          theme,
        }),
      ).toEqual({
        '&:hover': {
          '@media (min-width: 400px)': { fontFamily: 'title' },
        },
      })
      expect(
        fontFamily({
          fontFamily: { hover: { first: { md: 'title' } } },
          theme,
        }),
      ).toEqual({
        '&:hover': {
          '&:first-child': {
            '@media (min-width: 400px)': { fontFamily: 'title' },
          },
        },
      })
      expect(
        fontFamily({
          fontFamily: { _: 'title', hover: 'title2' },
          theme,
        }),
      ).toEqual({
        fontFamily: 'title',
        '&:hover': {
          fontFamily: 'title2',
        },
      })
    })

    it('returns empty object if style is not valid', () => {
      expect(fontFamily({ fontFamily: () => {} })).toEqual({})
    })

    it('works with breakpoints', () => {
      const theme = { screens: { _: 0, md: 400 } }
      expect(
        fontFamily({
          fontFamily: { _: 'title' },
          theme,
        }),
      ).toEqual({
        fontFamily: 'title',
      })
      expect(fontFamily({ fontFamily: { md: 'title' }, theme })).toEqual({
        '@media (min-width: 400px)': {
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
