var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var toString  = Function.prototype.call.bind(Object.prototype.toString);
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// Webpack Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

//const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const ENV = process.env.NODE_ENV = process.env.ENV = 'dev';

module.exports = {
  devtool: 'source-map',
  // devtool: 'eval',

  //
  entry: {
    'vendor': [
      'jquery',
      // Polyfills
      'core-js/client/shim',
      'zone.js/dist/zone',
      'zone.js/dist/long-stack-trace-zone',
      // Angular2
      '@angular/common',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/core',
      '@angular/router',
      '@angular/http',
      // RxJS
      'rxjs',
      // Other
      'jquery',     
      'bootstrap',
      'd3',
      'nvd3',
      'ng2-nvd3'
    ],
    'app': [
      './src/index'
    ]
  },

  // Config for our build files
  output: {
    path: root('dist'),
    filename: '[name].js',
    // filename: '[name].[hash].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
    // publicPath: 'http://mycdn.com/'
  },

  resolve: {
    root: __dirname,
    extensions: ['','.ts','.js','.json','.css','.html' ],
    alias: {
      jquery: path.join(__dirname, '/node_modules/jquery/src/jquery'),
      main: path.join(__dirname, '/src/style.css'),
      bourbon: path.join(__dirname, '/node_modules/bootstrap/dist/css/bootstrap.css')
    }
    
  },

  module: {
    preLoaders: [ { test: /\.ts$/, loader: 'tslint-loader' } ],
    loaders: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          'ignoreDiagnostics': [
            2403, // 2403 -> Subsequent variable declarations
            2300, // 2300 Duplicate identifier
            2304, // 2304 Cannot find name
            2374, // 2374 -> Duplicate number index signature
            2375  // 2375 -> Duplicate string index signature
          ]
        },
        exclude: [ /\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/ ]
      },

      // Support for *.json files.
      { test: /\.json$/,  loader: 'json-loader' },

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw-loader' },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader' },
    ],
    noParse: [
     /zone\.js\/dist\/.+/,
     /reflect-metadata/,
     /es(6|7)-.+/,
     /.zone-microtask/,
     /.long-stack-trace-zone/
    ]
  },

  htmlLoader: {
        minimize: false // workaround for ng2
    },

  plugins: [
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common', filename: 'common.js', minChunks: 2, chunks: ['app', 'vendor'] }),
    new HtmlWebpackPlugin({ template: './index.html', inject: 'body', chunksSortMode: 'dependency' }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ 
      mangle: { keep_fnames: true },
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      } }),
    new ExtractTextPlugin('[name].css'),
    new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery"}),
    new webpack.ProvidePlugin({	nv: 'nvd3' }),
    new webpack.DefinePlugin({'process.env': { 'ENV': JSON.stringify(ENV) } })    
  ],

  // Other module loader config
  tslint: {
    emitErrors: false,
    failOnHint: false
  },

  // our Development Server configs
  // our Webpack Development Server config
  devServer: {
    historyApiFallback: true,
    publicPath: '/dist'
  }
};

function getBanner() {
  return 'This is a sample ';
}

function root(args) {
  args = sliceArgs(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
function rootNode(args) {
  args = sliceArgs(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}

