const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'xstyled',
        author: 'Greg Bergé',
        description: 'A utility-first CSS-in-JS framework built for React.',
        siteUrl: 'https://xstyled.dev',
        githubRepositoryURL: 'https://github.com/gregberge/xstyled',
        baseDirectory: path.resolve(__dirname, '..'),
        navItems: [{ title: 'Docs', url: '/docs/' }],
        sections: [
          'Getting Started',
          'Core Concepts',
          'Customization',
          'Layout',
          'Flexbox',
          'Grid',
          'Box Alignment',
          'Spacing',
          'Sizing',
          'Typography',
          'Backgrounds',
          'Borders',
          'Effects',
          'Tables',
          'Transitions',
          'Animations',
          'Transforms',
          'Interactivity',
        ],
        carbonAdsURL:
          '//cdn.carbonads.com/carbon.js?serve=CE7IL2JN&placement=xstyleddev',
        docSearch: {
          appId: 'YTUZ8SLPDN',
          apiKey: '5b2a313e57330d1d333ff8d2e937005d',
          indexName: 'smooth-code-xstyled',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-154496255-3',
      },
    },
  ],
}
