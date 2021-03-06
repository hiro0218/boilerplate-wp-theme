const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Sass = require('sass');
const Fiber = require('fibers');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/script/index.js'),
  stats: {
    hash: false,
    version: false,
    children: false,
    chunks: false,
    modules: false,
    reasons: false,
    source: false,
    publicPath: false,
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src'),
    ],
    alias: {
      '@src': path.resolve(path.join(__dirname, 'src')),
      '@script': path.resolve(path.join(__dirname, 'src/script')),
      '@style': path.resolve(path.join(__dirname, 'src/style')),
      '@image': path.resolve(path.join(__dirname, 'src/image')),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|s?[ca]ss)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'import-glob',
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              compact: true,
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-flexbugs-fixes')(),
                require('postcss-preset-env')({
                  stage: 3,
                }),
                require('postcss-sort-media-queries'),
                require('cssnano')({
                  preset: [
                    'default',
                    {
                      autoprefixer: false,
                    },
                  ],
                }),
              ],
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              keepQuery: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: Sass,
              sassOptions: {
                fiber: Fiber
              },
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpg|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'image/[name].[ext]',
        },
      },
    ],
  },
};
