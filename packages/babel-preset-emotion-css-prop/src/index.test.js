import { transform } from '@babel/core'
import preset from './index'

const testPreset = code => {
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
      "import { jsx as ___xstyledEmotionJSX } from \\"@xstyled/emotion\\";

      function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

      import * as React from 'react';

      var _ref = process.env.NODE_ENV === \\"production\\" ? {
        name: \\"1v4u9bq-Button\\",
        styles: \\"color:hotpink;label:Button;\\"
      } : {
        name: \\"1v4u9bq-Button\\",
        styles: \\"color:hotpink;label:Button;\\",
        map: \\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT1UiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuICBleHBvcnQgbGV0IEJ1dHRvbiA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgY29sb3I6ICdob3RwaW5rJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuIl19 */\\"
      };

      export let Button = props => {
        return ___xstyledEmotionJSX(React.Fragment, null, ___xstyledEmotionJSX(\\"button\\", _extends({
          css: _ref
        }, props)));
      };"
    `)
  })
})
