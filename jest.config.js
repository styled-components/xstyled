module.exports = {
  transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*@xstyled.*).*$'],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/website/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleNameMapper: {
    'styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
  },
}
