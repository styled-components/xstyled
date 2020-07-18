module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'xstyled',
        slug: 'xstyled',
        author: 'Greg Bergé',
        description:
          'Consistent theme based CSS for styled-components & emotion.',
        siteUrl: 'https://xstyled.dev',
        github: 'https://github.com/smooth-code/xstyled',
        menu: ['About', 'Introduction', 'Guides', 'API'],
        nav: [{ title: 'Docs', url: '/docs/' }],
        carbonAdUrl:
          '//cdn.carbonads.com/carbon.js?serve=CE7IL2JN&placement=xstyleddev',
        googleAnalytics: 'UA-154496255-3',
        algoliaDocSearch: {
          apiKey: '9a5b8a758fdc63c340972ae48583c2f9',
          indexName: 'smooth-code-xstyled',
        },
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
