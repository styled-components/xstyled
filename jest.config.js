module.exports = {
  projects: [
    {
      displayName: 'web',
      testEnvironment: 'jsdom',
      transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*@xstyled.*).*$'],
      transform: {
        '^.+\\.(j|t)sx?$': 'babel-jest',
      },
      testPathIgnorePatterns: [
        '/node_modules/',
        '/website/',
        '/packages/styled-components/src/native/',
      ],
      coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
      moduleNameMapper: {
        'styled-components':
          '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
      },
    },
    {
      displayName: 'native',
      preset: 'react-native',
      testPathIgnorePatterns: ['/node_modules/', '/website/'],
      testMatch: [
        '<rootDir>/packages/styled-components/src/native/__tests__/**/*.[jt]s?(x)',
        '<rootDir>/packages/styled-components/src/native/**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
    },
  ],
}
