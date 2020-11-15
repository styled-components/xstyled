// @ts-nocheck
import { transform } from '@babel/core'
import preset from './index'

const testPreset = (code) => {
  const result = transform(code, {
    presets: [preset],
    configFile: false,
  })

  return result.code
}

const code = `
  import * as React from 'react'

  export let Button = props => {
    return (
      <>
        <button
          css={{
            color: 'hotpink',
          }}
          {...props}
        />
      </>
    )
  }
`

describe('preset', () => {
  it('transforms code', () => {
    expect(testPreset(code)).toMatchInlineSnapshot(`
      "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

      import * as React from 'react';
      import { jsx as ___xstyledEmotionJSX } from \\"@xstyled/emotion\\";
      var _ref = {
        name: \\"1q24rv0-Button\\",
        styles: \\"color:hotpink;;label:Button;\\"
      };
      export let Button = props => {
        return ___xstyledEmotionJSX(React.Fragment, null, ___xstyledEmotionJSX(\\"button\\", _extends({
          css: _ref
        }, props)));
      };"
    `)
  })
})
