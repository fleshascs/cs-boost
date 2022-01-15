const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  env: {
    siteName: 'cs-boost.lt',
    domain: 'https://cs-boost.lt',
    defaultTitle: 'CS 1.6 | Counter-Strike 1.6 Servers',
    defaultDescription: 'CS 1.6 Servers, Counter-Strike server list, CS 1.6 BOOST',
    googleAnalyticsKey: 'UA-125851250-1'
  },
  images: {
    disableStaticImages: true
  }
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: false
      }
    ]
  ],
  nextConfig
);
