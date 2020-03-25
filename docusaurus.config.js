module.exports = {
  title: 'Dev @ DTI',
  tagline: "Documenting Cornell DTI's Development Best Practices",
  url: 'https://dev.cornelldti.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'cornell-dti',
  projectName: 'dev.cornelldti.org',
  themeConfig: {
    prism: {
      theme: require('./atom-one-light-theme'),
      darkTheme: require('prism-react-renderer/themes/nightOwl')
    },
    navbar: require('./navbar'),
    footer: require('./footer')
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.json') },
        theme: { customCss: require.resolve('./src/css/custom.css') }
      }
    ]
  ]
};
