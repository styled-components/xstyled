import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  external: (id) => !/^[./]/.test(id),
})

const esbuildConfig = {
  target: 'es2015',
}

export default [
  bundle({
    plugins: [esbuild(esbuildConfig)],
    output: [
      {
        file: `dist/index.cjs`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `dist/index.mjs`,
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
        file: `dist/index.min.mjs`,
        format: 'es',
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `dist/index.d.ts`,
      format: 'es',
    },
  }),
]
