/* eslint-env browser */
import { languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-diff'
import './code-theme.css'

const ts = {
  'styled-template-string': {
    pattern: /(styled(\.\w+|\([^)]*\))(\.\w+(\([^)]*\))*)*|css|injectGlobal|createGlobalStyle|keyframes|\.extend|\.withComponent)`(?:\$\{[^}]+\}|\\\\|\\?[^\\])*?`/,
    lookbehind: true,
    greedy: true,
    inside: {
      string: {
        pattern: /[^$;]+/,
        inside: languages.css,
        alias: 'language-css',
      },
    },
  },
}

// NOTE: This highlights template-strings as strings of CSS
languages.insertBefore('jsx', 'template-string', ts)
require('prismjs').languages.insertBefore('js', 'template-string', ts)
