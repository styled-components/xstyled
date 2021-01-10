import { defaultTheme } from './defaultTheme'

describe('#defaultTheme', () => {
  it('checks sizes without suffix have keys greater than 1', () => {
    Object.entries(defaultTheme.sizes).forEach(([key, value]) => {
      const numKey = Number(key)

      if (!isNaN(numKey) && value) {
        expect(numKey).toBeGreaterThan(1)
      }
    })
  })
})
