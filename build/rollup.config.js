import path from 'path'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const name = require(path.resolve(
  process.cwd(),
  './package.json',
)).main.replace(/\.js$/, '')

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  external: (id) => !/^[./]/.test(id),
})

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [esbuild({ minify: true })],
    output: [
      {
        file: `${name}.min.mjs`,
        format: 'es',
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
]
