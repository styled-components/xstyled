import * as React from 'react'
import { CSSInterpolation } from '@emotion/serialize'
import { Global, css } from '@emotion/react'
import { createPreflight } from '@xstyled/system'
import { useTheme } from '@xstyled/emotion'

function createGlobalStyle(...styles: Array<CSSInterpolation | Function>) {
  return function Preflight() {
    const theme = useTheme()

    // emotion does not support function interpolation so we do from our side
    // https://github.com/emotion-js/emotion/blob/%40emotion/serialize%401.0.0/packages/serialize/src/index.js#L189
    const parsedStyles = styles.map((style) => {
      if (typeof style === 'function') {
        return style({ theme })
      }

      return style
    })

    return <Global styles={css(parsedStyles)} />
  }
}

export const Preflight = createPreflight({ createGlobalStyle })
