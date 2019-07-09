import { unit, px, rpx, percent, remPx } from './unit'

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
      expect(percent(10)).toBe(10)
      expect(percent(0.3)).toBe('30%')
      expect(percent('20em')).toBe('20em')
      expect(percent(-0.3)).toBe('-30%')
      // rounds percent
      expect(percent(0.3333333333)).toBe('33.3333%')
    })
  })

  describe('#remPx', () => {
    it('transforms num into rem', () => {
      expect(remPx(0)).toBe(0)
      expect(remPx(10)).toBe('0.625rem')
      expect(remPx('10px')).toBe('10px')
    })
  })

  describe('#rpx', () => {
    it('transforms "rpx" into rem', () => {
      expect(rpx(0)).toBe(0)
      expect(rpx(10)).toBe(10)
      expect(rpx('10rpx')).toBe('0.625rem')
      expect(rpx('16rpx')).toBe('1rem')
      expect(rpx('-16rpx')).toBe('-1rem')
      expect(rpx('0rpx')).toBe(0)
      expect(rpx('10px')).toBe('10px')
      expect(rpx('10px')).toBe('10px')
    })
  })
})
