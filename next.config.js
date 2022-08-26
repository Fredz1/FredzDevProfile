module.exports =
  {
    poweredByHeader: false,
    reactStrictMode: true,
    optimizeFonts: true,
    compress: true,
    images: {
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16,32,48,64,96,128,256,384],
      domains: ['github']
    },
    webpack: config => {
      config.module.rules.push(
        {
          test: /\.pdf$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        }
      )
      return config
    }
  }