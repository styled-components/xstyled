import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import baseRollUpConfig from '../../build/rollup.config'

const bundle = (config) => ({
  ...config,
  input: 'src/native/index.ts',
  external: (id) => !/^[./]/.test(id),
})

const esbuildConfig = {
  target: 'es2015',
}

const nativeConfig = [
  bundle({
    plugins: [esbuild(esbuildConfig)],
    output: [
      {
        file: `native/dist/index.cjs`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `native/dist/index.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [
      esbuild({
        ...esbuildConfig,
        minify: true,
      }),
    ],
    output: [
      {
        file: `native/dist/index.min.mjs`,
        format: 'es',
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `native/dist/index.d.ts`,
      format: 'es',
    },
  }),
]

export default [...baseRollUpConfig, ...nativeConfig]
