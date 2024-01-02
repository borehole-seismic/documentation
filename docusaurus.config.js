
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to Borehole Seismic\'s Documentation Hub',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://borehole-seismic.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'borehole-seismic', // Usually your GitHub org/user name.
  projectName: 'documentation',
  
  // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        //   //routeBasePath:'/',
        sidebarPath: './sidebars.js',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/BoreholeLogo.png',
          srcDark: 'img/BoreholeLogo_1.png'
        },

        items: [
  
          {
            label: 'Sign Out',
            to: '/signout', 
            position: 'right',
          },
        ],
      },
      footer: {  
        
        copyright: `Copyright © ${new Date().getFullYear()} Borehole Seismic, LLC. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      // plugins: [
      //   function myPlugin(context, options) {
      //     return {
      //       name: 'redirect-plugin',
      //       async contentLoaded({ actions }) {
      //         const { createRedirect } = actions;
      //         createRedirect({
      //           from: '/documentation/',
      //           to: '/documentation/login',
      //           isPermanent: true,
      //         });
      //       },
      //     };
      //   },
      // ]
    
    }),
};

export default config;
