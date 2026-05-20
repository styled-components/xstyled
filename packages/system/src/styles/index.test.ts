import { system } from '.'
import { defaultTheme } from '../defaultTheme'

describe('#system', () => {
  it('generates style', () => {
    expect(system({ m: 1 })).toEqual({ margin: '1px' })
  })

  it('keeps breakpoints in order', () => {
    const res = system({
      theme: defaultTheme,
      display: 'flex',
      pt: { sm: 0, lg: 50 },
      pb: { md: 0, lg: 50 },
      spaceY: { _: 3, sm: 0 },
      spaceX: { sm: 4 },
    })
    const keys = Object.keys(res ?? {})
    expect(keys).toEqual([
      'display',
      '& > :not([hidden]) ~ :not([hidden])',
      '@media (min-width: 640px)',
      '@media (min-width: 768px)',
      '@media (min-width: 1024px)',
    ])
  })
})
