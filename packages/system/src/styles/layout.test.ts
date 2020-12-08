import { container } from './layout'

describe('#container', () => {
  it('works with `true`', () => {
    expect(container({ container: true })).toEqual({
      width: '100%',
      '@media (min-width: 640px)': { maxWidth: 640 },
      '@media (min-width: 768px)': { maxWidth: 768 },
      '@media (min-width: 1024px)': { maxWidth: 1024 },
      '@media (min-width: 1280px)': { maxWidth: 1280 },
      '@media (min-width: 1536px)': { maxWidth: 1536 },
    })
  })

  it('works with breakpoints', () => {
    expect(container({ container: { md: true } })).toEqual({
      width: '100%',
      '@media (min-width: 768px)': {
        '@media (min-width: 640px)': { maxWidth: 640 },
        '@media (min-width: 768px)': { maxWidth: 768 },
        '@media (min-width: 1024px)': { maxWidth: 1024 },
        '@media (min-width: 1280px)': { maxWidth: 1280 },
        '@media (min-width: 1536px)': { maxWidth: 1536 },
      },
    })
  })
})
