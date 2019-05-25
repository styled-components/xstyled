module.exports = {
  transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*@xstyled.*).*$'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/website/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
}
