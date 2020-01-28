import { getRollupConfig } from '../../config/rollup'
import pkg from './package.json'

export default getRollupConfig({
  pwd: __dirname,
  buildName: 'xstyled-emotion',
  name: 'xstyled',
  pkg,
  globals: {
    react: 'React',
    '@xstyled/system': 'xstyledSystem',
    '@emotion/core': 'emotion',
    '@emotion/styled': 'styled',
  },
})
