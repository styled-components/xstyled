const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'xstyled',
        author: 'Greg Bergé',
        description:
          'Consistent theme based CSS for styled-components & emotion.',
        siteUrl: 'https://xstyled.dev',
        githubRepositoryURL: 'https://github.com/smooth-code/xstyled',
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
        licenseKey: '24A6B70D-C4A94AA6-826DC75D-64B099AA',
        docSearch: {
          apiKey: '9a5b8a758fdc63c340972ae48583c2f9',
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
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
  ],
}
