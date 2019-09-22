import { th } from '@xstyled/system'
import {
  toCustomPropertiesReferences,
  toCustomPropertiesDeclarations,
} from './customProperties'

describe('#toCustomPropertiesReferences', () => {
  it('only transforms string', () => {
    expect(toCustomPropertiesReferences({ foo: 'bar' })).toEqual({
      foo: 'var(--foo, bar)',
    })
    expect(toCustomPropertiesReferences({ foo: 2 })).toEqual({})
    expect(toCustomPropertiesReferences({ foo: null })).toEqual({})
    expect(toCustomPropertiesReferences({ foo: false })).toEqual({})
    expect(toCustomPropertiesReferences({ foo: undefined })).toEqual({})
  })

  it('supports nesting', () => {
    expect(
      toCustomPropertiesReferences({ colors: { primary: 'blue' } }),
    ).toEqual({
      colors: {
        primary: 'var(--colors-primary, blue)',
      },
    })
  })

  it('supports xstyled func references', () => {
    expect(
      toCustomPropertiesReferences({
        colors: { blue: '#0000FF', primary: th.color('blue') },
      }),
    ).toEqual({
      colors: {
        blue: 'var(--colors-blue, #0000FF)',
        primary: 'var(--colors-primary, #0000FF)',
      },
    })
  })

  it('handles camel case', () => {
    expect(
      toCustomPropertiesReferences({
        colors: { fooBar: 'x' },
      }),
    ).toEqual({
      colors: {
        fooBar: 'var(--colors-fooBar, x)',
      },
    })
  })

  it('supports prefix', () => {
    expect(
      toCustomPropertiesReferences(
        {
          foo: 'bar',
        },
        'xstyled',
      ),
    ).toEqual({
      foo: 'var(--xstyled-foo, bar)',
    })
  })
})

describe('#toCustomPropertiesDeclarations', () => {
  it('only transforms string', () => {
    expect(toCustomPropertiesDeclarations({ foo: 'bar' })).toBe('--foo: bar;')
    expect(toCustomPropertiesDeclarations({ foo: 2 })).toBe('')
    expect(toCustomPropertiesDeclarations({ foo: null })).toBe('')
    expect(toCustomPropertiesDeclarations({ foo: false })).toBe('')
    expect(toCustomPropertiesDeclarations({ foo: undefined })).toBe('')
  })

  it('handles camel case', () => {
    expect(toCustomPropertiesDeclarations({ fooBar: 'x' })).toBe('--fooBar: x;')
  })

  it('supports nesting', () => {
    expect(
      toCustomPropertiesDeclarations({ colors: { primary: 'blue' } }),
    ).toBe('--colors-primary: blue;')
  })

  it('supports xstyled func references', () => {
    expect(
      toCustomPropertiesDeclarations({
        colors: { blue: '#0000FF', primary: th.color('blue') },
      }),
    ).toBe('--colors-blue: #0000FF;--colors-primary: #0000FF;')
  })

  it('supports prefix', () => {
    expect(
      toCustomPropertiesDeclarations(
        {
          foo: 'bar',
        },
        'xstyled',
      ),
    ).toBe('--xstyled-foo: bar;')
  })
})
