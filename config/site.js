module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Myles Bennett | Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Myles', // Alternative Site title for SEO
  siteTitleShort: 'Myles', // short_name for manifest
  siteHeadline: 'Creating beautiful websites', // Headline for schema.org JSONLD
  siteUrl: 'https://condescending-stonebraker-eac330.netlify.com/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'Dark One-Page portfolio with cards & detailed project views',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '', // Twitter Username
  ogSiteName: '', // Facebook Site Name
  ogLanguage: 'en_US', // og:language
  googleAnalyticsID: 'UA-47519312-4',

  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Your information
  avatar: '/logos/headshot.png',
  name: 'Myles Bennett',
  location: 'Toronto',
  socialMedia: [
    {
      url: 'https://www.linkedin.com/in/myles-bennett',
      name: 'LinkedIn',
    },
    {
      url: 'https://github.com/mylessbennett',
      name: 'Github',
    },
  ],
}
