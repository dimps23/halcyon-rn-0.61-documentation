/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'React-Native documentation', // Title for your website.
  tagline: 'A react-native starter kit.',
  url: 'https://react-native-halcyon.github.io', // Your website URL
  baseUrl: '/documentation/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'documentation',
  organizationName: 'dimps23',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'getting-started/introduction', label: 'Docs' },
    // { components: 'component', label: 'Components' },
    // { page: 'help', label: 'Help' },
    // { languages: true },
    { blog: true, label: 'Blog' },
  ],

  // List of projects/users/orgs using your project for the users page.
  users: [
    {
      caption: 'Harold',
      // You will need to prepend the image path with your baseUrl
      // if it is not '/', like: '/test-site/img/image.jpg'.
      image: 'img/user-harold.gif',
      infoLink: 'https://halcyondigital.slack.com/messages/DHHUV9TFH/',
      pinned: false,
    },
    {
      caption: 'Steve',
      image: 'img/user-steve.gif',
      infoLink: 'https://halcyondigital.slack.com/messages/DHEE15EN4/',
      pinned: false,
    },
    {
      caption: 'Mimosa Golf & Country Club',
      image: 'img/mimosagolf.jpg',
      infoLink: 'https://mimosagolf.com',
      pinned: true,
    },
  ],

  /* path to images for header/footer */
  headerIcon: 'img/logo.svg',
  footerIcon: 'img/logo.svg',
  favicon: 'img/logo.png',

  /* Colors for website */
  colors: {
    primaryColor: '#003a7c',
    secondaryColor: '#000000',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Halcyon Digital Media`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'vs2015',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    '/documentation/js/sidenav.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/documentation/js/code-block-buttons.js',
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  scrollToTOp: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  usePrism: [
    'jsx',
    'js',
    'java',
    'gradle',
  ],
};

module.exports = siteConfig;
