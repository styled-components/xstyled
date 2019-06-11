import { getRollupConfig } from '../../config/rollup'
import pkg from './package.json'

export default getRollupConfig({
  pwd: __dirname,
  buildName: 'xstyled-prop-types',
  name: 'xstyledPropTypes',
  pkg,
  globals: {
    'prop-types': 'PropTypes',
  },
})
