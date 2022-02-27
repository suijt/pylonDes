/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// const withSass = require('@zeit/next-sass')
// module.exports = withSass()

const webpack = require('webpack');
module.exports = {
  webpack: (config, {
      buildId,
      dev,
      isServer,
      defaultLoaders,
      webpack
  }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      config.plugins.push(
          new webpack.ProvidePlugin({
              $: "jquery",
              jQuery: "jquery",
              "window.jQuery": "jquery"
          })
      );
      // Important: return the modified config
      return config;
  }
}
