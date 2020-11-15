module.exports = (api) => {
  api.cache(true)

  const config = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  }

  return config
}
