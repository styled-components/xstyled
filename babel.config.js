module.exports = (api) => {
  api.cache(true)

  const config = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react',
      'module:metro-react-native-babel-preset',
      '@babel/preset-typescript',
    ],
  }

  return config
}
