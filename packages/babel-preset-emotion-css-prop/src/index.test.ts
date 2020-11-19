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

      function _EMOTION_STRINGIFIED_CSS_ERROR__() { return \\"You have tried to stringify object returned from \`css\` function. It isn't supposed to be used directly (e.g. as value of the \`className\` prop), but rather handed to emotion so it can handle it (e.g. as value of \`css\` prop).\\"; }

      import * as React from 'react';
      import { jsx as ___xstyledEmotionJSX } from \\"@xstyled/emotion\\";

      var _ref = process.env.NODE_ENV === \\"production\\" ? {
        name: \\"3sn2xs\\",
        styles: \\"color:hotpink\\"
      } : {
        name: \\"1v4u9bq-Button\\",
        styles: \\"color:hotpink;label:Button;\\",
        toString: _EMOTION_STRINGIFIED_CSS_ERROR__
      };

      export let Button = props => {
        return ___xstyledEmotionJSX(React.Fragment, null, ___xstyledEmotionJSX(\\"button\\", _extends({
          css: _ref
        }, props)));
      };"
    `)
  })
})
