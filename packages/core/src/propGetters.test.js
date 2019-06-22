import { propGetters } from './propGetters'

describe('#propGetters', () => {
  describe('border-radius', () => {
    it('handles several values', () => {
      expect(propGetters['border-radius']('10')({})).toBe('10px')
      expect(propGetters['border-radius']('1 2')({})).toBe('1px 2px')
      expect(
        propGetters['border-radius']('md')({ theme: { radii: { md: 10 } } }),
      ).toBe('10px')
      expect(
        propGetters['border-radius']('md md')({ theme: { radii: { md: 10 } } }),
      ).toBe('10px 10px')
    })
  })
})
