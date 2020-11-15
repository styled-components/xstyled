/* eslint-disable no-console */
import { th } from './th'

describe('#th', () => {
  let consoleError: any

  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })

  afterEach(() => {
    console.error = consoleError
  })

  it('warn if value is not found', () => {
    expect(th('foo')({})).toBe(undefined)
    expect(console.error).toHaveBeenCalledWith('value "foo" not found in theme')
  })
})
