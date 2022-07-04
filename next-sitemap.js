module.exports = {
  siteUrl: require('./site.config').domain,
  generateRobotsTxt: true,
  exclude: ['/server-info', '/logo', '/payment-complete']
};
