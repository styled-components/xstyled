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
    expect(toCustomPropertiesDeclarations({ foo: 'bar' })).toEqual({
      '--foo': 'bar',
    })
    expect(toCustomPropertiesDeclarations({ foo: 2 })).toEqual({})
    expect(toCustomPropertiesDeclarations({ foo: null })).toEqual({})
    expect(toCustomPropertiesDeclarations({ foo: false })).toEqual({})
    expect(toCustomPropertiesDeclarations({ foo: undefined })).toEqual({})
  })

  it('supports nesting', () => {
    expect(
      toCustomPropertiesDeclarations({ colors: { primary: 'blue' } }),
    ).toEqual({
      '--colors-primary': 'blue',
    })
  })

  it('supports xstyled func references', () => {
    expect(
      toCustomPropertiesDeclarations({
        colors: { blue: '#0000FF', primary: th.color('blue') },
      }),
    ).toEqual({
      '--colors-blue': '#0000FF',
      '--colors-primary': '#0000FF',
    })
  })

  it('supports prefix', () => {
    expect(
      toCustomPropertiesDeclarations(
        {
          foo: 'bar',
        },
        'xstyled',
      ),
    ).toEqual({
      '--xstyled-foo': 'bar',
    })
  })
})
