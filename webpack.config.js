const path = require('path');

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.j(s|sx)$/,
      exclude: /node_modules/
    }]
  },
  mode: 'none'
};

