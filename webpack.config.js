const path = require('path');

const SRC_DIR = path.join(__dirname, 'client', 'src');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  // entry: path.join(SRC_DIR, 'index.js'),
  entry: path.join(SRC_DIR, 'index'),
  output: {
    path: OUT_DIR,
    filename: 'app.js',
    publicPath: '/'
    // filename: 'index.jsx'
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: ["regenerator-runtime/runtime.js", "<your enter js file>"]
};

