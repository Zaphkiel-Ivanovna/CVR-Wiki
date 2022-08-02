// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const variablesJSON = require('./variables.json')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ChilloutVR CCK FR',
  tagline: "Tutoriels sur l'utilisation du CCK en Français",
  url: 'https://cvr-tutos.zaphkiel.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Alpha Blend Interactive', // Usually your GitHub org/user name.
  projectName: 'cvr-tutos', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'CVR Tutoriels FR',
          src: 'img/CVR_Tutos.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutoriels',
          },
          {
            to: variablesJSON.serveurDiscord.discordCVRFrance,
            label: 'Discord CVR France',
            position: 'right',
          },
          {
            to: variablesJSON.serveurDiscord.discordCVROfficiel,
            label: 'Discord CVR Officiel',
            position: 'right',
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
