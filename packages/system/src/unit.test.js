import { unit, px, percent } from './unit'

describe('util', () => {
  describe('#unit', () => {
    it('adds a unit if it is a number', () => {
      const em = unit('em')
      expect(em(0)).toBe(0)
      expect(em(10)).toBe('10em')
      expect(em(null)).toBe(null)
      expect(em(undefined)).toBe(undefined)
      expect(em('10px')).toBe('10px')
    })
  })

  describe('#px', () => {
    it('adds px if it is a number', () => {
      expect(px(0)).toBe(0)
      expect(px(10)).toBe('10px')
      expect(px(null)).toBe(null)
      expect(px(undefined)).toBe(undefined)
      expect(px('10px')).toBe('10px')
    })
  })

  describe('#percent', () => {
    it('transforms into percent < 1 and in px > 1', () => {
      expect(percent(0)).toBe(0)
      expect(percent(10)).toBe('10px')
      expect(percent(0.3)).toBe('30%')
      expect(percent('20em')).toBe('20em')
      expect(percent(-0.3)).toBe('-30%')
    })
  })
})
