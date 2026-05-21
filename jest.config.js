module.exports = {
  testEnvironment: 'jsdom',
  // Emotion 11.14 gates its dev-only "css prop must not be a string" throw
  // behind the "development" export condition; jsdom doesn't request it by
  // default, so opt in here so the cx.test invariant still fires.
  testEnvironmentOptions: {
    customExportConditions: ['browser', 'development'],
  },
  transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*@xstyled.*).*$'],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/website/', '/__type-tests__/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleNameMapper: {
    'styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
  },
}
