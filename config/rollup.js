import path from 'path'
import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'

export const getRollupConfig = ({ pwd, buildName, name }) => {
  const SOURCE_DIR = path.resolve(pwd, 'src')
  const DIST_DIR = path.resolve(pwd, 'dist')
  const input = `${SOURCE_DIR}/index.js`
  const external = id => !id.startsWith('.') && !id.startsWith('/')
  const getBabelOptions = ({ useESModules }) => ({
    exclude: '**/node_modules/**',
    runtimeHelpers: true,
    configFile: path.join(pwd, '../../babel.config.js'),
    plugins: [
      'babel-plugin-annotate-pure-calls',
      ['@babel/plugin-transform-runtime', { useESModules }],
    ],
  })

  const globals = {
    'styled-components': 'styled',
  }

  const umdConfig = {
    input,
    output: {
      file: `${DIST_DIR}/${buildName}.umd.js`,
      format: 'umd',
      name,
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      babel(getBabelOptions({ useESModules: false })),
      nodeResolve(),
      commonjs(),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  }

  const minConfig = {
    input,
    output: {
      file: `${DIST_DIR}/${buildName}.min.js`,
      format: 'umd',
      name,
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      babel(getBabelOptions({ useESModules: true })),
      nodeResolve(),
      commonjs(),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser(),
    ],
  }

  const cjsConfig = {
    input,
    output: { file: `${DIST_DIR}/${buildName}.cjs.js`, format: 'cjs' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: false })), sizeSnapshot()],
  }

  const esmConfig = {
    input,
    output: { file: `${DIST_DIR}/${buildName}.es.js`, format: 'esm' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: true })), sizeSnapshot()],
  }

  if (process.env.WATCH_MODE) {
    return [esmConfig, cjsConfig]
  }

  return [esmConfig, cjsConfig, umdConfig, minConfig]
}
