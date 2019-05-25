/* eslint-disable no-console */
import { variant } from './variant'

describe('#variant', () => {
  let consoleError

  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })

  afterEach(() => {
    console.error = consoleError
  })

  it('creates a variant prop', () => {
    const variants = variant({
      variants: {
        primary: 'p',
        secondary: 's',
      },
    })
    expect(variants({ variant: 'primary' })).toBe('p')
    expect(variants({ variant: 'secondary' })).toBe('s')
  })

  it('warns if not found', () => {
    const variants = variant({
      variants: {
        primary: 'p',
        secondary: 's',
      },
    })
    expect(variants({ variant: 'xx' })).toBe(undefined)
    expect(console.error).toHaveBeenCalledWith('variant "xx" not found')
  })

  it('supports theme variant', () => {
    const variants = variant({
      key: 'buttons',
      variants: {
        primary: 'p',
        secondary: 's',
      },
    })
    const theme = { buttons: { primary: 'xp' } }
    expect(variants({ theme })).toBe(undefined)
    expect(variants({ variant: 'primary' })).toBe('p')
    expect(variants({ theme: {}, variant: 'primary' })).toBe('p')
    expect(variants({ theme, variant: 'primary' })).toBe('xp')
    expect(variants({ theme, variant: 'secondary' })).toBe('s')
  })

  it('supports nested values', () => {
    const variants = variant({
      key: 'variants.buttons',
      variants: {
        primary: {
          dark: 'pd',
          light: 'pl',
        },
        secondary: {
          dark: 'sd',
          light: 'sl',
        },
      },
    })
    const theme = { variants: { buttons: { primary: { dark: 'xpd' } } } }
    expect(variants({ theme })).toBe(undefined)
    expect(variants({ variant: 'primary.dark' })).toBe('pd')
    expect(variants({ variant: 'primary.light' })).toBe('pl')
    expect(variants({ variant: 'secondary.dark' })).toBe('sd')
    expect(variants({ variant: 'secondary.light' })).toBe('sl')
    expect(variants({ theme, variant: 'primary.dark' })).toBe('xpd')
    expect(variants({ theme, variant: 'primary.light' })).toBe('pl')
  })
})
