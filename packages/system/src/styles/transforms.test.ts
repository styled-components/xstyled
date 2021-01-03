import { transforms } from './transforms'

describe('#transform', () => {
  it('uses generic transform if true', () => {
    expect(transforms({ transform: true })).toEqual({
      '--x-translate-x': 0,
      '--x-translate-y': 0,
      '--x-rotate': 0,
      '--x-skew-x': 0,
      '--x-skew-y': 0,
      '--x-scale-x': '1',
      '--x-scale-y': '1',
      transform:
        'translate3d(var(--x-translate-x), var(--x-translate-y), 0) rotate(var(--x-rotate)) skewX(var(--x-skew-x)) skewY(var(--x-skew-y)) scaleX(var(--x-scale-x)) scaleY(var(--x-scale-y))',
    })
  })

  it('uses uses standard transform else', () => {
    expect(transforms({ transform: 'rotate(10deg)' })).toEqual({
      transform: 'rotate(10deg)',
    })
  })
})
