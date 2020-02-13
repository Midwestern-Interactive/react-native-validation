const path = require('path')

module.exports = {
  devtool: 'eval-source',
  entry: './webpack.index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'rn-validation.min.js',
    library: 'Validation'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
}