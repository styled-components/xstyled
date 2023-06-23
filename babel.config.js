module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    overrides: [
      {
        test: /react-native/,
        presets: ['module:metro-react-native-babel-preset'],
      },
    ],
  }
}
