import { th } from './th'
import { rpxTransformers } from './transformers'

describe('#rpxTransformers', () => {
  it('should use rem instead of px', () => {
    const baseProps = { theme: { transformers: {} } }
    expect(th.space(1)(baseProps)).toBe('1px')
    expect(th.space(2)(baseProps)).toBe('2px')
    expect(th.border(2)(baseProps)).toBe('2px solid')
    const remProps = { theme: { transformers: { ...rpxTransformers } } }
    expect(th.space(1)(remProps)).toBe('0.0625rem')
    expect(th.space(2)(remProps)).toBe('0.125rem')
    expect(th.border(2)(remProps)).toBe('0.125rem solid')
  })
})
