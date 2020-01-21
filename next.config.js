const withSass = require('@zeit/next-sass')
const withCSS = require("@zeit/next-css");
const withLess = require('@zeit/next-less');
const withOptimizedImages = require('next-optimized-images');
require('dotenv').config()
const webpack = require('webpack');

//const withBundleAnalyzer = require('@next/bundle-analyzer');
module.exports = withLess(withSass(withCSS(withOptimizedImages({
    env: {
        REACT_APP_CONTENTFUL_API_KEY: process.env.REACT_APP_CONTENTFUL_API_KEY,
        REACT_APP_ACCESS_TOKEN: process.env.REACT_APP_ACCESS_TOKEN,
        REACT_APP_PREVIEW_ACCESS_TOKEN: process.env.REACT_APP_PREVIEW_ACCESS_TOKEN,
        REACT_APP_SPACE_ID: process.env.REACT_APP_SPACE_ID,
      },
      distDir: 'build',
      poweredByHeader: false,
      generateEtags: false,
      //enabled: process.env.ANALYZE === 'true',
      
}))));
