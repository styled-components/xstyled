module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/website/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
}
