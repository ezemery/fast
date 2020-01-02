const withSass = require('@zeit/next-sass')
const withCSS = require("@zeit/next-css");
//const withBundleAnalyzer = require('@next/bundle-analyzer');
module.exports = withCSS(withSass({
    env: {
        REACT_APP_CONTENTFUL_API_KEY: "B2uUjFaDZWaHsBFi6QimV1Q1QD7-xuwlWS0l12vhUQY",
        REACT_APP_ACCESS_TOKEN: "hCtmLS3BvKBX4jZVf559mhk2eaRQpVJFAXliFPsAc_M",
        REACT_APP_PREVIEW_ACCESS_TOKEN: "avXcCOgunLvkZgMi6iWW56khJ6aF854tqTRzSRmgHQ8",
        REACT_APP_SPACE_ID: "jkarnbztf3v4",
      },
      distDir: 'build',
      poweredByHeader: false,
      generateEtags: false,
      //enabled: process.env.ANALYZE === 'true',

      webpack(config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000,
                name: '[name].[ext]'
              }
            }
          })

        return config
      }
      
}));
