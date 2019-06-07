import { style } from './style'

describe('#style', () => {
  const fontFamily = style({
    prop: 'fontFamily',
    key: 'fonts',
  })

  describe('style', () => {
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
