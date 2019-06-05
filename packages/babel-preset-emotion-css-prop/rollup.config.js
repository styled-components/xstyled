import { getRollupConfig } from '../../config/rollup'
import pkg from './package.json'

export default getRollupConfig({
  pwd: __dirname,
  buildName: 'xstyled-babel-preset-emotion-css-prop',
  pkg,
})
