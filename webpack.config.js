const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// saas loader
const sass = require('sass');


module.exports = {
  //defining where our app starts
  entry:'./src/index.js',
    
  //Path and name of the deployed bundled file
  output:{
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    clean: true,
  },
    
  //loaders for babel and for styling
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  // Watching changes -- notice the No need to use the 'serve' command together with '{ watch: true }' configuration
  watch:true,

  //development server configurations
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}