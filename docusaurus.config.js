// @ts-check
// `@type` JSDoc annotations allow IDE autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TinyFrameJS',
  tagline: 'A tiny, lightning‑fast dataframe engine for JavaScript',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tinyframejs.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AlphaQuantJS', // Usually your GitHub org/user name.
  projectName: 'tinyframejs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AlphaQuantJS/tinyframejs/edit/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'TinyFrameJS',
        logo: {
          alt: 'TinyFrameJS Logo',
          src: 'img/docusaurus.png',
          href: '/',
          target: '_self',
        },
        items: [
          {
            to: '/docs/getting-started',
            position: 'left',
            label: 'Getting Started',
          },
          {
            to: '/docs/user-guide',
            position: 'left',
            label: 'User Guide',
          },
          {
            to: '/docs/api/README',
            position: 'left',
            label: 'API Reference',
          },
          {
            to: '/docs/release-notes',
            position: 'left',
            label: 'Release Notes',
          },
          {
            href: 'https://github.com/AlphaQuantJS/tinyframejs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://twitter.com/tinyframejs',
            position: 'right',
            className: 'header-twitter-link',
            'aria-label': 'Twitter account',
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
                to: '/docs/getting-started',
              },
              {
                label: 'User Guide',
                to: '/docs/user-guide',
              },
              {
                label: 'API Reference',
                to: '/docs/api/README',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/tinyframejs',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/tinyframejs',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/tinyframejs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AlphaQuantJS/tinyframejs',
              },
              {
                label: 'Release Notes',
                to: '/docs/release-notes',
              },
              {
                label: 'Contribute',
                href: 'https://github.com/AlphaQuantJS/tinyframejs/blob/main/CONTRIBUTING.md',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} AlphaQuantJS. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
