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
        siteUrl: 'https://www.smooth-code.com/open-source/xstyled/',
        github: 'https://github.com/smooth-code/xstyled',
        menu: ['About', 'Introduction', 'Guides', 'API'],
        nav: [{ title: 'Docs', url: '/docs/' }],
        codeFundProperty: 306,
        algoliaDocSearch: {
          apiKey: '9a5b8a758fdc63c340972ae48583c2f9',
          indexName: 'smooth-code-xstyled',
        },
      },
    },
  ],
}
