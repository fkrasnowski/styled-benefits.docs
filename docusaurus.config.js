module.exports = {
  title: 'Styled Benefits',
  tagline: 'Events, variants and more for styled components/Emotion',
  url: 'https://styled-benefits.now.sh',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/styled-benefits-logo.ico',
  organizationName: 'fkrasnowski', // Usually your GitHub org/user name.
  projectName: 'styled-benefits', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Styled Benefits',
      logo: {
        alt: 'Styled Benefits',
        src: 'img/styled-benefits-logo.svg',
      },
      items: [
        {
          to: 'docs/start',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/fkrasnowski/styled-benefits',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/start',
            },
            {
              label: 'Interactive',
              to: 'docs/API/events',
            },
          ],
        },

        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/fkrasnowski/styled-benefits',
            },
          ],
        },

        {
          title: 'Backers',
          items: [
            {
              label: 'Franciszek Krasnowski',
              href: 'https://github.com/fkrasnowski',
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} Styled Benefits, Built with Docusaurus\n`,
    },
    prism: {
      theme: require('./src/theme/andromeda-theme'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/fkrasnowski/styled-benefits.docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
