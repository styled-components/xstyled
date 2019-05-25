module.exports = api => {
  api.cache(true)

  const config = {
    presets: [
      ['@babel/preset-env', { loose: true, modules: false }],
      '@babel/preset-react',
    ],
    plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
  }

  if (process.env.NODE_ENV === 'test') {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        ['@babel/plugin-transform-modules-commonjs', { loose: true }],
      ],
    }
  }

  return config
}
