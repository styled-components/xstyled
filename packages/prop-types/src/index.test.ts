import { space } from '@xstyled/system'
import { getSystemPropTypes } from '.'

describe('#getSystemPropTypes', () => {
  it('generates empty object if falsy', () => {
    const propTypes = getSystemPropTypes()
    expect(propTypes).toEqual({})
  })

  it('generates PropTypes from system', () => {
    const propTypes = getSystemPropTypes(space)
    expect(Object.keys(propTypes)).toMatchInlineSnapshot(`
      Array [
        "margin",
        "m",
        "marginTop",
        "mt",
        "marginRight",
        "mr",
        "marginBottom",
        "mb",
        "marginLeft",
        "ml",
        "mx",
        "my",
        "padding",
        "p",
        "paddingTop",
        "pt",
        "paddingRight",
        "pr",
        "paddingBottom",
        "pb",
        "paddingLeft",
        "pl",
        "px",
        "py",
        "spaceX",
        "spaceY",
        "spaceXReverse",
        "spaceYReverse",
      ]
    `)
  })
})
