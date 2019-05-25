import { style } from './style'

describe('#style', () => {
  const fontFamily = style({
    prop: 'fontFamily',
    key: 'fonts',
  })

  describe('style', () => {
    it('should work without any theme', () => {
      expect(fontFamily({ fontFamily: 'title' })).toEqual({
        fontFamily: 'title',
      })
    })

    it('should work with a theme', () => {
      expect(
        fontFamily({
          fontFamily: 'title',
          theme: { fonts: { title: 'arial' } },
        }),
      ).toEqual({
        fontFamily: 'arial',
      })
    })

    it('should work with theme functions', () => {
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
