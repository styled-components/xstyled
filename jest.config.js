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
        '/packages/styled-components-native/',
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
      transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
      transform: {
        '^.+\\.(j|t)sx?$': 'babel-jest',
      },
      testPathIgnorePatterns: [
        '/node_modules/',
        '/website/',
        '/packages/(?!styled-components-native)',
      ],
      coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
    },
  ],
}
