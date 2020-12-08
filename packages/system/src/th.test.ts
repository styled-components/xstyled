/* eslint-disable no-console */
import { th } from './th'

describe('#th', () => {
  it('supports default value', () => {
    expect(th('foo', 'bar')({})).toBe('bar')
  })
})
