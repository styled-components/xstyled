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

    it('supports shorthand mode', () => {
      const scope = themeGetter({ key: 'scope', shorthand: true })
      expect(scope('1 value 2')({ theme: { scope: { value: 'foo' } } })).toBe(
        '1 foo 2',
      )
    })

    it('supports multiple mode', () => {
      const scope = themeGetter({ key: 'scope', multiple: true })
      expect(scope('1, value, 2')({ theme: { scope: { value: 'foo' } } })).toBe(
        '1,foo,2',
      )
    })

    it('supports both shorthand and multiple modes', () => {
      const scope = themeGetter({
        key: 'scope',
        shorthand: true,
        multiple: true,
      })
      expect(
        scope('1, value y, 2')({ theme: { scope: { value: 'foo' } } }),
      ).toBe('1,foo y,2')
    })

    it('supports array', () => {
      const scope = themeGetter({ key: 'scope' })
      expect(
        scope('value')({ theme: { scope: { value: ['foo', 'bar'] } } }),
      ).toBe('foo,bar')
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
      expect(fontFamily({ fontFamily: { '&:empty': 'title' }, theme })).toEqual({
        '&:empty': {
          fontFamily: 'title',
        },
      })
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
      // https://github.com/gregberge/xstyled/issues/288
      expect(
        JSON.stringify(
          fontFamily({
            fontFamily: {
              _: { _: 'title', hover: 'title2' },
              md: { _: 'title3', hover: 'title4' },
            },
            theme,
          }),
          null,
          2,
        ),
      ).toEqual(
        JSON.stringify(
          {
            fontFamily: 'title',
            '&:hover': {
              fontFamily: 'title2',
            },
            '@media (min-width: 400px)': {
              fontFamily: 'title3',
              '&:hover': {
                fontFamily: 'title4',
              },
            },
          },
          null,
          2,
        ),
      )
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
      expect(fontFamily({
        fontFamily: { '@media (min-width: 355px)': 'title' },
        theme
      })).toEqual({
        '@media (min-width: 355px)': {
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

    it('allows apply', () => {
      expect(
        fontFamily.apply({
          fontFamily: 'title',
        })({
          theme: { fonts: { title: 'arial' } },
        }),
      ).toEqual({
        fontFamily: 'arial',
      })
    })

    describe('mixins', () => {
      const fontSize = style({
        prop: 'fontSize',
        key: 'fontSizes',
      })
      const text = style({
        prop: 'text',
        key: 'texts',
        css: (value) => fontSize.apply({ fontSize: value }),
      })

      it('supports functions', () => {
        const theme = {
          fontSizes: { xs: '0.8rem' },
          texts: { xs: 2 },
        }

        expect(text({ theme, text: 'xs' })).toEqual({ fontSize: 2 })
      })
    })
  })
})
